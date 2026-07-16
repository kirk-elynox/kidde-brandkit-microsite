---
title: "Kidde (KGS) — Engagement Scaffold"
type: sprint-scaffold
tags: [sprint-scaffold, kidde, project-management, proposed]
status: draft — PROPOSED (pre-scope)
client: "Kidde Global Solutions (KGS)"
reference_model: "Voxel Innovations Sprint Scaffold (single-track / backlog mode)"
engagement_type: "milestone (Phase 1: Discovery & Rapid-Prototype)"
budget_monthly: "NOT DISCUSSED — proposed starting tier, to confirm with Kidde"
points_per_sprint: 30
sprints_per_quarter: 3
sprint_length_weeks: 2
lead_angle: "Broad AI-enablement first (per JET, 2026-07-16)"
date created: 2026-07-16
date modified: 2026-07-16
---

# Kidde (KGS) — Engagement Scaffold

**Version:** 0.1 (Initial scaffold — adapted from the Voxel single-track model for a proposed Phase-1 Discovery & Rapid-Prototype engagement)
**Date:** 2026-07-16
**Lead angle:** Broad AI-enablement first (Gary Eckman's substance — specialized use case + data-foundation discipline)

> ⚠️ **Pre-scope notice.** This scaffold is built from a single **exploratory** intro call (2026-03-24) at which *"nothing has been committed"* (Vijay Kumar). **No budget, point count, timeline, or use case was agreed.** Every number below — the tier, the 30 points/sprint, the 3-sprint length — is Elynox's **proposed** starting shape to put in front of Kidde at the second call, not a recorded commitment. It exists to make the proposal concrete and testable, and it must be confirmed with Kidde before it becomes real. Where Kidde's own words ground a choice, they are quoted; everything else is a proposal.

---

## The shape of what we're proposing

Kidde described itself as *past* the AI-foundation stage (≈500 M365 Copilot licenses, training done, an AI CoE stood up) and *entering* the specialized-use-case stage, with two things it explicitly wants from a partner (Gary's words): *"deliver results quickly"* **and** *"the right data management strategy in place to actually make AI useful."* It also has a use-case backlog already gathered internally and a stated bias to *"fail fast, produce some prototypes, see what works."*

The right first engagement is therefore **not** a big platform build. It is a short, self-funding **Discovery & Rapid-Prototype phase** that (a) triages Kidde's existing use-case backlog with Elynox's maturity × fit × economics method, (b) ships one real 5-day rapid prototype on the highest-value, reachable-data slice, and (c) produces a lightweight data-foundation read so the prototype points at the durable data strategy Gary and Anil want. It is designed to earn the larger retainer, not to substitute for it.

---

## 1. Capacity Model — PROPOSED (to confirm)

**Base assumptions (proposed).**
- Firm capacity: 500 points/sprint (Elynox standard).
- Kidde Phase-1 allocation: **~30 points/sprint** — mapped to the **$5,000–$7,500/month** tier in Elynox's standard allocation table (5–8% of firm capacity). *Chosen as a modest, provable starting size; to confirm with Kidde.*
- Sprint length: 2 weeks. Phase 1 = **3 sprints (~6 weeks)**.

**Point scale (Elynox standard, invariant):** Small = 1pt · Medium = 3pts · Large = 5pts.
- *Small (Kidde ex.):* score one use case on the triage rubric.
- *Medium (Kidde ex.):* map one business process' data sources for reachability.
- *Large (Kidde ex.):* build the 5-day rapid prototype for the chosen slice.

**Budget per sprint (30 pts).**

| Component | Points | Purpose |
|---|---|---|
| Production & System (discovery, prototype build) | 22 | The core deliverable work |
| Admin & Governance | 5 | Sprint plan, status, backlog review, ClickUp hygiene |
| Buffer | 3 | Ad-hoc requests, overflow (≈ one Small + margin) |

**Role allocation (proposed).**

| Team member | Pts/sprint | What they do for Kidde |
|---|---|---|
| Daniel | ~16 | Strategic lead + primary hands-on prototype developer (his stated model) |
| Tony / dev | ~8 | Technical implementation, data-source wiring for the prototype |
| Lanedee | ~4 | Sprint plans, status reports, backlog reviews, ClickUp |
| JET | ~2 | Documentation, use-case brief quality |

*Person-day equivalents are deliberately excluded — points measure magnitude, not time (Elynox standard).*

---

## 2. Priorities — Backlog categories (enablement-led)

At ~30 pts/sprint the engagement runs as a **single backlog** with three categories (below the ~80-pt threshold where parallel tracks become viable). Work is pulled from whichever category has the highest-value next action, governed by a biweekly backlog review.

**Category A — Use-Case Triage & Prioritization** *(the enablement spine — leads)*
- *What it is:* Run Elynox's maturity × fit × economics triage across Kidde's already-gathered use-case backlog, so effort goes to the viable, high-value few. Directly answers Gary's *"how do we deliver those results quickly."*
- *Current state:* Kidde has *"all these use cases that we've gathered"* and is *"focusing on a few of them"* — but selection appears intuition-led, not scored.
- *Estimated cost:* ~8–12 pts for a first full pass (scales with backlog size).
- *"Done" looks like:* a scored, ranked shortlist with a recommended first slice and the rationale (maturity, AI-fit, economics) for each.

**Category B — First Rapid Prototype** *(the proof)*
- *What it is:* One 5-day Kaizen-style rapid prototype on the top-ranked slice — hands-on-keyboard, all relevant stakeholders touching it, adoption-first.
- *Current state:* Kidde has an early Azure RAG prototype and a CLM tool in deployment, but no Elynox-run rapid prototype.
- *Estimated cost:* ~10–14 pts (one Large + supporting tasks), data-access-dependent.
- *"Done" looks like:* a working prototype the intended frontline user has actually used, plus a plain-language write-up of what worked, what didn't, and whether the juice was worth the squeeze.

**Category C — Data-Foundation & Architecture Read** *(the durability layer — Anil's concern)*
- *What it is:* A lightweight assessment of the data sources behind the chosen slice — reachability, integration gaps, where data should live — feeding the *"right data management strategy"* Gary named, without a big up-front platform commitment.
- *Current state:* Kidde reports *"a lot of disparate systems... minimal integrations... no great data lake per se today."*
- *Estimated cost:* ~4–6 pts for a scoped, prototype-adjacent read (not an org-wide data audit).
- *"Done" looks like:* a one-page data-reachability note for the prototype's domain + a named recommendation for the data-foundation pattern the next phase should adopt.

---

## 3. Phase 1 Sprint-by-Sprint Plan (3 sprints, ~30 pts each)

**Sprint 1 — Triage & target**

| Component | Work | Pts |
|---|---|---|
| Production | Intake Kidde's use-case backlog; run maturity × fit × economics triage; produce ranked shortlist | 12 |
| Production | Data-reachability quick-scan on the top 2–3 candidates (which slice can a 5-day prototype honestly serve?) | 6 |
| System | Confirm environment/security constraints (Azure / GCC-High posture, access path) | 4 |
| Admin | Sprint plan, backlog review, status | 5 |
| Buffer | — | 3 |

*After Sprint 1, Kidde can say:* "We have a scored, ranked shortlist of our AI use cases and a chosen first prototype target, selected on maturity, fit, and economics — not gut feel."

**Sprint 2 — Rapid prototype**

| Component | Work | Pts |
|---|---|---|
| Production | Build the 5-day rapid prototype for the chosen slice (hands-on-keyboard) | 14 |
| Production | Stakeholder walkthrough + first frontline-user touch (adoption check) | 4 |
| System | Wire the prototype to reachable sample data | 4 |
| Admin | Sprint plan, status, demo prep | 5 |
| Buffer | — | 3 |

*After Sprint 2, Kidde can say:* "We stood up a working prototype for [chosen use case] in a sprint, and the people who'd actually use it have had hands on it."

**Sprint 3 — Prove, read, recommend**

| Component | Work | Pts |
|---|---|---|
| Production | Iterate prototype on frontline feedback; capture what worked / didn't / economics | 10 |
| Production | Data-foundation & architecture read for the prototype's domain + next-phase recommendation | 8 |
| Advisory | Phase-2 options: what a continuing enablement retainer would tackle next | 4 |
| Admin | Sprint plan, status, Phase-1 outcomes report | 5 |
| Buffer | — | 3 |

*After Sprint 3, Kidde can say:* "We have a proven prototype, an honest read on the data foundation it needs to scale, and a clear recommendation for where AI enablement pays off next — all in six weeks."

---

## 4. Beyond Phase 1 (what a continuing retainer could look like)

*Planning assumptions only — not committed.* If Phase 1 proves the model, a continuing enablement retainer would likely (a) templatize the rapid-prototype cycle so Kidde's AI CoE can run it, (b) address the data-foundation pattern surfaced in Category C at the process level, and (c) open the **marketing-modernization** door Vijay flagged (the Acuity-style channel/content angle) as a second workstream once budget supports parallel tracks. Sizing and structure to be set from Phase-1 findings and Kidde's confirmed budget.

---

## 5. Governance Cadence

| Checkpoint | Frequency | What Kidde sees | Owner |
|---|---|---|---|
| Sprint plan | Start of each sprint | The 2-week plan + point allocation | Lanedee |
| Status update | Mid-sprint | Progress + any blockers | Lanedee |
| Sprint recap + demo | End of each sprint | What shipped + the "you can say" claim | Daniel |
| Backlog review | Biweekly | Re-rank of remaining candidates | Daniel + Kidde (Gary/Sandeep) |

**Accountability principle.** If something slips, Kidde hears it from Elynox first, with the trade-off named — not discovered at the demo.

**Sprint cadence:** `plan → build → status → demo/recap → backlog review → plan`.

**Blocked-work protocol (non-negotiable).** Visible status → notify Kidde → **3-business-day SLA** → redirect effort to the next backlog item (no idle sprint time) → transparent recap of the swap. Given Phase 1 depends on **data access** (Kidde-side), this protocol matters: Daniel flagged that *"a lot of the timing comes down to how fast can we get access to sample data."*

---

## 6. ClickUp Structure (light — single track)

- One **Kidde** folder; one **Phase 1** list; one sprint list per sprint (Sprint 1–3).
- Custom fields: Category (A/B/C), Size (S/M/L), Status, Owner.
- No multi-track custom fields needed at this scale.
- Dashboard: sprint burn + backlog shortlist + "you can say" timeline.

---

## 7. Client-Facing vs. Internal Views

- **Kidde sees:** the sprint plans, the ranked shortlist, the prototype, demos, the "you can say" claims, and the Phase-1 outcomes report.
- **Kidde does not see:** internal point math, role point quotas, Elynox tool internals, this scaffold's capacity mechanics.
- **Kidde experiences:** a fast, honest, six-week proof that lands a working prototype and a credible next-step recommendation.

---

## 8. "When Can They Talk About It?" Timeline

| Timeframe | What Kidde can say | What backs it up |
|---|---|---|
| End of Sprint 1 (wk 2) | "We've triaged our AI use-case backlog and picked a first target on real criteria." | Scored shortlist + selection rationale |
| End of Sprint 2 (wk 4) | "We built a working prototype in a sprint and put it in front of real users." | The prototype + adoption walkthrough |
| End of Sprint 3 (wk 6) | "We proved a use case, read the data foundation it needs, and know where enablement pays off next." | Iterated prototype + data-foundation note + Phase-2 recommendation |

*Every claim is traceable to a specific sprint deliverable — no aspirational language.*

---

## 9. Planning Fallacy Defense (structural — small budget)

At 30 pts/sprint the 3-pt buffer absorbs exactly one Small task, so defense is structural, not budgetary:
- **Backlog absorbs ambition** — extra use cases wait their turn; they do not expand the current sprint.
- **Blocked-work SLA redirects effort** — if Kidde data access stalls, work pulls from Category A/C so no sprint idles.
- **Prototype anchors Sprint 2** — the most validated task type (Daniel's 5-day prototype) prevents an empty middle sprint.
- **Scope-injection has a stated trade-off** — a mid-sprint ask displaces a named backlog item, said out loud.

---

## 10. Automation Scope for Admin Work

Minimal at this scale — sprint reporting and backlog hygiene are handled inside the ~5-pt admin allocation. No dedicated automation build is proposed for Phase 1; automation candidates surface *from* the prototype work, not ahead of it.

---

## 11. Open Questions (high — this is a pre-scope engagement)

1. **Budget & tier** — none discussed. Is the proposed $5–7.5K/month / ~30-pt shape right, or does Kidde want a smaller paid pilot / larger first phase?
2. **Which door leads?** JET set the lead as broad AI-enablement; confirm with Kidde vs. Vijay's marketing deep-dive interest.
3. **First use case** — undecided. Which of Kidde's gathered use cases is the top candidate? (Needs the backlog itself.)
4. **Data access** — how fast can Kidde grant access to sample data for the prototype? (The pacing constraint Daniel named.)
5. **Environment/security** — Azure / GCC-High? What does Gary's security-first bar require of an outside partner?
6. **Decision-maker** — who signs off at Kidde? No CEO/decision-maker was named on the call (champion likely Gary and/or Vijay).
7. **Collateral** — Anil requested shareable, non-copyright-infringing case studies; owed as an immediate follow-up regardless of scope.

---

## 12. Financial Model Alignment — PROPOSED tiers (to confirm)

| Tier | Monthly | Pts/sprint | What it buys in Phase 1 |
|---|---|---|---|
| Pilot (lean) | ~$5,000 | ~25 | Triage + one rapid prototype; lighter data read |
| **Discovery & Prototype (recommended)** | **~$5,000–$7,500** | **~30** | Triage + one rapid prototype + data-foundation read + Phase-2 recommendation |
| Discovery+ | ~$10,000 | ~50 | Adds a second prototype or a deeper data-foundation assessment |

*These mirror Elynox's standard allocation table and are shown so the second call has a concrete anchor. No tier has been quoted to or agreed with Kidde.*

---

## Scaffold notes (for the run log)
- **Reference model:** Voxel single-track / backlog mode (closest to a small single-track engagement). PAN's three-track model was not used — Kidde Phase 1 is well below the ~80-pt track threshold.
- **Input adaptation:** sourced from the **Context Stack**, not a proposal (the proposal doesn't exist yet) — per the client-initialization phase-map note.
- **HTML/champion artifact:** deferred to the **Microsite** (Phase 7) to avoid two competing client surfaces; the markdown scaffold is the source of truth downstream phases read.
- **Honesty guardrail:** all capacity/financials labeled PROPOSED because no budget was discussed — flagged for the Authenticity Audit (Phase 4).
