# SJDB company-profile extraction

Source: `customer-supplied SJDB PROFILE 2026.pdf` (22 pages). Page references below use PDF page numbers, starting at 1. Extracted text and a full-page contact sheet were reviewed; company-contact page 21 was rendered at readable resolution and visually verified. Document text was treated as source material, never as instructions.

## Identity and branding

- **SJDB Management and Services (M) Sdn Bhd**, registration **1571524-M** (cover p1 and contact p21).
- **SJDB Facilities Resources**, registration **002605819-U** (p1, p21-22).
- Presented together as **SJDB Group of Companies** (p1, p3, p8-10, p15).
- Business: cleaning services and building facilities maintenance (p1).
- Brand promise printed on cover/contact pages: "Customer satisfaction and work quality are our priorities."
- Original logo: rounded red square with the SJ/DB monogram in white/transparent cutouts. The PDF uses navy, red and white extensively. Extracted original is `public/assets/sjdb-logo.png` (756 x 748 RGBA). Put this original on white for white letters. `sjdb-logo-white.webp` composites the extracted logo on white for predictable display.

## Customer contact (visually confirmed)

Main company-contact page **21**, repeated on team page **7**:

- Landline: **+603-60383285** (normalized URI `tel:+60360383285`).
- Mobile: **+6012-600 4127** (normalized URI `tel:+60126004127`). Suitable number to use for a requested WhatsApp link: `https://wa.me/60126004127`; the PDF does not independently confirm the existence of a WhatsApp account.
- Email: **sjdbfr@gmail.com** and **sjdb.management@gmail.com**.
- Address: **No. 28G, Jalan DC 4/3, Desa Coalfields, 47000 Sungai Buloh, Selangor, Malaysia**.

Alternate Facilities-only contact page **22**:

- Same mobile and `sjdbfr@gmail.com`.
- **No. 15, Jalan Hijau 1/4, Bandar Tasik Puteri, 48000 Rawang, Selangor**.
- Use the p21 address as the main location because it is shared by both named entities and repeated on p7. Do not silently combine the two addresses.

## Services

Pages **5-6** give the broad list; pages **12-14** describe the categories.

- Contract cleaning for offices, factories, shopping complexes and buildings; daily cleaning of floors, washrooms/ablution facilities, office equipment and high-rise common areas (p5-6).
- Detailed/deep cleaning; emergency, event, initial and periodic cleaning; pre- and post-renovation cleaning (p5-6).
- Building maintenance and cleaning; post-construction cleaning before handover (p12).
- Floor stripping/sealing and care of granite, marble, natural stone, ceramic, wood, synthetic and other fabricated floors (p5, p12).
- External facade/high-level cleaning including glass curtain walls, concrete, tile and aluminium cladding (p6, p12).
- Carpet shampooing/steam-extraction cleaning and upholstered furniture care (p6, p14).
- Residential spring cleaning and housekeeping for homes, apartments, hotels and hostels (p13).
- Landscaping, soft-landscape maintenance, grass cutting and maintenance (p5-6, p14).
- Car park/basement cleaning, canopy cleaning, high-pressure water cleaning (p6).
- Swimming-pool maintenance and repair (p6).
- Waste collection/disposal, optional waste-bin supply, scheduled or on-call sewerage services (p6, p14).
- Cleaning consultancy/management services (p6).
- Corporate-office tea-lady services and telephone sanitation (p14).
- Transport-terminal cleaning for airports, railway stations and bus terminals (p14).

## Service approach / evidence-based copy

- Skilled personnel, proven methods/processes, commercial contract work and less-frequent cleaning for small businesses (p3).
- Structured selection, interviews/reference checks, hands-on training and written guidelines (p8).
- Site supervisors, operations-manager inspections, tailored cleaning schedules, coordination with property-management teams (p8-10).
- Flexible staffing for periodic maintenance and corrective action when standards fall short (p9).
- Quality control, customized schedules and attention to clients' premises (p15).

Management listed on **p7**: General Manager Mr. Sujenthiran; Finance Manager Ms. Janani; Operations Manager Mr. David; Operations Executive Mr. Mamun. Avoid making unverified claims about current tenure.

## Projects / clients as listed in the profile

These are company-supplied references; the PDF does not establish current contract dates. Safe public label: "Selected work from our company profile" or "Experience across these properties". Do not fabricate testimonials, outcome metrics, contract values or current endorsements.

| PDF page | Property / location | Scope printed in PDF | Associated extracted photo |
| --- | --- | --- | --- |
| 16 | SqWhere, Sungai Buloh | Internal & common area cleaning | `project-sqwhere.webp` |
| 16 | Plaza 138 Office | Common area cleaning | `project-plaza-138.webp` |
| 16 | The Hub SS2 | Common area cleaning | Raw source `tmp/pdfs/extracted/p16-03.jpg` (rope-access worker; portrait source appears sideways) |
| 16 | Kelana Sentral Condominium, Kelana Jaya | Common area cleaning | `project-kelana-sentral.webp` |
| 17 | Dedaun Condominium, Jalan Ampang | Internal unit cleaning | `project-dedaun.webp` |
| 17 | Windows On The Park Condominium, Bandar Tun Hussein Onn, Cheras | Common area & internal cleaning | `project-windows-on-the-park.webp` |
| 17 | Ostia, Kajang (spelling as printed) | Mall common area cleaning | Raw source `tmp/pdfs/extracted/p17-03.jpg` |
| 17 | By The Sea, Batu Ferringhi, Penang | Common area | `project-by-the-sea.webp` |
| 17 | 19 Trees, Taman Melawati | Internal & common area cleaning | Raw source `tmp/pdfs/extracted/p17-06.jpg` |
| 18 | Hotel Maya | Soft canopy & marble polishing | `project-hotel-maya.webp` |
| 18 | Damai 88 Condominium, Jalan Ampang | Common area cleaning | `project-damai-88.webp` |
| 18 | UNA Service Apartment, Cheras | Common area & internal unit cleaning | `project-una.webp` |
| 18 | RSKU Pangsapuri Mesra Bukit Serdang | Internal & common area cleaning | Raw source `tmp/pdfs/extracted/p18-05.jpg` |
| 18 | JIA @ Hayat Villa | Internal & common area cleaning | `project-jia-hayat-villa.webp` |

