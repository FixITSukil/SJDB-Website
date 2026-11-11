import { readFile, writeFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../src/App";
import { corporateCopy, heroSlides, pageFiles } from "../src/corporate-content";
import type { PageId } from "../src/corporate-content";

// Every page is a real HTML file, so direct links work on static hosts and Pages.
const template = await readFile("dist/index.html", "utf8");
const descriptions: Record<PageId, string> = {
  home: corporateCopy.en.hero.description,
  about: corporateCopy.en.about.intro,
  services: corporateCopy.en.services.description,
  projects: corporateCopy.en.work.description,
  gallery: corporateCopy.en.gallery.description,
  contact:
    "Contact SJDB in Sungai Buloh, Selangor for professional cleaning and facilities maintenance. Call, WhatsApp or email our team to discuss your requirements.",
};
const escapeAttribute = (text: string) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const baseUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).href.replace(/\/?$/, "/")
  : null;

for (const page of Object.keys(pageFiles) as PageId[]) {
  const title =
    page === "home"
      ? "SJDB | Professional Cleaning & Facilities Maintenance"
      : `${corporateCopy.en.nav[page]} | SJDB Management and Services`;
  const description = descriptions[page];
  let html = template
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeAttribute(title)}</title>`,
    )
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/,
      `$1${escapeAttribute(description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/>)/,
      `$1${escapeAttribute(title)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/>)/,
      `$1${escapeAttribute(description)}$2`,
    );

  if (baseUrl) {
    const canonical =
      page === "home" ? baseUrl : new URL(pageFiles[page], baseUrl).href;
    const socialImage = new URL(heroSlides[0].image, baseUrl).href;
    html = html
      .replace(
        /<meta property="og:image" content="[^"]*"\s*\/>/,
        `<meta property="og:image" content="${socialImage}" />`,
      )
      .replace(
        "</head>",
        `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" /></head>`,
      )
      .replace(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
        (_match, json) => {
          const business = JSON.parse(json);
          business.url = baseUrl;
          business.image = socialImage;
          return `<script type="application/ld+json">${JSON.stringify(business)}</script>`;
        },
      );
  }

  await writeFile(
    `dist/${pageFiles[page]}`,
    html.replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(<App page={page} />)}</div>`,
    ),
  );
}
console.log(`Prerendered ${Object.keys(pageFiles).length} corporate pages.`);
