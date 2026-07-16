"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

// Content sourced verbatim from "06 Microsite — Kidde — horizontal — v1 —
// 2026-07-16.html" (audit-passed, story points not hours, PROPOSED labelled).
// This rebuilds that file's slide-deck INTERACTION as a React client
// component: fixed topbar (brand + slide counter + prev/next), a progress
// bar, 12 full-screen slides that advance horizontally, keyboard nav
// (arrows / space / home / end), and a wheel handler that scrolls a dense
// slide vertically first, then advances the deck once the slide is at its
// bound.
//
// Transitions run on a CSS `transform: translateX()` track rather than
// native `scrollTo({behavior:'smooth'})` + `scroll-snap-type: mandatory` —
// that combination (used in the source HTML's vanilla-JS build) reliably
// gets its in-flight animation cancelled by the snap logic in Chromium,
// leaving the scroll position stuck a few pixels in. The transform track
// produces the same right-to-left slide motion without that failure mode.

const slideTitles = [
  "Title",
  "What we'll cover",
  "The problem",
  "Why now",
  "The approach",
  "Value & outcomes",
  "What's in / out",
  "Timeline & milestones",
  "The team",
  "Investment",
  "Risks & dependencies",
  "Next steps",
];
const TOTAL = slideTitles.length;

const agenda = [
  { n: "01", label: "The Problem", index: 2 },
  { n: "02", label: "Why Now", index: 3 },
  { n: "03", label: "The Approach", index: 4 },
  { n: "04", label: "Value & Outcomes", index: 5 },
  { n: "05", label: "Scope", index: 6 },
  { n: "06", label: "Timeline & Milestones", index: 7 },
  { n: "07", label: "The Team", index: 8 },
  { n: "08", label: "Investment", index: 9 },
  { n: "09", label: "Risks, Assumptions & Dependencies", index: 10 },
  { n: "10", label: "Next Steps", index: 11 },
];

const problemCards = [
  {
    title: "Selection by instinct",
    body: "The use-case backlog exists, but choosing which few to pursue is intuition-led rather than scored on readiness, fit, and return.",
  },
  {
    title: "A thin data base",
    body: "Kidde's own read: “a lot of disparate systems, minimal integrations, no great data lake per se today.”",
  },
  {
    title: "Adoption is unproven",
    body: "A tool no one on the front line uses creates waste, not value.",
  },
  {
    title: "Commitment risk",
    body: "The safer path proves value with a prototype before any large technology commitment.",
  },
];

const approachCards = [
  {
    title: "1 · Triage the backlog",
    body: "Score Kidde's use cases on maturity, AI fit, and economics — effort goes to the viable, high-value few.",
  },
  {
    title: "2 · Rapid prototype",
    body: "Build one working prototype for the top slice inside a single sprint (Elynox's method targets a five-day turnaround) and put it in front of real users.",
  },
  {
    title: "3 · Read the data foundation",
    body: "A scoped read of the data behind that slice — reachability, gaps, where data should live — feeding the broader data strategy.",
  },
  {
    title: "4 · Hand off the method",
    body: "Leave the AI Center of Excellence a documented triage-and-prototype method it can repeat on its own.",
  },
];

const valueStatements = [
  {
    when: "After Sprint 1:",
    say: "“We triaged our AI use-case backlog and picked a first target on real criteria — not gut feel.”",
  },
  {
    when: "After Sprint 2:",
    say: "“We built a working prototype in a sprint, and the people who would use it have had hands on it.”",
  },
  {
    when: "After Sprint 3:",
    say: "“We proved a use case, read the data foundation it needs to scale, and know where AI pays off next — in six weeks.”",
  },
];

const scopeIn = [
  "Use-case triage rubric & a ranked shortlist",
  "One working rapid prototype, adoption-checked",
  "A scoped data-foundation & architecture read",
  "A documented method for the CoE",
];

const scopeOut = [
  "A full data-lake or platform build; org-wide data audit",
  "Production deployment, scaling, or ongoing operation",
  "The marketing-modernization workstream (a later phase)",
  "More than one use case built",
];

