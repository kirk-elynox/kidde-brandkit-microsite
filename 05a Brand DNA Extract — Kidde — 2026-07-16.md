---
title: "Brand DNA Extract — Kidde (KGS)"
type: brand-dna-extract
client: "Kidde Global Solutions (KGS)"
source: "https://www.kidde.com/ (live site, extracted via Claude-in-Chrome computed-style sweep + screenshot, 2026-07-16)"
method: "browser computed-style frequency sweep + CSS var read + visual screenshot"
date: 2026-07-16
pipeline: client-initialization / Phase 6 (Brand Kit) — Phase 1 DNA
---

# Brand DNA Extract — Kidde

**Extraction discipline:** every hex below was read from the live site's computed styles (frequency sweep over ~5,000 elements), not eyeballed. Inferred *roles* are labelled. The logo is a raster wordmark (no clean vector available; CDN fetch blocked), so its kit rendering is a **reconstruction stand-in**, marked as such.

## Colors (exact, with on-page evidence)

| Token | Hex | Evidence (usage) | Role (inferred) |
|---|---|---|---|
| Kidde Red | `#AC242A` | 26 text uses + 16 bg + 6 button bg; hero headline, top bar, "#1" band, primary CTA | **Primary brand / CTA / energy** |
| Ink Black | `#000000` | 343 text uses; body + section headers ("Complete Fire Safety Packages") | Primary text / foundation |
| White | `#FFFFFF` | 42 surface bg + 39 reversed text uses | Surface / reversed text |
| Slate Gray | `#747574` | 55 text uses | Secondary text |
| Panel Gray | `#F8F8F8` | 4 section bg uses (hero panel) | Light panel background |
| Panel Gray 2 | `#F7F8F9` | 3 bg + 2 button bg | Light panel / subtle button |
| Red Deep `[derived]` | `#8E1D22` | Not a distinct on-page token; derived one shade darker than `#AC242A` for hover/depth | CTA hover / depth — **`[derived]`, confirm at gate** |

- No brand CSS-variable palette exists on the site (the `:root` vars are Tailwind utility defaults, not brand tokens), so canonical status rests on **computed-style usage evidence**, which is strong for the top five.

## Typography

| Role | Family | Evidence | Weight | Rendering note |
|---|---|---|---|---|
| Display / Headline | **Proxima Nova** | 150+46 computed-style uses; hero + section headers | Bold (700) | Proxima Nova is a **commercial/Typekit** face, not on Google Fonts |
| Body / UI | **Proxima Nova** | same family across body | Regular (400) / Semibold (600) | — |
| **Rendering substitute** | **Montserrat** (Google Fonts) | — | 400/600/700 | Montserrat is the closest free geometric-sans stand-in; used in the kit HTML **only for rendering**, labelled — the brand face is Proxima Nova |

- Observed treatment: large bold headlines, tight tracking, uppercase for the wordmark and CTAs.

## Logo & Marks

- **Mark:** a red rounded-square badge containing a white negative-space flame/"K" motif, left of the wordmark.
- **Wordmark:** "KIDDE" in bold uppercase Proxima Nova, black (on light) / white (reversed).
- **Source asset:** raster PNG (`dyn.mktgcdn.com/...width=500`); no clean SVG; same-origin fetch **blocked**.
- **Kit rendering:** a **reconstructed SVG stand-in** of the red flame/badge + type-set wordmark, recolorable for variants (primary red-on-light, reversed white-on-red, mono). **Labelled a reconstruction — not the official vector.** For production the official asset should be requested from Kidde.

## Voice, tone & signature devices (verbatim evidence)

- **Positioning lines (verbatim):** "Find Peace of Mind with the Latest CO Detection"; "North America's #1 home fire safety brand" (*"Based on total household installations as of December 2023"*); "Complete Fire Safety Packages"; "Kidde has the solutions homeowners and renters need."; mission line "Protecting children from house fires is everyone's cause" ("Cause for Alarm" initiative).
- **Voice:** plain, direct, reassuring, protective; second person ("your family"); benefit-first, low jargon.
- **Signature devices:** (1) the red flame/"K" badge; (2) uppercase red CTA buttons with white text, lightly rounded; (3) the red full-width "#1" trust band with an asterisked substantiation; (4) uppercase wordmark. *All four carried into the kit.*

## Conflict log
- None (single source; no supplied kit to conflict with).

## Gaps / approximations
- `#8E1D22` hover red is **`[derived]`**, not evidenced on-page — confirm or replace at the review gate.
- Logo is a **reconstruction stand-in** (official vector not obtained) — request official asset from Kidde before any external use.
- Proxima Nova cannot be embedded from Google Fonts; **Montserrat renders as a labelled substitute.**
