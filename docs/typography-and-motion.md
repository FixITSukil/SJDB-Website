# Proposal-based typography and motion — 5 November 2026

## Typography evidence

The supplied SJDB 2026 profile uses several font families. Embedded font resources and representative rendered pages were inspected before choosing the website pairing:

- **League Spartan Bold** appears in the company identity and service descriptor on cover page 1. It now supplies the website's display headings and company name.
- **Public Sans Regular/Bold** appears in service text on pages 12–13. It now supplies the website's body and interface text.

This is a coherent pairing drawn from the actual proposal, rather than an attempt to reproduce every font used across its 22 pages. The previous Manrope/DM Sans pairing has been removed. Heading tracking is no longer tightly compressed; the cover-led hero and company identity use heavier uppercase type.

The fonts are self-hosted through Fontsource. Their SIL Open Font License notices are included in `public/fonts/`. The embedded PDF font binaries were not redistributed.

## Motion and controls

- Removed the visible pause/play button and its state. Previous/next arrows and slide-selection dots remain.
- Photographs continue to rotate every five seconds, with automatic suspension for hover, keyboard focus, hidden tabs and reduced-motion preferences.
- Added one short, staggered entrance for the homepage headline, description and enquiry actions.
- Section reveals use a quiet fade. Photo-hover zoom is limited to 2.5% and only applies when motion is allowed.
- Reduced-motion users receive static entrance content and a slideshow that does not auto-advance.

The local typography skill and the online [Frontend Design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) informed the hierarchy and restrained motion; the proposal supplied the font choices.

## Verified before publishing

Production build and six-page prerender passed. All six pages in both languages have no overflow at 320, 390, 768 and 1440 pixels (48 checks). The new font families and weights load correctly. No pause/play button appears in either language. Automatic slide advance, hover suspension, resume after interaction, manual navigation and reduced-motion behaviour passed browser checks without runtime errors.

Published by [GitHub Actions run 41989733322](https://github.com/FixITSukil/SJDB-Website/actions/runs/41989733322) from commit `0ad93ce`. Live verification confirmed both web font families loaded, no visible pause/play control, automatic rotation, the hero entrance, Bahasa Malaysia persistence, mobile layout, reduced-motion behaviour and service enquiry preselection without browser errors.
