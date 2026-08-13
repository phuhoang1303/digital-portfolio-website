# Project Context

## Product

Phu Hoang's digital performance marketing portfolio is an editorial Next.js site. All biography, project, capability, experience, and performance content is stored in `data/portfolio.ts`. Project imagery, metrics, contact details, work history, and the CV remain intentionally replaceable placeholders until approved source material is supplied.

## Architecture

- Next.js 16 App Router, React 19, and strict TypeScript
- Custom global CSS with Tailwind CSS 4 available through `@import "tailwindcss"`
- GSAP and ScrollTrigger for scroll-linked motion
- Lenis synchronized with the GSAP ticker for smooth scrolling
- Local Fraunces and Manrope variable fonts
- Static homepage plus statically generated `/projects/[slug]` case-study routes

## Homepage Structure

The homepage keeps this order: hero, about/expertise, selected work intro, five project panels, capabilities, experience, performance/results, and contact. The work section contains its own nested card sequence but remains part of the main editorial stack.

## Stacking Motion System

Updated August 2026 using implementation patterns from:

- `pulkitxm/claude-directory/templates/stacking-cards-portfolio`
- `RaunakOnGithub/capsules-website-remake`
- `references/portfolio-animation-reference.mp4`

The current implementation preserves all portfolio content and visual styling while changing the transition mechanics:

- `MotionController.tsx` collects the main section cards, work intro, and project panels in document order.
- At widths of 768px and above, each outgoing card is pinned until the next card reaches the shared top edge.
- `pinSpacing: false` lets the incoming card rise naturally over the pinned card.
- Incoming cards receive increasing z-index values so later cards always paint above buried cards.
- The next card's travel from the viewport bottom to the pin edge scrubs the outgoing card from scale `1` to `0.96`, brightness `1` to `0.88`, and a dark overlay from `0` to `0.075`.
- Tablet widths use a lighter `0.975` scale, `0.93` brightness, and `0.045` overlay.
- Below 768px, tall content remains in normal document flow and receives only a small scrubbed rise/scale entrance.
- `prefers-reduced-motion` disables Lenis, pinning, depth transforms, filters, overlays, and decorative animation while preserving readable normal flow.
- The existing reveals, counters, process/timeline fills, parallax, hover interactions, and route curtain remain in place.

The principal motion files are:

- `components/MotionController.tsx`
- `components/SmoothScroll.tsx`
- `components/TransitionLink.tsx`
- `components/Interactive.tsx`
- `app/globals.css`

## Motion Tokens

Global CSS defines the editorial motion values near the main design tokens:

- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`
- `--motion-stack-scale: .96`
- `--motion-stack-brightness: .88`
- `--motion-stack-cover: .075`
- `--motion-stack-scrub: .48`
- `--motion-stack-top: 18px`

`MotionController.tsx` reads these values from computed CSS, so JavaScript and responsive CSS remain synchronized. Tablet media queries override the same tokens with lighter values.

## Verification

The local site is expected at `http://localhost:3000`. Use Chrome at 1440px, 768px, and 390px to check slow and fast scrolling, card release timing, overlap, z-index, clipping, and horizontal overflow. Also test with `prefers-reduced-motion: reduce`.

In the August 2026 Codex environment, direct Chrome control was unavailable because the ChatGPT browser extension and native-host manifest were not installed. Source validation, HTTP checks, lint, TypeScript, and production build were used, but a future session with the browser extension should repeat visual scroll QA.

## Repository State Note

`package-lock.json` had a pre-existing uncommitted platform/dependency metadata change before the motion work began. Preserve it unless the owner explicitly asks to normalize or revert it.