const sprints = [
  {
    title: "Sprint 1",
    pts: "≈30 pts · Triage & target",
    body: "Intake the backlog, run the triage, produce the ranked shortlist, quick-scan data reachability.",
    say: "“We picked our first target on real criteria.”",
  },
  {
    title: "Sprint 2",
    pts: "≈30 pts · Rapid prototype",
    body: "Build the prototype for the chosen slice; wire it to reachable data; first frontline-user touch.",
    say: "“We built a working prototype in a sprint.”",
  },
  {
    title: "Sprint 3",
    pts: "≈30 pts · Prove & recommend",
    body: "Iterate on feedback; deliver the data-foundation read and a clear recommendation for what pays off next.",
    say: "“We proved it and know where to go next.”",
  },
];

const team = [
  {
    role: "Daniel Englebretson",
    desc: "Strategic lead & primary hands-on developer. Runs the triage and the prototype.",
  },
  {
    role: "Developer",
    desc: "Technical implementation and data-source wiring for the prototype.",
  },
  {
    role: "Project management",
    desc: "Sprint plans, status, backlog reviews, and delivery cadence.",
  },
  {
    role: "Documentation & quality",
    desc: "Use-case briefs and the method handoff to Kidde's CoE.",
  },
];

const risks = [
  {
    title: "Data access is the pacing constraint",
    body: "A three-business-day blocked-work rule redirects effort to triage or the data read so no sprint idles.",
  },
  {
    title: "Security & environment",
    body: "Kidde's security-first bar and Azure / GCC-High posture are confirmed before any build; Elynox has GCC-High experience.",
  },
  {
    title: "Budget & tier to confirm",
    body: "No budget was set on the intro call; the proposed shape is an anchor, adjustable to a smaller pilot or a larger phase.",
  },
  {
    title: "First use case to be chosen",
    body: "Selection is the first act of Sprint 1, made jointly on the triage scores — not assumed here.",
  },
];

const nextSteps = [
  {
    n: "STEP 1",
    h: "Convene a working session",
    p: "Elynox and the KGS AI team meet to select the first use case from the triage.",
  },
  {
    n: "STEP 2",
    h: "Authorize Phase 1",
    p: "Confirm the six-week Discovery & Rapid-Prototype engagement and its terms.",
  },
  {
    n: "STEP 3",
    h: "Elynox shares collateral",
    p: "Daniel provides the case-study examples requested on the call, separately.",
  },
];

function SectionNum({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 text-[13px] font-extrabold tracking-[0.06em] text-brand-red">
      {children}
    </div>
  );
}

function clamp(n: number) {
  return Math.max(0, Math.min(TOTAL - 1, n));
}

