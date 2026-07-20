---
title: "Standard Work: Coded Microsite Delivery"
type: standard-work
tags: [standard-work, coded-microsite-delivery, nextjs, tailwind, microsite-delivery]
status: draft
aliases: ["Coded Microsite Port Framework"]
related: ["[[SOP - Coded Microsite Delivery]]", "[[Quality Rubric - Coded Microsite Delivery]]", "[[Template - Coded Microsite Delivery Skeleton]]"]
source: "Session transcript — Kidde brand-kit-microsite Next.js port, 2026-07-16; cross-checked against the live 'Standard Work - SOP and Standard Work Codification Framework' task (ClickUp)"
date created: 2026-07-16
date modified: 2026-07-16
---

# Standard Work: Coded Microsite Delivery

## Purpose

This Standard Work supplies the framework behind [[SOP - Coded Microsite Delivery]] — why each phase is shaped the way it is, and what "correct" means where the SOP's steps don't spell it out line by line. Where the SOP says *what to do*, this document says *why it holds up*.

**Suite shape:** this is a Pattern A suite (Thick SOP + Thick Standard Work) — a single workflow with a clear, linear phase sequence and one skill domain (coded delivery), rather than several distinct sub-processes that would warrant separate numbered files.

## Core Principles

### 1. Mirror, Don't Reinvent

Every coded port starts from an existing reference project's tooling and file structure (config files, the same six-component `components/ui` library) rather than a fresh scaffold decision.

**Why this matters:** a scaffold choice made once, well, and reused is more reliable than a fresh one made under time pressure on every new client engagement. Reinventing the config on each port reintroduces bugs already solved (dependency versions, font-loading pattern, tsconfig strictness) and produces drift between client projects that makes future maintenance harder.

### 2. Brand Tokens Are Swapped, Not the Architecture

The reference project's token *names* stay role-based (`red`, `ink`, `panel`, `slate`, `line` — not client-specific names); only the *values* change per client, sourced from that client's own token source.

**Why this matters:** components read by purpose, not literal color name, which is what makes the same `Button.tsx` / `Card.tsx` file portable across clients with a one-file token swap instead of a rewrite. If token names were client-specific, every component would need editing per engagement, not just the config.

### 3. Content Fidelity Beats Convenience

Copy in a ported route is extracted character-for-character from the audit-passed source HTML — never rephrased, summarized, or "cleaned up" while turning it into a data array.

**Why this matters:** the source HTML already passed an Authenticity Audit; a paraphrase introduced silently during the code port would reintroduce exactly the risk the audit gate exists to catch, without anyone re-running that gate.

### 4. Interaction Is Rebuilt, Not Reused

Any nontrivial vanilla-JS interaction in the source HTML (a slide deck, an accordion) is reimplemented in React with real component state — the original `<script>` block is never embedded directly, and the interaction is retested from scratch once ported.

**Why this matters:** a pattern that works in one runtime context doesn't necessarily work identically in another. This exact process hit a reproducible case where `scroll-snap-type: mandatory` combined with `scrollTo({behavior:'smooth'})` — code that worked in the static HTML file — got its animation silently cancelled by Chromium once driven by React state. Assuming portability without retesting would have shipped a visibly broken deck.

### 5. Verify Beneath the Screenshot

The most trustworthy verification signals, in order: (1) full-page text extraction diffed against source content, (2) `getComputedStyle` checks on any hand-written class, (3) DOM/state inspection after an interaction, and only last (4) a screenshot.

**Why this matters:** screenshots and coordinate-based clicks were the two things repeatedly, demonstrably unreliable during this work — screenshots returned blank captures at non-zero scroll depth even when the DOM was correct, and coordinate clicks landed on the wrong element when the screenshot's pixel space didn't match the live viewport. Treating a blank screenshot as "broken," or a missed coordinate-click as "the button doesn't work," produces false debugging leads that waste a session chasing a tooling artifact instead of a real bug.

### 6. Layout Correctness Includes the Wrap Case

Any spacing decision between inline elements (pills, tags, badges) is checked at the width where the group wraps, not only at the width where it happens to fit on one line.

