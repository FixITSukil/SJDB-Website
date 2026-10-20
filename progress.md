# SJDB website progress

- Completed source extraction and online research. The 2026 profile supplies branding, contacts, service facts, project references and original photography. No verified official social account or existing company website was found.
- Built an English/Bahasa Malaysia landing page with responsive navigation, service categories, project filtering and image dialogs, FAQ, profile download and contact actions.
- Added enquiry validation and localized WhatsApp/email drafts. Visitors review and send through their own app; no enquiry server is needed.
- Prerendered the production HTML, self-hosted fonts and images, and reduced the profile PDF from 84 MB to 8.6 MB.
- Verified the production build and browser flows. See `research/verification.md`.
- Prepared GitHub Pages deployment on pushes to `main` or a manual workflow run, using Node.js 22 and the prerendered `dist/` output. Relative asset paths support a repository subdirectory; the build can use `SITE_URL` for production sharing metadata.
- Published the public [FixITSukil/SJDB-Website](https://github.com/FixITSukil/SJDB-Website) repository and [customer presentation site](https://fixitsukil.github.io/SJDB-Website/). GitHub Actions build/deployment passed, and live desktop/mobile checks confirmed assets, PDF download, contact targets, enquiry preparation, project dialog and language persistence. No custom domain is configured.
