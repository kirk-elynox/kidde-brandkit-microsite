---
title: "Template: Coded Microsite Delivery Skeleton"
type: template
tags: [template, coded-microsite-delivery, nextjs, tailwind, microsite-delivery]
status: draft
aliases: []
related: ["[[SOP - Coded Microsite Delivery]]", "[[Standard Work - Coded Microsite Delivery]]", "[[Quality Rubric - Coded Microsite Delivery]]"]
source: "Session transcript — Kidde brand-kit-microsite Next.js port, 2026-07-16"
date created: 2026-07-16
date modified: 2026-07-16
---

# Template: Coded Microsite Delivery Skeleton

## Purpose

The fill-in starting structure for a new coded port. Copy this file manifest and the tables below into the new project folder at Phase 1 of [[SOP - Coded Microsite Delivery]].

## File Manifest

```
{client-slug}/
  package.json                <- copied from reference project, name only changed
  tsconfig.json                <- copied verbatim
  next.config.js                 <- copied verbatim
  postcss.config.js                <- copied verbatim
  .gitignore                        <- copied verbatim
  .claude/launch.json                 <- copied verbatim (dev server port config)
  tailwind.config.ts                    <- SAME token names as reference; NEW hex values from client's token source
  app/
    layout.tsx                             <- font loader (client's brand face or its labelled substitute)
    globals.css                              <- Tailwind entry + any shared utility classes
    page.tsx                                   <- homepage / entry route
    {route}/page.tsx                             <- one per ported HTML deliverable
  components/ui/
    Button.tsx  Input.tsx  Card.tsx  Accordion.tsx  Nav.tsx  Logo.tsx    <- restyled to new tokens
  README.md                                                                <- run instructions + known gaps
```

## Token-Mapping Table (fill in per client)

| Tailwind token | Source hex | Evidence / role (from token source) | Fidelity flag |
|---|---|---|---|
| `brand.{name}` | `#______` | | |
| `brand.{name}` | `#______` | | |
| `brand.{name}` | `#______` | | |

## Route Manifest (fill in per client)

| Source HTML file | New route | Interaction model (static page / rebuilt interactive deck) |
|---|---|---|
| | | |
| | | |

## Known Gaps Checklist (carry forward from the brand kit / token source)

- [ ] Logo is a reconstruction stand-in — official vector requested?
- [ ] Any `[derived]` color confirmed or replaced at review gate?
- [ ] Brand face substituted with a Google Fonts stand-in — noted in README?
- [ ] All internal navigation links (logo → home, CTAs → routes) wired and verified via `location.pathname`?
- [ ] Any rebuilt interaction checked against the known non-portable `scroll-snap` + `smooth scrollTo` pattern?
