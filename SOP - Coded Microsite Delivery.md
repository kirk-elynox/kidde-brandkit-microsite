---
title: "SOP: Coded Microsite Delivery"
type: sop
tags: [sop, coded-microsite-delivery, nextjs, tailwind, microsite-delivery]
status: draft
aliases: ["Coded Microsite Port", "Next.js Microsite Delivery"]
related: ["[[Standard Work - Coded Microsite Delivery]]", "[[Quality Rubric - Coded Microsite Delivery]]", "[[Template - Coded Microsite Delivery Skeleton]]", "[[SOP - Microsite Delivery]]"]
source: "Session transcript — Kidde brand-kit-microsite Next.js port, 2026-07-16; cross-checked against the live 'SOP - SOP and Standard Work Codification' task (ClickUp #86e22fu7b)"
date created: 2026-07-16
date modified: 2026-07-16
---

# SOP: Coded Microsite Delivery

## Overview

A Microsite Delivery run (per [[SOP - Microsite Delivery]]) produces one self-contained HTML file. Some engagements need more than that file can give — shared components across several pages, real interactivity, or a codebase the client's own team can extend. This SOP is what runs *after* that HTML file is approved, to turn it into a real Next.js + Tailwind app without re-deciding the tooling, the token strategy, or the component shape from zero each time.

**Estimated time:** 2–4 hours for a first port of a Brand Kit + one Microsite deliverable; ~30–60 min to add a further deliverable to an already-scaffolded project.

**Operator:** Claude (Cowork mode), with the requester providing the reference project to mirror, the brand-token source, and final review.

**Inputs:** One or more audit-passed, single-file HTML deliverables (Brand Kit and/or Microsite, built per [[SOP - Microsite Delivery]]); an existing coded reference project to mirror (a Next.js + Tailwind app already built on this pattern); the client's brand-token source (a Brand DNA Extract or equivalent, with hex values, evidence, and fidelity flags); Node.js + npm.

**Output:** A working Next.js + Tailwind app in the client's project folder — one route per ported HTML deliverable, sharing one `components/ui` library and one `tailwind.config.ts` token set — verified rendering with zero console/server errors.

---

## Phase 0: Prerequisite Gate (pre-flight, 15–30 min)

The port renders decisions already made upstream. Do not start until they exist.

### Step 0.1 — Confirm the source deliverable(s) are audit-passed *(pre-flight blocker)*

Confirm at least one single-file HTML deliverable (Brand Kit and/or Microsite) has already passed its Authenticity Audit gate. There is nothing to port without an approved source.

**Exit test:** source HTML file(s) located; audit-pass status confirmed against the run log.

### Step 0.2 — Locate a reference coded-scaffold project *(pre-flight blocker for structure)*

Find an existing Next.js + Tailwind project already built on this pattern — config files plus a `components/ui` primitive library. Read its `package.json`, `tailwind.config.ts`, and component list before touching anything. If none exists, this SOP does not apply; scaffolding a pattern from zero is a different, undocumented process.

**Exit test:** the reference project's config files and component set have been read and understood, not just located.

### Step 0.3 — Confirm the token source *(pre-flight blocker for brand fidelity)*

Confirm a Brand DNA Extract (or equivalent) exists: a document giving exact hex values, on-page evidence, and fidelity flags (e.g. `[derived]`, reconstruction stand-in, font substitution) for the client's brand. Never invent a token; only port what has been extracted and evidenced.

**Exit test:** token source located; every color/font entry has a hex (or named substitute), a role, and a fidelity note.

### Step 0.4 — Confirm environment and working branch

Node.js + npm available. No port conflicts from a prior session's dev server. If the target repo's default branch already matches its remote (nothing to branch off from), create a feature branch before starting work rather than committing directly to the tracked default branch.

**Exit test:** `node -v` / `npm -v` return versions; `ps aux | grep next-server` shows no orphaned process holding the target port; the active git branch is not the one a later PR would need as its own base.

---

## Phase 1: Scaffold the Stack (15–20 min)

Copy the reference project's config files verbatim — `package.json` (rename only), `tsconfig.json`, `next.config.js`, `postcss.config.js`, `.gitignore`, `.claude/launch.json`.

**Constraint:** don't upgrade or re-pick dependency versions from the reference project. The point of mirroring is to reuse a setup already proven to work, not to freshly evaluate versions per engagement.

**Exit test:** `npm install` completes with no errors.

---

## Phase 2: Port the Design System (15–30 min)

