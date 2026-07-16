---
title: "PRD — Kidde AI Enablement: Discovery & Rapid-Prototype Engagement (Phase 1)"
type: prd
tags: [prd, kidde, ai-enablement, proposed]
status: Draft — PROPOSED (pre-scope)
client: "Kidde Global Solutions (KGS)"
version: "1.0"
author: "Claude (Cowork) + Elynox"
approvers: "Daniel Englebretson (Elynox); Gary Eckman (KGS) — pending"
date_created: 2026-07-16
grounded_in:
  - "00 Context Stack — Kidde — 2026-03-24.md"
  - "01 Engagement Scaffold — Kidde.md"
  - "02 One-Page Proposal — Kidde.md (v0.2, audit-passed)"
pipeline: client-initialization / Phase 5
---

# PRD — Kidde AI Enablement: Discovery & Rapid-Prototype Engagement (Phase 1)

> **Scope of this PRD.** The first use case has **not** been selected — that selection is the first act of the engagement itself (Sprint 1). This PRD therefore specifies **the Phase-1 discovery-and-prototype *system* Elynox proposes to run with Kidde** — the repeatable capability that turns Kidde's gathered use-case backlog into one proven, adopted prototype plus a durable data-foundation read. A **second, use-case-specific PRD** (v2) will follow once the slice is chosen. Every Kidde fact below is sourced to the 2026-03-24 call or the Context Stack; all capacity/financials are PROPOSED.

**Header**

| Field | Value |
|---|---|
| Product | Kidde AI Enablement — Discovery & Rapid-Prototype Engagement (Phase 1) |
| Version | 1.0 (Draft, pre-scope) |
| Author(s) | Claude (Cowork) + Daniel Englebretson (Elynox) |
| Status | Draft — for the second (Sign-Off) call |
| Approvers | Daniel (Elynox); Gary Eckman (KGS) — pending |
| Grounded in | Context Stack · Engagement Scaffold · One-Page Proposal (audit-passed) |

---

## Section 1 — Mission & Problem Definition

### Core Challenge
Kidde has built an AI **foundation** — a broad Microsoft 365 Copilot rollout, company training, and a newly formed AI Center of Excellence — but does not yet have a **repeatable way to convert its gathered use-case backlog into proven, adopted specialized use cases, quickly, on a data foundation that makes them durable.** Gary Eckman named the exact tension: *"how do we deliver those results quickly and how do we ensure that we as an organization get the right data management strategy in place to actually make AI useful."* Today, use-case selection appears intuition-led (*"we've got all these use cases... we're focusing on a few of them"*), the data base is thin (*"a lot of disparate systems... minimal integrations... no great data lake per se today"*), and adoption is unproven.

### Urgency & Opportunity
Kidde is roughly fourteen months out of its Carrier divestiture and spent the back half of 2025 standing up its IT ecosystem from scratch. It is now deliberately pivoting from foundation to specialization, with an Azure RAG prototype underway and a Contract Lifecycle Management tool in first deployment. The appetite and momentum are present now; the risk is spending them on use cases picked by gut, or on a platform commitment made before a prototype has earned it.

### Users & Beneficiaries
The near-term beneficiary is **Gary Eckman and the KGS Digital-Transformation / AI CoE**, accountable for turning the Copilot foundation into specialized results. Downstream beneficiaries are **KGS business-process owners** (marketing under Vijay Kumar first, then broader operations) and the **frontline users** who must actually adopt whatever is built.

### AI's Unique Role
This engagement does not automate a single known task. Its AI-specific value is (1) **triage** — deciding where AI genuinely earns its place versus where it *"can create more problems than it's worth"* (Daniel), and (2) **rapid prototyping** that lets the intended user touch a working system before any large commitment, so adoption is proven, not assumed. Orchestration over black-box automation; clarity before capability.

---

## Section 2 — Target Audience & User Experience

### Primary Persona — Gary Eckman (CSO / AI & IT lead, KGS)
- **Context:** Drove AI at his prior company for a year; now leads AI capability *and* IT infrastructure at KGS; security-first.
- **Desired outcome:** Results quickly, a real data-management strategy, and avoidance of known pitfalls.
- **Current pain:** Bought-in but early; *"our AI capabilities are certainly not robust today."* Needs proof a specialized use case can be stood up fast and safely.
- **Adoption barrier:** Whether a deliberately small Elynox team can serve enterprise scale (he floated *"50 use cases in the first week"*, then reassured *"we're not... looking to partner with a behemoth"*).

