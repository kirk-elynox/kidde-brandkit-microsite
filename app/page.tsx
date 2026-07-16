import { Nav } from "@/components/ui/Nav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const sections = [
  {
    title: "The Problem",
    body: "A gathered use-case backlog, selected on intuition rather than a scored maturity x fit x economics method.",
  },
  {
    title: "The Approach",
    body: "A 3-sprint Discovery & Rapid-Prototype phase: triage the backlog, ship one 5-day prototype, read the data foundation it needs.",
  },
  {
    title: "The Value",
    body: "A proven prototype, an honest data-foundation read, and a scored recommendation for where AI enablement pays off next.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="bg-brand-panel px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Kidde x Elynox — Phase 1 Proposal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-brand-ink md:text-5xl">
            Find peace of mind with a data-grounded path to AI enablement.
          </h1>
          <p className="mt-5 text-brand-slate">
            A self-funding Discovery &amp; Rapid-Prototype phase that turns Kidde&apos;s
            use-case backlog into one proven, adoptable prototype — in six weeks.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/proposal" variant="primary">
              View the proposal
            </Button>
            <Button href="/brandkit" variant="secondary">
              See the brandkit
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title}>
              <h3 className="text-base font-semibold text-brand-ink">{section.title}</h3>
              <p className="mt-2 text-sm text-brand-slate">{section.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