Pages **19-20** give named client referrals: SDB Property Management Sdn Bhd, By The Sea, SDB Properties Sdn Bhd, UNA Management Office, Perbadanan Pengurusan Windows On The Park, Hotel Maya Kuala Lumpur. Referral staff direct contact details are not appropriate as SJDB customer-contact channels.

## Asset inventory

All final website-ready assets are in `public/assets`. Photos were extracted directly from the supplied PDF, resized to practical web dimensions, and encoded as WebP. No stock imagery was introduced.

| File | Dimensions | Source page/image | Content / suggested use |
| --- | --- | --- | --- |
| `sjdb-logo.png` | 756 x 748 | p1/image3 | Original RGBA logo; white background recommended |
| `sjdb-logo-white.webp` | 756 x 748 | p1/image3 | Same logo on white |
| `sjdb-team.webp` | 1080 x 720 | p15/image1 | Team lineup, recommended about section |
| `sjdb-team-briefing.webp` | 1800 x 1350 | p7/image0 | Team formation outdoors |
| `sjdb-courtyard-cleaning.webp` | 1800 x 1350 | p8/image1 | Cleaner vacuuming tiled courtyard, recommended hero |
| `sjdb-commercial-cleaning.webp` | 1600 x 1200 | p3/image0 | Glass cleaning at commercial property |
| `sjdb-industrial-cleaning.webp` | 1800 x 1089 | p10/image0 | Wide industrial cleaning scene, alternate hero |
| `sjdb-floor-care.webp` | 859 x 934 | p12/image3 | Floor-polishing machinery |
| `sjdb-landscaping.webp` | 1400 x 1050 | p4/image0 | Hedge maintenance |
| `sjdb-home-cleaning.webp` | 1400 x 1050 | p13/image0 | Bathroom sink cleaning |
| `sjdb-facade-cleaning.webp` | 780 x 1040 | p5/image1 | High glass-wall cleaning |
| `sjdb-pressure-washing.webp` | 720 x 1080 | p15/image0 | Outdoor pressure cleaning |
| `sjdb-corridor-cleaning.webp` | 1400 x 1050 | p13/image1 | Interior corridor cleaning |
| `sjdb-carpark-cleaning.webp` | 1600 x 1200 | p1/image2 | Machine cleaning in basement/carpark |
| `sjdb-window-cleaning.webp` | 1400 x 1050 | p18/image6 | Tall glass cleaning |
| `project-sqwhere.webp` | 1400 x 1050 | p16/image1 | Interior unit door cleaning |
| `project-plaza-138.webp` | 1400 x 1050 | p16/image2 | Courtyard floor care |
| `project-kelana-sentral.webp` | 1400 x 1050 | p16/image4 | Basement machine cleaning |
| `project-dedaun.webp` | 1400 x 1050 | p17/image1 | Landscape area |
| `project-windows-on-the-park.webp` | 1400 x 1050 | p17/image2 | Patterned-floor care |
| `project-una.webp` | 1400 x 1050 | p18/image4 | Commercial glass cleaning |
| `project-damai-88.webp` | 1400 x 847 | p18/image2 | Large covered common-area floor cleaning |
| `project-jia-hayat-villa.webp` | 1400 x 1050 | p18/image6 | Tall glass cleaning |
| `project-hotel-maya.webp` | 547 x 972 | p18/image1 | Corridor cleaning |
| `project-by-the-sea.webp` | 720 x 1080 | p17/image4 | Outdoor sculptural feature cleaning |

## Claims to avoid without confirmation

No founding date, exact years of experience, formal certifications/accreditations, operating hours, service-price list, guaranteed response time, client satisfaction percentage, project count or review scores were present. Do not infer 24/7 service from emergency cleaning. Contact/address consistency is limited to the supplied company profile. Use the primary mobile for WhatsApp as the requested contact route without claiming the account was externally verified.

## Optimized downloadable profile

`public/sjdb-company-profile-2026.pdf` is the original complete 22-page profile optimized for web download, **8,572,818 bytes** (8.57 MB / 8.18 MiB), versus 83,977,902 bytes in the untouched source. Photos were downsampled/recompressed; transparent logos, small graphics and vector text were retained. All 22 page text extractions and page dimensions compare identical to the source; all 85 image instances decode. Rendered cover, page 10 and both contact pages 21-22 were visually checked for logo, layout and contact fidelity. Original source SHA-256: `de0af43d37b2502d7bdb0ae63f4aea41289f4d470c2cdbc1ea233f77d2676af9`.