### Secondary Personas
- **Anil Thalayat (Data):** Wants data readiness respected; will judge whether a prototype's data foundation is real or hand-fed.
- **Vijay Kumar (Marketing):** Convener; his near-term interest is a marketing-modernization deep-dive (the second door, deferred to Phase 2+).
- **Sandeep (PMO):** Process/governance stakeholder for any delivery.
- **Frontline user (TBD by use case):** The person whose adoption defines success.

### User-Experience Outcomes (after Phase 1)
Kidde can select AI use cases on evidence rather than intuition; has one working prototype its real users have touched; knows the data foundation that prototype needs to scale; and holds a documented method its CoE can repeat.

### Adoption Barriers & Mitigations
| Barrier | Mitigation |
|---|---|
| Data-access latency (Daniel: *"how fast can we get access to sample data"*) | 3-business-day blocked-work SLA; pull from triage/data-read categories so no sprint idles |
| Security-first bar (Gary) | Confirm Azure / GCC-High posture and access path in Phase 0 before any build |
| Skepticism that a small team scales | Reframe scale as triage discipline, not headcount; prove with one shipped prototype |
| Frontline non-use | Adoption-first prototype: intended user touches it inside the sprint |

---

## Section 3 — MVP Features & Scope

### Must-Have "Features" (the Phase-1 deliverables)
1. **Use-Case Triage Rubric & Ranked Shortlist** — score Kidde's gathered backlog on maturity × AI-fit × economics; output a ranked shortlist with a recommended first slice and rationale. *Success:* a shortlist Kidde accepts as a better basis than gut feel.
2. **One Rapid Prototype (5-day, adoption-checked)** — a working prototype on the top slice, wired to reachable sample data, that the intended frontline user actually uses. *Success:* a real user session completed and captured.
3. **Data-Foundation & Architecture Read** — a scoped read of the data behind the chosen slice (reachability, gaps, where data should live) feeding Kidde's data-management strategy. *Success:* a one-page read plus a named next-phase data pattern.
4. **Method Handoff** — the triage-and-prototype method documented so the AI CoE can adopt it. *Success:* the CoE has the method in writing.

### Ideal Flow (signal → interpretation → response → resolution)
**Signal:** Kidde's use-case backlog + a business goal → **Interpretation:** triage scoring selects the viable, high-value slice → **Response:** 5-day prototype built + scoped data read → **Resolution:** frontline user adopts/rejects, a go/no-go economic read is made, and a next-phase recommendation is issued.

