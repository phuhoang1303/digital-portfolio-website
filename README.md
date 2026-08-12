# Phu Hoang — Digital Performance Marketing Portfolio

A production-ready editorial portfolio built with Next.js, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Lenis, and locally hosted variable fonts. The homepage combines native sticky positioning with scroll-linked timelines for cinematic stacked cards, reveal choreography, parallax, and counters. Motion automatically simplifies on smaller screens and disables under `prefers-reduced-motion`.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content and structure

- `data/portfolio.ts` — all biography, expertise, case studies, metrics, experience, and asset replacement specifications.
- `components/PortfolioHome.tsx` — semantic homepage sections.
- `components/CaseVisual.tsx` — reusable CSS/SVG campaign visual system.
- `components/MotionController.tsx` — stacked cards, reveals, counts, line drawing, depth, and parallax.
- `app/projects/[slug]/page.tsx` — shared statically generated case-study route.
- `app/globals.css` — design tokens, responsive layouts, interaction states, and reduced-motion rules.

## Placeholder replacement guide

| Asset key | Current treatment | Recommended replacement |
| --- | --- | --- |
| `portrait` | Editorial CSS silhouette | Transparent PNG or WebP, 1600 × 2000 px |
| `project-ai-max` | Search campaign board | Approved campaign screenshot/mockup, 1800 × 1200 px |
| `project-app-ekyc` | Three CSS phone screens | Three app screens, 1170 × 2532 px each |
| `project-commerce` | Commerce/performance collage | Campaign or commerce visual, 1800 × 1350 px |
| `project-leads` | Lead funnel composition | Landing page/reporting visual, 1800 × 1200 px |
| `project-joystay` | Browser and GA4 event map | Website capture, 1920 × 1200 px |
| `cv` | Downloadable placeholder note | Final PDF at `public/phu-hoang-cv.pdf` |

All KPI values currently labelled “Illustrative placeholder” must be replaced with approved, non-confidential data. Replace the placeholder email, LinkedIn URL, role chronology, and employer details in `data/portfolio.ts` before launch.
