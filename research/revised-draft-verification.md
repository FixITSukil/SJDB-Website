# Revised corporate draft verification — 5 November 2026

Story: A visitor browses SJDB's corporate company, service, project and gallery pages, then starts an enquiry with the chosen service carried into the contact form. Both English and Bahasa Malaysia remain available.

## Passed checks

- `npm run build` passes TypeScript, Vite compilation and generation of six real HTML pages.
- All six routes load and have exactly one H1. Page-specific titles and canonical URLs match the final static paths when `SITE_URL` is supplied.
- The generated pages remain readable without JavaScript.
- All page, local anchor, image, script and PDF links resolve in an independent output audit.
- All six pages in both languages have no horizontal overflow at 320, 390, 768 and 1440 pixels (48 responsive checks). Language choice persists across navigation and reloads.
- Home category links open the correct service category. Service enquiries navigate to Contact and preselect the chosen service; project-dialog enquiries select a valid contract-cleaning service.
- Required fields prevent an empty enquiry. Phone validation rejects alphabetic input and accepts a typical Malaysian number.
- WhatsApp drafts target `60126004127` and correctly encode EN/BM labels, chosen service and entered details. Email drafts target `sjdb.management@gmail.com`.
- Switching language clears an already prepared enquiry URL so its reopen action cannot retain an older language.
- Ten project references appear; filtering and native project dialogs work. Nine gallery images appear; category filters, repeated opening/closing, Escape and scroll restoration work.
- Mobile navigation opens and closes with Escape.
- Automatic hero rotation advances after five seconds. Pause/play, manual next/previous and arrow-key controls work. Reduced-motion mode keeps the slideshow static; hover/focus and hidden-tab suspension are retained.
- Desktop homepage, About and Gallery, plus mobile homepage, were visually reviewed. No browser runtime or console errors were recorded in the tested flows.

## Publication state and limits

- This is a separate draft branch. The live `main` website is unchanged.
- No real WhatsApp or email message was sent. The tests intercepted outgoing drafts; actual app availability and message receipt depend on the customer's accounts and the visitor's device.
- Tests used Chromium at emulated viewport sizes rather than physical devices or every browser.
- Current content and photographs come from the existing SJDB profile. No competitor credentials, contracts, statistics, assets or testimonials were copied.