Build `tailwind.config.ts` using the reference project's token *names* (role-based — e.g. `red`/`ink`/`panel`/`slate`/`line`, not literal color names) but the *client's* hex values from Step 0.3's token source. Comment each token inline with its fidelity flag (e.g. `// [derived] hover/depth — confirm at review gate`).

Wire fonts via `next/font/google` in `app/layout.tsx`. If the brand face isn't on Google Fonts, use the labelled substitute the token source already named — don't pick a new one.

**Exit test:** `tailwind.config.ts` token count matches the token source's table 1:1; every fidelity flag from the source carries a matching code comment.

---

## Phase 3: Port the Component Library (20–30 min)

Recreate the reference project's UI primitives (typically `Button`, `Input`, `Card`, `Accordion`, `Nav`, `Logo`) restyled to the Phase 2 tokens — same component API, new visual language.

For `Logo`: if the client has no official vector asset, build a labelled reconstruction stand-in (a simple shape + wordmark) and say so in a code comment. Never present a reconstruction as the real mark.

**Constraint:** don't add or drop components relative to the reference project without a stated reason — the shared library is what keeps future ports fast.

**Exit test:** every reference-project component exists here, compiles, and draws only from Phase 2 tokens (no hardcoded hex values).

---

## Phase 4: Port Each HTML Deliverable to a Route (30–90 min per deliverable)

Create one route per source HTML file (e.g. `app/proposal/page.tsx`, `app/brandkit/page.tsx`). Deliverables can be ported one at a time as they're requested — a project scaffolded for one deliverable doesn't need to be re-scaffolded to add a second; Phases 1–3 run once per project, Phase 4 runs once per deliverable.

Extract every piece of copy, every number, and the full structure into typed data arrays / JSX — verbatim from the source, never paraphrased. Cross-check section by section against the source file.

Map every inline CSS value (colors, spacing, borders) to Phase 2 tokens. Where the source uses a literal pixel value with no clean Tailwind-scale match (e.g. `padding: 14px 26px`), use arbitrary-value syntax (`px-[26px]`) — don't guess a decimal utility class. Tailwind's default spacing scale only defines `.5` increments at 0.5 / 1.5 / 2.5 / 3.5; a value like `px-6.5` or `gap-4.5` compiles with *no error and no effect*, silently dropping the padding/gap entirely.

Where a group of inline elements (pills, tags, badges) sits inside a narrow container, don't rely on a one-directional margin (`mr-2`) between them — at some viewport width the group will wrap, and a margin set on only one axis leaves the wrapped items touching with zero gap. Wrap the group in a flex container with `gap-2` (or similar) instead; a gap applies correctly on both axes regardless of wrap state.

**Exit test:** a side-by-side text diff of the rendered route against the source HTML shows no missing or altered copy; no hardcoded hex colors introduced; any inline-element group that can wrap has been checked at a narrow viewport, not only a wide one.

---

## Phase 5: Rebuild Non-Trivial Interactions (30–60 min, if applicable)

If the source HTML has vanilla-JS interaction (a slide deck, an accordion, tab logic), reimplement it as a React client component with real state. Don't embed the original `<script>` block.

Watch for interaction patterns that don't port cleanly: `scroll-snap-type: mandatory` combined with `Element.scrollTo({behavior:'smooth'})` reliably gets its animation cancelled by Chromium's snap logic mid-flight. If the source used this pattern, rebuild the transition on a CSS `transform: translateX()` track driven by component state instead of native scroll + snap.

**Constraint:** never assume a source interaction pattern behaves identically once rebuilt in React — retest it from scratch.

**Exit test:** every interactive path (buttons, keyboard, any jump-navigation) moves to the correct state, confirmed by reading application state — not by a visual glance.

---

## Phase 6: QA Render *(HARD GATE, 15–30 min)*

Check for and stop any stray `next-server` process on the target port before starting the dev preview. Start the dev server; check both the server log and the browser console for errors.

Verify rendered content two ways, not one:
1. Extract the page's full text and diff it against the source content.
2. Read computed styles (`getComputedStyle`) on any element whose class was hand-written for spacing or color, or any element in a group that can wrap (see Phase 4), to confirm the intended CSS actually applied — including at a narrow viewport / after wrapping, not only in the first layout you happen to see.

Click through every interactive path using element references from the accessibility tree (`read_page` → click by ref), not eyeballed screenshot coordinates — coordinate clicks miss when the screenshot's pixel space doesn't match the live viewport.