**Why this matters:** a spacing bug that only shows up when a container narrows enough to force a wrap is invisible in a wide preview and easy to ship unnoticed — exactly what happened when a one-directional `mr-2` between two pills looked fine until the card they sat in was narrow enough to force a second line, at which point the pills touched with zero gap. A `flex` + `gap` pattern removes the failure mode structurally instead of relying on remembering to check both layouts.

### 7. One Reconstruction Label, Carried Through

Any placeholder, derived, or reconstructed element inherited from the brand kit — a stand-in logo, a `[derived]` hover shade, a font substitution — keeps its exact label, carried into the code as an inline comment, at every step of the port.

**Why this matters:** the labels exist so nobody downstream mistakes a placeholder for the real, approved asset. A silent drop of the label anywhere in the pipeline (config comment, component, delivered page) recreates the exact risk the original brand extract was written to prevent.

## Framework Details

### The Six-Component Baseline

A coded port's `components/ui` library is, by convention, six files: `Button.tsx`, `Input.tsx`, `Card.tsx`, `Accordion.tsx`, `Nav.tsx`, `Logo.tsx`. This is not a hard rule for every future engagement, but it is the baseline set established by the reference project and should be the default unless the source deliverable clearly needs more or fewer.

### Token Fidelity Table

Every `tailwind.config.ts` should be traceable, token by token, back to its brand-token source:

| Tailwind token | Source hex | Evidence / role | Fidelity flag |
|---|---|---|---|
| `brand.red` | `#AC242A` | e.g. 26 text + 16 bg + 6 button uses | none — evidenced |
| `brand.red-deep` | `#8E1D22` | one shade darker than red, for hover | `[derived]` — confirm at review gate |

(Illustrative shape only — fill in per engagement from the client's own token source, not from this example.)

### Verification Hierarchy (see Principle 5)

1. `get_page_text` — full textual diff against source
2. `getComputedStyle(el)` — for any hand-written spacing/color class, checked at the width where wrapping/reflow actually occurs (see Principle 6)
3. Ref-based `read_page` → click, then re-read state (`location.pathname`, component state, DOM attribute) — never a coordinate guess
4. Screenshot — supplementary only; a blank capture at scroll depth is not evidence of a bug until confirmed by (1)–(3)

### Known Non-Portable / Fragile Patterns

- `scroll-snap-type: mandatory` + `Element.scrollTo({behavior:'smooth'})` — rebuild on a `transform: translateX()` track driven by state.
- Guessed Tailwind decimal-spacing classes outside {0.5, 1.5, 2.5, 3.5} (e.g. `px-6.5`, `gap-4.5`) — these compile with no error and no visual effect; always use arbitrary-value syntax (`px-[26px]`) when porting an exact pixel value that isn't on the default scale, and confirm via computed style.
- One-directional margin (`mr-2`, `mb-2`) between inline items that can wrap — use `flex` + `gap-*` instead so spacing holds in both the inline and wrapped layouts.

### Working-Branch Convention

If the target repo's local branch already matches its remote default branch, open a feature branch before Phase 1 rather than committing scaffold work directly to the default branch — this avoids reaching Phase 8 (Deliver) with nothing left to open a PR against.

## Continuous Improvement

This suite follows the standard lifecycle: **draft → canonical** (after 2+ real executions and requester approval) **→ deprecated** (superseded or retired). Review triggers include: 2–3 executions completed, the requester reports a deviation from what's written here, a new capability is added to the reference project, the process is optimized, or the companion [[SOP - Microsite Delivery]] changes in a way that affects this suite's Phase 0 prerequisites.

A request to regenerate or revise this suite is itself a review trigger, not a reason to discard everything and start over — check what changed since the last version (new failure modes hit, new steps taken, a different requester intent) and fold deltas in, rather than treating "redo" as "ignore prior content."

## Relationships

- **Upstream:** [[SOP - Microsite Delivery]] — the coded port only starts once a deliverable has already passed that SOP's QA Render and Review Gate as a single-file HTML artifact.
- **Companion:** [[Quality Rubric - Coded Microsite Delivery]] — the measurable bar this Standard Work's principles are scored against.
- **Companion:** [[Template - Coded Microsite Delivery Skeleton]] — the fill-in file manifest and token-mapping table referenced in Framework Details above.
