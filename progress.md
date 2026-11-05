# SJDB website progress

- Completed source extraction and online research. The 2026 profile supplies branding, contacts, service facts, project references and original photography. No verified official social account or existing company website was found.
- Built an English/Bahasa Malaysia landing page with responsive navigation, service categories, project filtering and image dialogs, FAQ, profile download and contact actions.
- Added enquiry validation and localized WhatsApp/email drafts. Visitors review and send through their own app; no enquiry server is needed.
- Prerendered the production HTML, self-hosted fonts and images, and reduced the profile PDF from 84 MB to 8.6 MB.
- Verified the production build and browser flows. See `research/verification.md`.
- Prepared GitHub Pages deployment on pushes to `main` or a manual workflow run, using Node.js 22 and the prerendered `dist/` output. Relative asset paths support a repository subdirectory; the build can use `SITE_URL` for production sharing metadata.
- Published the public [FixITSukil/SJDB-Website](https://github.com/FixITSukil/SJDB-Website) repository and [customer presentation site](https://fixitsukil.github.io/SJDB-Website/). GitHub Actions build/deployment passed, and live desktop/mobile checks confirmed assets, PDF download, contact targets, enquiry preparation, project dialog and language persistence. No custom domain is configured.

## Customer reference draft — 5 November 2026

- Reviewed the customer's Graduan Bersatu Padat and Ambience Daya Jana references and built an approved revised draft using current SJDB content.
- Expanded the landing page into six static corporate pages: Home, About Us, Our Services, Projects, Gallery and Contact Us. Added a full-width photographic hero, corporate company header, photographic service categories, ten documented projects and nine gallery entries.
- Integrated the newer `origin/main` automatic-slideshow update into the revised hero, including pause/play, hover/focus pauses and reduced-motion support.
- Preserved English/Bahasa Malaysia, service enquiry preselection across pages, phone/WhatsApp/email actions, profile download, project filters and native image dialogs.
- Production build, prerendering, 48 responsive language/page checks and functional browser journeys passed. See `research/revised-draft-verification.md`.
- Revision stays on `customer-reference-draft`; `main` and its live deployment are unchanged. Additional customer information and photographs can be integrated when supplied.