export default function ProposalPage() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const lockRef = useRef(false);

  function go(n: number) {
    const next = clamp(n);
    idxRef.current = next;
    setIdx(next);
  }

  // keyboard nav
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (["ArrowRight", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        go(idxRef.current + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        go(idxRef.current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(TOTAL - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // wheel: let a dense slide scroll vertically first, then advance at bounds
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    function onWheel(e: WheelEvent) {
      const slide = slideRefs.current[idxRef.current];
      if (!slide) return;
      const atTop = slide.scrollTop <= 0;
      const atBottom = slide.scrollTop + slide.clientHeight >= slide.scrollHeight - 2;
      const dominant = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (slide.scrollHeight > slide.clientHeight + 2) {
        if (dominant > 0 && !atBottom) return;
        if (dominant < 0 && !atTop) return;
      }
      e.preventDefault();
      if (lockRef.current) return;
      if (dominant > 0) {
        lockRef.current = true;
        go(idxRef.current + 1);
        window.setTimeout(() => {
          lockRef.current = false;
        }, 450);
      } else if (dominant < 0) {
        lockRef.current = true;
        go(idxRef.current - 1);
        window.setTimeout(() => {
          lockRef.current = false;
        }, 450);
      }
    }

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, []);

  function setSlideRef(i: number) {
    return (el: HTMLDivElement | null) => {
      slideRefs.current[i] = el;
    };
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* topbar */}
      <div className="z-50 flex h-14 shrink-0 items-center justify-between border-b border-brand-line bg-white px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-[0.02em] text-brand-ink"
        >
          <Logo markOnly />
          <span>Kidde &times; Elynox</span>
        </Link>
        <div className="flex items-center gap-3.5">
          <span className="text-[13px] font-bold tabular-nums text-brand-slate">
            Slide <b className="text-brand-red">{idx + 1}</b> / {TOTAL}
          </span>
          <button
            type="button"
            onClick={() => go(idx - 1)}
            disabled={idx === 0}
            aria-label="Previous slide"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-brand-line text-base text-brand-ink hover:border-brand-red hover:text-brand-red disabled:cursor-default disabled:opacity-30 disabled:hover:border-brand-line disabled:hover:text-brand-ink"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            disabled={idx === TOTAL - 1}
            aria-label="Next slide"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-brand-line text-base text-brand-ink hover:border-brand-red hover:text-brand-red disabled:cursor-default disabled:opacity-30 disabled:hover:border-brand-line disabled:hover:text-brand-ink"
          >
            &rsaquo;
          </button>
        </div>
      </div>

      {/* progress bar */}
      <div
        className="z-50 h-[3px] shrink-0 bg-brand-red transition-all duration-300 ease-out"
        style={{ width: `${(idx / (TOTAL - 1)) * 100}%` }}
      />

      {/* deck viewport (fixed window; the track inside it slides) */}
      <div ref={viewportRef} className="relative flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ width: `${TOTAL * 100}%`, transform: `translateX(-${(idx * 100) / TOTAL}%)` }}
        >
          {/* 1 — TITLE */}
          <div
            ref={setSlideRef(0)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-panel px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                AI Enablement Proposal &middot; for Kidde Global Solutions
              </p>
              <h1 className="mt-3 max-w-[15ch] text-4xl font-extrabold leading-tight text-brand-red md:text-5xl">
                From a Copilot foundation to a proven use case.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-brand-ink">
                A six-week path that turns Kidde&apos;s gathered AI use cases into one
                working, adopted prototype &mdash; on a data foundation built to last.
              </p>
              <div className="mt-8 flex flex-wrap gap-11">
                <div>
                  <div className="text-3xl font-extrabold text-brand-red">6 weeks</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.07em] text-brand-slate">
                    Three two-week sprints
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-brand-red">1 prototype</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.07em] text-brand-slate">
                    Working, adopted, evidence-picked
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-brand-red">#1</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.07em] text-brand-slate">
                    Kidde &mdash; the brand we&apos;re serving
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-brand-slate">
                Prepared by Elynox for Gary Eckman and the KGS AI team &middot; 16 July 2026
              </div>
              <div className="mt-5 text-xs text-brand-slate">
                Use <kbd className="rounded border border-brand-line bg-white px-1.5 py-0.5 font-bold">&rarr;</kbd> /{" "}
                <kbd className="rounded border border-brand-line bg-white px-1.5 py-0.5 font-bold">&larr;</kbd>, the
                scroll wheel, or the arrows above to move through the deck.
              </div>
            </div>
          </div>

          {/* 2 — AGENDA */}
          <div
            ref={setSlideRef(1)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>&mdash; The plan for this deck</SectionNum>
              <h2 className="mb-6 text-3xl font-extrabold text-brand-ink">What we&apos;ll cover</h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {agenda.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => go(item.index)}
                    className="flex items-baseline gap-3 rounded-lg border border-brand-line bg-white px-4 py-3 text-left text-sm text-brand-ink transition-colors hover:border-brand-red"
                  >
                    <span className="text-[13px] font-extrabold text-brand-red">{item.n}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3 — PROBLEM */}
          <div
            ref={setSlideRef(2)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>01 &mdash; The Problem</SectionNum>
              <h2 className="mb-5 max-w-2xl text-3xl font-extrabold text-brand-ink">
                Kidde has the foundation. The next move is the hard part.
              </h2>
              <blockquote className="mb-6 border-l-4 border-brand-red pl-4">
                <p className="text-xl font-bold text-brand-ink">
                  &ldquo;How do we deliver those results quickly, and how do we ensure we get
                  the right data management strategy in place to actually make AI useful?&rdquo;
                </p>
                <cite className="mt-1 block text-xs not-italic text-brand-slate">
                  &mdash; Gary Eckman, on the 24 March call
                </cite>
              </blockquote>
              <div className="grid gap-5 md:grid-cols-2">
                {problemCards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-brand-line bg-white p-6">
                    <h3 className="mb-1.5 text-lg font-bold text-brand-ink">{card.title}</h3>
                    <p className="text-sm text-brand-ink/80">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 — WHY NOW */}
          <div
            ref={setSlideRef(3)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-panel px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>02 &mdash; Why Now</SectionNum>
              <h2 className="mb-5 text-3xl font-extrabold text-brand-ink">
                The momentum is here to spend &mdash; or to waste.
              </h2>
              <p className="max-w-3xl text-lg text-brand-slate">
                Roughly fourteen months out of the Carrier divestiture, Kidde rebuilt its
                IT ecosystem from the ground up and is deliberately pivoting from
                foundation to specialization, with an Azure RAG prototype underway and a
                contract-lifecycle tool in first deployment. The appetite is now; the risk
                is spending it on use cases picked by gut, or on a platform chosen before
                a prototype has earned it.
              </p>
            </div>
          </div>

          {/* 5 — APPROACH */}
          <div
            ref={setSlideRef(4)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>03 &mdash; The Approach</SectionNum>
              <h2 className="mb-2 text-3xl font-extrabold text-brand-ink">
                Triage, prototype, prove, hand off.
              </h2>
              <p className="mb-6 max-w-xl text-brand-slate">
                AI goes where it earns its place; no big commitment until a prototype has
                proven the value. Adoption-first throughout.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                {approachCards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-brand-line bg-white p-6">
                    <h3 className="mb-1.5 text-lg font-bold text-brand-ink">{card.title}</h3>
                    <p className="text-sm text-brand-ink/80">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6 — VALUE & OUTCOMES */}
          <div
            ref={setSlideRef(5)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-panel px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>04 &mdash; Value &amp; Outcomes</SectionNum>
              <h2 className="mb-2 text-3xl font-extrabold text-brand-ink">
                What Kidde can say at each step.
              </h2>
              <p className="mb-6 max-w-xl text-brand-slate">
                Every claim is tied to a specific sprint deliverable &mdash; nothing
                aspirational.
              </p>
              <ul className="divide-y divide-brand-line border-t border-brand-line">
                {valueStatements.map((item) => (
                  <li key={item.when} className="relative py-3 pl-6 text-sm text-brand-ink">
                    <span className="absolute left-0 top-[18px] h-2.5 w-2.5 rounded-sm bg-brand-red" />
                    <b>{item.when}</b> {item.say}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 7 — SCOPE */}
          <div
            ref={setSlideRef(6)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>05 &mdash; Scope</SectionNum>
              <h2 className="mb-6 text-3xl font-extrabold text-brand-ink">
                What&apos;s in, and what&apos;s deliberately out.
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-green-800">
                    In scope &mdash; Phase 1
                  </h4>
                  <ul className="divide-y divide-brand-line border-t border-brand-line">
                    {scopeIn.map((item) => (
                      <li key={item} className="relative py-2.5 pl-6 text-sm text-brand-ink">
                        <span className="absolute left-0 top-[14px] h-2.5 w-2.5 rounded-sm bg-brand-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-slate">
                    Out of scope &mdash; Phase 1
                  </h4>
                  <ul className="divide-y divide-brand-line border-t border-brand-line">
                    {scopeOut.map((item) => (
                      <li key={item} className="relative py-2.5 pl-6 text-sm text-brand-ink">
                        <span className="absolute left-0 top-[14px] h-2.5 w-2.5 rounded-sm bg-brand-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 8 — TIMELINE & MILESTONES */}
          <div
            ref={setSlideRef(7)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-panel px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>06 &mdash; Timeline &amp; Milestones</SectionNum>
              <h2 className="mb-2 text-3xl font-extrabold text-brand-ink">
                Three sprints, in story points.
              </h2>
              <p className="mb-6 max-w-2xl text-brand-slate">
                Elynox plans in <strong>story points</strong> &mdash; a measure of effort
                and complexity, not hours. Phase 1 runs at roughly 30 points per two-week
                sprint.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {sprints.map((sprint) => (
                  <div
                    key={sprint.title}
                    className="rounded-xl border border-brand-line border-t-4 border-t-brand-red bg-white p-5"
                  >
                    <div className="text-lg font-extrabold text-brand-ink">{sprint.title}</div>
                    <div className="my-1 text-xs font-bold uppercase tracking-[0.05em] text-brand-red">
                      {sprint.pts}
                    </div>
                    <p className="text-sm text-brand-ink/80">{sprint.body}</p>
                    <div className="mt-3 rounded-lg bg-brand-panel-alt px-3 py-2 text-xs text-brand-ink/80">
                      <b className="text-brand-red">Say:</b> {sprint.say}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 9 — TEAM */}
          <div
            ref={setSlideRef(8)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>07 &mdash; The Team</SectionNum>
              <h2 className="mb-2 text-3xl font-extrabold text-brand-ink">
                A small, senior team &mdash; not a behemoth.
              </h2>
              <p className="mb-6 max-w-xl text-brand-slate">
                Deliberately right-sized for a first phase: senior people close to the
                work, not a large integrator.
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                {team.map((member) => (
                  <div key={member.role} className="rounded-lg border border-brand-line p-4">
                    <div className="text-[15px] font-extrabold text-brand-ink">{member.role}</div>
                    <div className="mt-1 text-[13px] text-brand-slate">{member.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 10 — INVESTMENT */}
          <div
            ref={setSlideRef(9)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-panel px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>08 &mdash; Investment</SectionNum>
              <h2 className="mb-6 text-3xl font-extrabold text-brand-ink">
                A first phase priced to earn the next.
              </h2>
              <div className="grid items-center gap-6 rounded-2xl border border-brand-line bg-white p-8 md:grid-cols-[1.2fr_1fr]">
                <div>
                  <div className="text-3xl font-extrabold text-brand-red md:text-4xl">
                    $5,000&ndash;$7,500
                    <span className="text-lg font-normal text-brand-slate"> / month</span>
                    <span className="ml-2 rounded bg-gray-200 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-[0.06em] text-gray-600">
                      Proposed
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-brand-slate">
                    Six weeks &middot; three two-week sprints &middot; ≈30 story points per
                    sprint. A fixed monthly fee designed to earn a continuing enablement
                    retainer, not to require one. No costs beyond the stated fee are
                    anticipated for Phase 1.
                  </p>
                </div>
                <ul className="divide-y divide-brand-line border-t border-brand-line text-sm">
                  <li className="py-1.5">&#10003; Use-case triage &amp; ranked shortlist</li>
                  <li className="py-1.5">&#10003; One working, adopted prototype</li>
                  <li className="py-1.5">&#10003; Data-foundation &amp; architecture read</li>
                  <li className="py-1.5">&#10003; Documented method for your CoE</li>
                </ul>
              </div>
              <p className="mt-3.5 text-xs text-brand-slate">
                Story points describe effort, not price. The figure is a proposed anchor
                for discussion; no tier has been quoted or agreed.
              </p>
            </div>
          </div>

          {/* 11 — RISKS */}
          <div
            ref={setSlideRef(10)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-white px-6 py-10 md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <SectionNum>09 &mdash; Risks, Assumptions &amp; Dependencies</SectionNum>
              <h2 className="mb-6 text-3xl font-extrabold text-brand-ink">
                Named up front, handled by design.
              </h2>
              <div className="grid gap-3.5 md:grid-cols-2">
                {risks.map((risk) => (
                  <div key={risk.title} className="rounded-lg border border-brand-line p-4">
                    <div className="text-[15px] font-bold text-brand-ink">{risk.title}</div>
                    <div className="mt-1.5 text-[13px] text-brand-slate">{risk.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 12 — NEXT STEPS */}
          <div
            ref={setSlideRef(11)}
            style={{ width: `${100 / TOTAL}%` }}
            className="flex h-full flex-col justify-center overflow-y-auto bg-brand-ink px-6 py-10 text-white md:px-[6vw]"
          >
            <div className="mx-auto w-full max-w-[1040px]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                10 &mdash; Next Steps
              </p>
              <h2 className="mb-2 mt-3 text-3xl font-extrabold text-white">
                A short working session to begin.
              </h2>
              <p className="mb-8 max-w-xl text-white/70">
                Two easy, doable steps put Phase 1 in motion.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {nextSteps.map((step) => (
                  <div key={step.n} className="rounded-xl border border-white/20 p-5">
                    <div className="text-xs font-bold tracking-[0.08em] text-brand-red">{step.n}</div>
                    <div className="mb-1.5 mt-2 text-base font-bold text-white">{step.h}</div>
                    <div className="text-[13px] text-white/75">{step.p}</div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(0)}
                className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-red px-8 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-red-deep"
              >
                Back to the start &#8630;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* bottom banner */}
      <div className="z-50 shrink-0 bg-brand-ink px-4 py-1.5 text-center text-[11px] font-semibold tracking-[0.03em] text-white">
        PROPOSED &middot; Prepared by <b>Elynox</b> for Kidde following the introductory
        call of 24 March 2026 &middot; story points, not hours &middot; all figures
        traceable to the audit-passed proposal.
      </div>
    </div>
  );
}
