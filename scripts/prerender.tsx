import { readFile, writeFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../src/App";
import { business, contact } from "../src/business";
import { copy } from "../src/content";
import type { Language } from "../src/content";
import {
  corporateCopy,
  heroSlides,
  localizedPageFiles,
  pageHref,
} from "../src/corporate-content";
import type { PageId } from "../src/corporate-content";

const template = await readFile("dist/index.html", "utf8");
const siteUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL.replace(/\/?$/, "/"))
  : null;
const languages = ["en", "ms"] as const;
const languageTags = { en: "en-MY", ms: "ms-MY" } as const;
const pageIds = Object.keys(localizedPageFiles.en) as PageId[];

const titles: Record<Language, Record<PageId, string>> = {
  en: {
    home: "Cleaning & Facilities Maintenance in Selangor | SJDB",
    about: "About SJDB | Cleaning Company in Sungai Buloh",
    services: "Contract Cleaning & Facilities Services | SJDB",
    projects: "Commercial & Residential Cleaning Projects | SJDB",
    gallery: "Cleaning and Facilities Work Photos | SJDB",
    contact: "Contact SJDB for a Cleaning Quote | Sungai Buloh",
  },
  ms: {
    home: "Pembersihan & Penyelenggaraan Fasiliti di Selangor | SJDB",
    about: "Tentang SJDB | Syarikat Pembersihan di Sungai Buloh",
    services: "Pembersihan Kontrak & Perkhidmatan Fasiliti | SJDB",
    projects: "Projek Pembersihan Komersial & Kediaman | SJDB",
    gallery: "Foto Kerja Pembersihan dan Penyelenggaraan | SJDB",
    contact: "Hubungi SJDB untuk Sebut Harga Pembersihan | Sungai Buloh",
  },
};

function descriptionFor(page: PageId, language: Language) {
  const text = corporateCopy[language];
  return {
    home: text.hero.description,
    about: text.about.intro,
    services: text.services.description,
    projects: text.work.description,
    gallery: text.gallery.description,
    contact: copy[language].contact.description,
  }[page];
}

const escapeMarkup = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const canonical = (base: URL, page: PageId, language: Language) =>
  new URL(pageHref(page, language), base).href;

function alternates(base: URL, page: PageId) {
  return [
    ...languages.map((language) => ({
      language: languageTags[language],
      href: canonical(base, page, language),
    })),
    { language: "x-default", href: canonical(base, page, "en") },
  ];
}

function structuredData(base: URL, page: PageId, language: Language) {
  const url = canonical(base, page, language);
  const businessId = new URL("#business", base).href;
  const siteId = new URL("#website", base).href;
  const pageTypes = {
    home: "WebPage",
    about: "AboutPage",
    services: "CollectionPage",
    projects: "CollectionPage",
    gallery: "CollectionPage",
    contact: ["ContactPage", "FAQPage"],
  };
  const businessReference = { "@id": businessId };
  const breadcrumbId = `${url}#breadcrumb`;
  const pageEntity = {
    "@type": pageTypes[page],
    "@id": `${url}#page`,
    url,
    name: titles[language][page],
    description: descriptionFor(page, language),
    inLanguage: languageTags[language],
    isPartOf: { "@id": siteId },
    about: businessReference,
    ...(page !== "home" && { breadcrumb: { "@id": breadcrumbId } }),
    ...(page === "home" && { mainEntity: businessReference }),
    ...(page === "contact" && {
      mainEntity: copy[language].faq.items.map((faq) => ({
        "@type": "Question",
        "@id": `${url}#faq-${faq.id}`,
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    }),
  };
  const graph = [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: business.name,
      alternateName: business.shortName,
      url: base.href,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "SSM registration number",
        value: business.registration,
      },
      description: corporateCopy.en.hero.description,
      logo: new URL(business.logo, base).href,
      image: new URL(heroSlides[0].image, base).href,
      telephone: contact.mobile,
      email: contact.email,
      address: { "@type": "PostalAddress", ...business.address },
      contactPoint: [
        { "@type": "ContactPoint", contactType: "office", telephone: contact.office },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: contact.mobile,
          email: contact.email,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: base.href,
      name: business.shortName,
      publisher: businessReference,
      inLanguage: Object.values(languageTags),
    },
    pageEntity,
  ];
  if (page === "home") return { "@context": "https://schema.org", "@graph": graph };
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...graph,
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: corporateCopy[language].breadcrumbHome,
            item: canonical(base, "home", language),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: corporateCopy[language].nav[page],
            item: url,
          },
        ],
      },
    ],
  };
}

function seoHead(base: URL, page: PageId, language: Language) {
  const url = escapeMarkup(canonical(base, page, language));
  const json = JSON.stringify(structuredData(base, page, language)).replaceAll("<", "\\u003c");
  const otherLanguage = language === "en" ? "ms" : "en";
  return [
    `<link rel="canonical" href="${url}" />`,
    ...alternates(base, page).map(
      (entry) => `<link rel="alternate" hreflang="${entry.language}" href="${escapeMarkup(entry.href)}" />`,
    ),
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${escapeMarkup(business.shortName)}" />`,
    `<meta property="og:locale" content="${languageTags[language].replace("-", "_")}" />`,
    `<meta property="og:locale:alternate" content="${languageTags[otherLanguage].replace("-", "_")}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n    ");
}

// Prerender each language so visitors and crawlers get the full page from its URL.
for (const language of languages) {
  for (const page of pageIds) {
    const title = escapeMarkup(titles[language][page]);
    const description = escapeMarkup(descriptionFor(page, language));
    let html = template
      .replace('<html lang="en">', `<html lang="${language}">`)
      .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${title}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*/, (_, tag) => `${tag}${description}`)
      .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, (_, tag) => `${tag}${title}`)
      .replace(/(<meta\s+property="og:description"\s+content=")[^"]*/, (_, tag) => `${tag}${description}`);

    if (siteUrl) {
      const image = escapeMarkup(new URL(heroSlides[0].image, siteUrl).href);
      html = html
        .replace(/(<meta property="og:image" content=")[^"]*/, (_, tag) => `${tag}${image}`)
        .replace("</head>", () => `  ${seoHead(siteUrl, page, language)}\n  </head>`);
    }

    const markup = renderToString(<App page={page} language={language} />);
    await writeFile(
      `dist/${localizedPageFiles[language][page]}`,
      html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`),
    );
  }
}

if (siteUrl) {
  const urls = languages.flatMap((language) => pageIds.map((page) => [
    "  <url>",
    `    <loc>${escapeMarkup(canonical(siteUrl, page, language))}</loc>`,
    ...alternates(siteUrl, page).map(
      (entry) => `    <xhtml:link rel="alternate" hreflang="${entry.language}" href="${escapeMarkup(entry.href)}" />`,
    ),
    "  </url>",
  ].join("\n")));
  await writeFile("dist/sitemap.xml", [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n"));
}
console.log(`Prerendered ${pageIds.length * languages.length} corporate pages${siteUrl ? " and generated sitemap.xml" : ""}.`);
