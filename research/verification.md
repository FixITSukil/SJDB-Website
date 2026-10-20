# Verification — 20 October 2026

Story: A visitor explores SJDB services and work, selects a service, and contacts the company by call, WhatsApp or email from either English or Bahasa Malaysia.

## Confirmed

- `npm run build` passes TypeScript, Vite production compilation and HTML prerendering.
- Production page loads without browser runtime errors or broken image assets.
- English/BM switch updates the page and document language and persists across reloads without hydration errors.
- Service categories change their four cards; enquiry buttons preselect the chosen service.
- Required fields prevent empty submission. The phone pattern rejects alphabetic input and accepts a normal Malaysian mobile format.
- WhatsApp draft targets `60126004127`, preserves the visitor's inputs and selected service, and generates localized messages. Tests intercepted the outgoing window; no message was sent.
- Email preparation targets `sjdb.management@gmail.com`, preserves the details, and localizes both subject and body. No email was sent.
- Project filters change the gallery, cards open the native dialog, Escape closes it, and its quote action selects a valid service.
- FAQ details expand normally. Mobile menu opens and closes using Escape.
- No horizontal overflow at 320, 360, 390, 768, 1024 and 1440 pixels in Chromium. Desktop and mobile screenshots visually inspected in both languages.
- Initial HTML includes readable page content when JavaScript is disabled.
- PDF download returns HTTP 200 and is 8,572,818 bytes. PDF verification retained all 22 pages, identical extracted text and page dimensions; representative pages were visually inspected.
- `npm audit --omit=dev` reports zero vulnerabilities in production dependencies.
- GitHub Pages subdirectory simulation passed: relative assets and the PDF resolve under `/SJDB-Website/`, both languages persist, and optional `SITE_URL` generates correct absolute canonical/sharing metadata.

## Practical limits

- Call/email handlers, actual WhatsApp account availability and message receipt depend on the visitor's device and SJDB's accounts. Real outbound messages were not sent during testing.
- The site is ready locally and has not been deployed to a public domain. Canonical/sharing URLs should be set when that domain is chosen.
- Tests used Chromium emulation, not physical devices or every browser.
- The full dependency audit flags advisories in Tailwind 3's build-time glob/selector dependencies. They are absent from the production runtime; the build reads repository-owned patterns and CSS. Tailwind 3 was retained to follow the project conventions.