**Constraint:** a screenshot rendering correctly at the top of a page is not proof the rest of the page is correct. This class of browser tooling can return blank captures at non-zero scroll depth even when the DOM is fine. Treat full-text extraction and computed-style checks as ground truth; treat screenshots as a supplementary visual spot-check only.

**Exit test:** zero console/server errors; full-text diff clean; every hand-written style class verified via computed style; every interactive control verified via ref-based click or keyboard, with the resulting state confirmed.

---

## Phase 7: Cross-Link Routes (10–15 min)

Wire internal navigation between the ported routes (a logo mark linking home, CTA buttons linking to specific routes) using Next.js `Link`.

**Exit test:** every internal link navigates to the correct route, confirmed via `location.pathname` after the click — not assumed from the link's `href` alone.

---

## Phase 8: Deliver, Persist & Record (10–15 min)

Stop the dev server. If the working branch already tracks the client repo's default branch (see Step 0.4), create a feature branch, commit, push, and open a PR rather than pushing straight to the default branch. Report exactly which files were created or changed, and what was verified versus what could not be checked (e.g. a tool limitation) — never claim a check happened if it didn't.

**Exit test:** requester has an accurate file list and verification summary, and — where relevant — a PR link; the dev server is not left running.

---

## Phase 9: Log & CI (5–10 min)

Note the run (source deliverable(s) ported, routes created, any deltas from this SOP) in the project's session log or `CLAUDE.md`. Feed any new failure mode encountered back into the Troubleshooting table below, per [[Standard Work - Coded Microsite Delivery]]'s Continuous Improvement principle. If the requester asks for this SOP suite itself to be regenerated or revised, treat that as a live continuous-improvement trigger, not a from-scratch task — check what changed since the last version before rewriting.

**Exit test:** run logged; new failure modes (if any) captured for the next revision.

---

## Pipeline Summary

```
PHASE 0: Prerequisite Gate → PHASE 1: Scaffold the Stack → PHASE 2: Port the Design System →
PHASE 3: Port the Component Library → PHASE 4: Port Each Deliverable to a Route →
PHASE 5: Rebuild Non-Trivial Interactions → PHASE 6: QA Render (HARD GATE) →
PHASE 7: Cross-Link Routes → PHASE 8: Deliver, Persist & Record → PHASE 9: Log & CI
```

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Write/Edit tool calls fail with a hook error before any file changes | A broken PreToolUse hook script (e.g. pointing at a path with an unquoted space) errors on every call | Use Bash heredocs (`cat > file << 'EOF'`, quoted delimiter) or inline `python3` scripts for writes/edits; flag the broken hook to the requester rather than silently routing around it forever |
| A button/CTA visually has no horizontal padding | A guessed Tailwind decimal spacing class (e.g. `px-6.5`, `gap-4.5`) isn't in the default scale and silently emits no CSS | Use arbitrary-value syntax matching the source's exact px value (`px-[26px]`); verify via `getComputedStyle` |
| Two inline items (pills, tags) touch with no gap between them | They wrapped onto separate lines inside a narrow container, and only a one-directional margin (`mr-2`) was set — nothing for the wrapped/vertical case | Wrap the group in a flex container with `gap-2`, which spaces correctly on both axes regardless of wrap state |
| A programmatic slide/carousel transition gets stuck a few pixels into the scroll | `scroll-snap-type: mandatory` + `scrollTo({behavior:'smooth'})` — the snap logic cancels the in-flight animation | Rebuild the transition on a CSS `transform: translateX()` track driven by component state instead of native scroll |
| A click on a button/link appears to do nothing | Screenshot-coordinate click landed on the wrong element because the screenshot's pixel space didn't match the live viewport | Use `read_page` to get the element's ref, click by ref, not by eyeballed coordinates |
| Screenshot returns a blank white image partway down a page | Known rendering-tool quirk at non-zero scroll depth, not a content bug | Confirm via `get_page_text` and `getComputedStyle`; reload the tab to recover the renderer if screenshots stay blank even at the top |
| `next dev` fails to start: "Another next dev server is already running" | A stray `next-server` process from an earlier preview session wasn't fully stopped | `ps aux \| grep next-server`, confirm it belongs to this project, `kill` it, then retry |
| A ported page's brand colors look off from the source | A token was eyeballed instead of copied from the token source | Re-derive every `tailwind.config.ts` color directly from the token source's hex table; never approximate by eye |
| `gh pr create` fails or would target a branch into itself | The working branch already equals the repo's tracked default branch, so there's no valid head/base pair | Create a feature branch before committing (Step 0.4), or before Phase 8 if this was missed earlier |