### Out of Scope (Phase 1)
- Full data-lake or platform build; org-wide data audit.
- Production deployment, scaling, or ongoing operation of the prototype.
- The marketing-modernization workstream (Vijay's door) — Phase 2+.
- Selecting or building more than one use case.

### Acceptable Trade-offs
Optimize for **speed, adoption, and honesty** over breadth. One proven, adopted slice beats five shallow prototypes. No premature technology commitment.

---

## Section 4 — Product Roadmap & Development Phases

### Phase 0 — Foundation (working session)
- Milestones: first use case selected; data-access path and security/environment (Azure / GCC-High) confirmed; budget/tier confirmed.
- Decision points: Which slice? Is the data reachable enough for an honest 5-day prototype?

### Phase 1 — Development (Sprints 1–2)
- Sprint 1: triage the backlog → ranked shortlist; data-reachability quick-scan.
- Sprint 2: build the 5-day rapid prototype; first frontline-user touch.
- Decision point: does the prototype show enough to iterate?

### Phase 2 — Testing & Refinement (Sprint 3)
- Milestones: iterate on frontline feedback; data-foundation read; Phase-2 recommendation; Phase-1 outcomes report.
- Decision point: go/no-go on a continuing enablement retainer.

### Phase 3 — Scaling (continuing retainer, if earned)
- Templatize the triage-and-prototype cycle for the CoE; address the data foundation at the process level; open the marketing-modernization door as a second workstream once budget supports parallel tracks.

### Key Constraints & Dependencies
- **Data access** (Kidde-side) is the primary pacing constraint.
- **Security/environment:** Azure / GCC-High posture and Gary's security-first bar.
- **Budget confirmation:** no tier agreed; the ~$5–7.5K / ~30-pt shape is proposed.
- **Use-case selection:** required before the prototype sprint.

---

## Section 5 — Success Metrics & Validation

*Framed at engagement scale, not production-platform scale — this is a six-week discovery phase, so metrics measure discovery and adoption, not uptime SLAs (which would be invented at this stage).*

### Engagement-Level Metrics
| Metric | Target | How measured |
|---|---|---|
| Shortlist accepted | Kidde agrees the ranked shortlist beats intuition-led selection | Sprint-1 review sign-off |
| Prototype shipped in-sprint | 1 working prototype by end of Sprint 2 | Demo |
| Real adoption signal | ≥1 intended frontline user completes a real session with the prototype | Observed session / user note |
| Go/no-go clarity | A defensible economic read ("juice worth the squeeze") on the slice | Sprint-3 outcomes report |
| Data-foundation direction | A named next-phase data pattern Kidde can act on | One-page data read |

### Validation of Expansion
- Does Phase 1 earn the continuing retainer (Kidde opts into Phase 2)?
- Is the data-foundation recommendation adopted into Kidde's data-management planning?
- AI-literacy check: can the frontline user explain what the prototype does and why (adoption-first, per Daniel)?

---

## Section 6 — Viability & Scaling Strategy

### If Phase 1 Works: What's Next
A continuing **AI-enablement retainer** that (a) templatizes the triage-and-prototype cycle so the CoE runs it, (b) tackles the data-foundation pattern surfaced in Phase 1 at the process level, and (c) opens the **marketing-modernization** door Vijay flagged as a parallel workstream once budget supports tracks.

### Funding & Revenue Model (Elynox side)
- Phase 1 offered at a proposed fixed ~$5,000–$7,500/month across three two-week sprints; positioned to earn — not require — a retainer.
- Cost structure: a small, senior Elynox team (Daniel as strategic lead + hands-on developer; a developer; PM/admin support).

### Partnership & Ecosystem
- Kidde's Microsoft/Azure stack is the delivery environment; Elynox works into it (GCC-High experience available) rather than imposing a stack.
- Kidde's AI CoE is the internal owner Elynox equips; Elynox is the method partner, not a replacement for internal capability.

### Long-Term Sustainability
The CoE runs the documented method; Elynox provides advisory and the next prototype cycle. The relationship compounds through the prototype → adoption → data-foundation loop rather than through a single large build.

---

## Artifact Index

| Artifact | Description | Status | Location |
|---|---|---|---|
| Context Stack | Interpretive memory of the 2026-03-24 call + kidde.com | Complete | `00 Context Stack — Kidde — 2026-03-24.md` |
| Engagement Scaffold | Proposed 3-sprint capacity/sprint plan (backlog mode) | Complete (PROPOSED) | `01 Engagement Scaffold — Kidde.md` |
| One-Page Proposal | Audit-passed pitch to Gary Eckman | Complete v0.2 | `02 One-Page Proposal — Kidde.md` |
| Authenticity Audit | HARD-gate pass on Scaffold + Proposal | Complete (PASS) | `03 Authenticity Audit — Kidde.md` |
| Friction Map | Embedded in §1 (results-quickly vs data-foundation; selection-by-gut; adoption risk) | Embedded | this PRD |
| Perspective Statements | Embedded in §2 personas | Embedded | this PRD |
| Use-case-specific PRD (v2) | To be written once the first slice is selected in Sprint 1 | **Pending** | — |

---

## Version History
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-07-16 | Claude + Elynox | Initial pre-scope PRD: the Phase-1 discovery-and-prototype system. Use case TBD (Sprint 1). |

## Recursion / next re-grounding
- On first-use-case selection (Sprint 1) → write PRD v2 (use-case-specific).
- On budget/scope confirmation with Kidde → reconcile all PROPOSED numbers.
- Post-Phase-1 → re-ground for the continuing-retainer decision.

## Approval Sign-Off
| Role | Name | Date |
|---|---|---|
| Elynox lead | Daniel Englebretson | — |
| KGS sponsor | Gary Eckman | — |

**PRD Status:** ☑ Draft (pre-scope) ☐ In Review ☐ Approved ☐ In Development
