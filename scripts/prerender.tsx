import { readFile, writeFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../src/App";

// Ship readable page content in the initial HTML for search engines and slow connections.
let html = await readFile("dist/index.html", "utf8");
const markup = renderToString(<App />);

// The Pages workflow provides its final address; local builds remain portable.
if (process.env.SITE_URL) {
  const siteUrl = new URL(process.env.SITE_URL).href.replace(/\/?$/, "/");
  const socialImage = new URL("assets/sjdb-courtyard-cleaning.webp", siteUrl).href;
  html = html
    .replace(
      /<meta property="og:image" content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${socialImage}" />`,
    )
    .replace(
      "</head>",
      `<link rel="canonical" href="${siteUrl}" /><meta property="og:url" content="${siteUrl}" /></head>`,
    )
    .replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_match, json) => {
      const business = JSON.parse(json);
      business.url = siteUrl;
      business.image = socialImage;
      return `<script type="application/ld+json">${JSON.stringify(business)}</script>`;
    });
}

await writeFile(
  "dist/index.html",
  html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
);
console.log("Prerendered the English landing page.");
