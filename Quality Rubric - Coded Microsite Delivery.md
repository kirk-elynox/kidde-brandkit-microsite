---
title: "Quality Rubric: Coded Microsite Delivery"
type: quality-rubric
tags: [quality-rubric, coded-microsite-delivery, nextjs, tailwind, microsite-delivery]
status: draft
aliases: []
related: ["[[SOP - Coded Microsite Delivery]]", "[[Standard Work - Coded Microsite Delivery]]", "[[Template - Coded Microsite Delivery Skeleton]]", "[[Quality Rubric - Microsite Delivery]]"]
source: "Session transcript — Kidde brand-kit-microsite Next.js port, 2026-07-16"
date created: 2026-07-16
date modified: 2026-07-16
---

# Quality Rubric: Coded Microsite Delivery

## Purpose

Scores a completed coded port against the same six-category shape used by [[Quality Rubric - Microsite Delivery]] (the single-file HTML sibling), adapted for a multi-file Next.js/Tailwind output. MUST criteria are structural and objective; SHOULD criteria improve quality but don't block delivery on their own.

## Categories & Criteria

### 1. Prerequisites
- **MUST-P1:** Source deliverable(s) confirmed audit-passed before any code was written.
- **MUST-P2:** A reference coded-scaffold project was identified and its config/component list read before scaffolding began.
- **MUST-P3:** A token source (Brand DNA Extract or equivalent) with hex + evidence + fidelity flags was located before `tailwind.config.ts` was written.

### 2. Content Fidelity
- **MUST-CF1:** Every section's copy in each ported route matches the source HTML verbatim — no paraphrase, no summarization, no added claims.
- **MUST-CF2:** Any story-points-not-hours (or equivalent) convention in the source is preserved, not silently reintroduced in a different unit.
- **SHOULD-CF3:** A side-by-side section count exists (source sections vs. ported sections) with no unaccounted difference.

### 3. Brand Fidelity
- **MUST-BF1:** Every `tailwind.config.ts` color token traces to an exact hex in the token source — no eyeballed approximation.
- **MUST-BF2:** Every `[derived]` / reconstruction / substitution flag from the token source appears as a code comment at the point it's used (config, `Logo` component, font loader).
- **SHOULD-BF3:** No hardcoded hex value appears anywhere outside `tailwind.config.ts` (all components consume tokens, not literals).

### 4. Structure
- **MUST-S1:** The `components/ui` library matches the reference project's component set, or a deliberate deviation is documented.
- **MUST-S2:** Config files (`package.json`, `tsconfig.json`, `next.config.js`, `postcss.config.js`) mirror the reference project's versions and settings.
- **SHOULD-S3:** One route per source HTML deliverable, cleanly separated (no single page holding multiple deliverables' content).

### 5. Interaction & Render
- **MUST-IR1:** Zero console errors and zero dev-server errors at final check.
- **MUST-IR2:** Every interactive control (button, keyboard path, jump-navigation) was verified via ref-based click or key press with the resulting state confirmed programmatically — not asserted from a screenshot alone.
- **MUST-IR3:** Any hand-written spacing/color utility class outside the default Tailwind decimal scale was verified via `getComputedStyle`, not assumed correct from the class name.
- **SHOULD-IR4:** Any rebuilt interaction with a known non-portable source equivalent (see Standard Work) was explicitly checked against that failure mode.

### 6. Delivery
- **MUST-D1:** The dev server was stopped after verification — nothing left running.
- **MUST-D2:** The requester received an accurate account of what was verified vs. what could not be checked (tool limitations disclosed, not glossed over).
- **SHOULD-D3:** The run and any new failure modes were logged for the SOP's next revision.

## Verdict Tiers

| Verdict | Criteria |
|---|---|
| **Pass** | All MUST across all 6 categories pass |
| **Revise** | 1–2 MUST failures, confined to one category — fixable without redoing the whole port |
| **Reject** | 3+ MUST failures, or any MUST failure in Content Fidelity or Brand Fidelity — those two categories carry the audit risk the source HTML already resolved once |
