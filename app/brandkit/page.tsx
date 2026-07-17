import { Nav } from "@/components/ui/Nav";

// Content sourced verbatim from "05 Brand Kit — Kidde — v1 — 2026-07-16.html"
// (client-initialization Phase 6, extracted from kidde.com computed styles).
// Restructured into the app's Next.js + Tailwind component setup, reusing
// the same brand tokens (tailwind.config.ts) the rest of the site draws on.

const colors = [
  {
    name: "Kidde Red",
    hex: "#AC242A",
    swatch: "bg-brand-red",
    role: "Primary brand · CTA · energy. The signature.",
  },
  {
    name: "Red Deep",
    hex: "#8E1D22",
    swatch: "bg-brand-red-deep",
    role: "Hover / depth for red surfaces.",
    tag: "derived",
  },
  {
    name: "Ink Black",
    hex: "#000000",
    swatch: "bg-brand-ink",
    role: "Primary text · section headers.",
  },
  {
    name: "Slate Gray",
    hex: "#747574",
    swatch: "bg-brand-slate",
    role: "Secondary text.",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    swatch: "bg-brand-white border-b border-brand-line",
    role: "Surface · reversed text.",
  },
  {
    name: "Panel Gray",
    hex: "#F8F8F8",
    swatch: "bg-brand-panel",
    role: "Light section panels.",
  },
  {
    name: "Panel Gray 2",
    hex: "#F7F8F9",
    swatch: "bg-brand-panel-alt",
    role: "Subtle panels / soft buttons.",
  },
];

const typeRows = [
  {
    label: "Display / Headline — 700–800",
    className: "text-[44px] font-extrabold leading-[1.05] text-brand-ink",
    content: "Find Peace of Mind",
  },
  {
    label: "Section Heading — 700",
    className: "text-[28px] font-bold text-brand-ink",
    content: "Complete Fire Safety Packages",
  },
  {
    label: "Body — 400 / 1.6",
    className: "text-base font-normal text-brand-ink",
    content:
      "You can’t see or smell carbon monoxide, so our advanced alarms look out for this hidden danger and give your family time to get to fresh air fast.",
  },
  {
    label: "Eyebrow / Label — 700 uppercase, tracked",
    className: "text-xs font-bold uppercase tracking-[0.14em] text-brand-red",
    content: "Residential · Professional · Shop",
  },
];

const logoTiles = [
  { variant: "light" as const, wordmarkColor: "text-brand-ink", cap: "Primary — on light" },
  { variant: "dark" as const, wordmarkColor: "text-white", cap: "Reversed — on dark" },
  { variant: "red" as const, wordmarkColor: "text-white", cap: "Mono — on brand red" },
];

function FlameMark({ variant }: { variant: "light" | "dark" | "red" }) {
  const badgeFill = variant === "red" ? "#FFFFFF" : "#AC242A";
  const flameFill = variant === "red" ? "#AC242A" : "#FFFFFF";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" role="img" aria-label="Kidde flame mark (reconstruction)">
      <rect x="1" y="1" width="38" height="38" rx="8" fill={badgeFill} />
      <path
        d="M20 8 C21 14 27 15 24 22 C27 21 27 17 27 17 C30 22 28 30 20 31 C12 30 11 22 15 18 C15 21 17 22 18 22 C15 16 19 12 20 8 Z"
        fill={flameFill}
      />
    </svg>
  );
}

const doList = [
  "Lead with the benefit to the family.",
  "Use plain, second-person language (“your family”).",
  "Substantiate claims with a footnote.",
  "Keep CTAs short, uppercase, and active.",
];

const dontList = [
  "Use fear without the reassurance that follows.",
  "Bury the point in jargon.",
  "Make a “#1” claim without the basis.",
  "Dilute the red by overusing it as background.",
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">{children}</div>
  );
}

export default function BrandKitPage() {
  return (
    <>
      <Nav />

      {/* badge bar */}
      <div className="bg-brand-red px-4 py-4 text-center text-[15px] font-bold text-white">
        Kidde Brand Kit · v1 · Core
        <small className="mt-0.5 block text-[11px] font-medium text-white/90">
          Extracted from kidde.com — internal reference for the Elynox engagement. Not an official Kidde asset.
        </small>
      </div>

      {/* hero */}
      <header className="border-b-4 border-brand-red bg-brand-panel">
        <div className="mx-auto max-w-[1080px] px-7 py-14 md:py-16">
          <SectionEyebrow>Brand Kit — Kidde Global Solutions</SectionEyebrow>
          <h1 className="mt-2 max-w-[9ch] text-4xl font-extrabold leading-tight text-brand-red md:text-[52px]">
            Find Peace of Mind.
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink">
            A living reference for Kidde&apos;s color, type, logo, and voice, extracted from kidde.com so the
            engagement&apos;s client-facing surfaces render in Kidde&apos;s own brand, not a generic template.
          </p>
          <div className="mt-6 text-[13px] text-brand-slate">
            Source: kidde.com · Scope: Core · Built 2026-07-16 · “North America’s #1 home fire safety brand”
          </div>
        </div>
      </header>

      {/* 01 — COLOR */}
      <section className="border-b border-brand-line py-16">
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionEyebrow>01 — Color</SectionEyebrow>
          <h2 className="mb-1.5 mt-2 text-2xl font-extrabold text-brand-ink md:text-3xl">Color System</h2>
          <p className="mb-8 max-w-xl text-brand-slate">
            Kidde red carries the brand; black and white do the work; grays and light panels give it room to
            breathe. Every hex was read from computed styles on kidde.com.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {colors.map((color) => (
              <div key={color.name} className="overflow-hidden rounded-[10px] border border-brand-line bg-white">
                <div className={`h-[92px] ${color.swatch}`} />
                <div className="px-3.5 py-3">
                  <div className="text-sm font-bold text-brand-ink">{color.name}</div>
                  <div className="mt-0.5 font-mono text-xs text-brand-slate">{color.hex}</div>
                  <div className="mt-1.5 text-[11px] leading-snug text-brand-slate">{color.role}</div>
                  {color.tag && (
                    <span className="mt-2 inline-block rounded bg-[#FBEAEA] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-brand-red">
                      {color.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — TYPOGRAPHY */}
      <section className="border-b border-brand-line py-16">
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionEyebrow>02 — Typography</SectionEyebrow>
          <h2 className="mb-1.5 mt-2 text-2xl font-extrabold text-brand-ink md:text-3xl">Typography</h2>
          <p className="mb-8 max-w-xl text-brand-slate">
            Kidde sets everything in <strong>Proxima Nova</strong>, a geometric sans, bold for headlines and
            regular for body.
          </p>
          {typeRows.map((row, i) => (
            <div key={row.label} className={`py-4 ${i !== 0 ? "border-t border-brand-line" : ""}`}>
              <div className="mb-1 text-[11px] uppercase tracking-[0.1em] text-brand-slate">{row.label}</div>
              <div className={row.className}>{row.content}</div>
            </div>
          ))}
          <div className="mt-5 rounded-r-lg border-l-[3px] border-brand-red bg-brand-panel-alt px-4 py-3 text-[13px] text-neutral-800">
            <strong>Rendering note:</strong> the Kidde brand face is <strong>Proxima Nova</strong> (a
            commercial/Adobe-Typekit family not available on Google Fonts). This kit renders in{" "}
            <strong>Montserrat</strong> as the closest free stand-in so the kit is self-contained; production
            surfaces should license and use Proxima Nova.
          </div>
        </div>
      </section>

      {/* 03 — LOGO & MARKS */}
      <section className="border-b border-brand-line py-16">
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionEyebrow>03 — Logo &amp; Marks</SectionEyebrow>
          <h2 className="mb-1.5 mt-2 text-2xl font-extrabold text-brand-ink md:text-3xl">Logo &amp; Marks</h2>
          <p className="mb-8 max-w-xl text-brand-slate">
            The red flame badge sits left of the uppercase wordmark. The mark below is a{" "}
            <strong>reconstruction stand-in</strong> — recolorable across variants — because the official
            vector was not obtained from the site.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {logoTiles.map((tile) => (
              <div
                key={tile.cap}
                className={`flex min-h-[150px] flex-col items-center justify-center gap-3.5 rounded-[10px] border border-brand-line p-6 ${
                  tile.variant === "dark" ? "bg-brand-ink" : tile.variant === "red" ? "bg-brand-red" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FlameMark variant={tile.variant} />
                  <span className={`text-2xl font-extrabold uppercase tracking-[0.02em] ${tile.wordmarkColor}`}>
                    KIDDE
                  </span>
                </div>
                <div
                  className={`text-[11px] uppercase tracking-[0.08em] ${
                    tile.variant === "light" ? "text-brand-slate" : "text-white/70"
                  }`}
                >
                  {tile.cap}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-r-lg border-l-[3px] border-brand-red bg-brand-panel-alt px-4 py-3 text-[13px] text-neutral-800">
            <strong>Reconstruction:</strong> this mark approximates Kidde&apos;s red flame/badge for internal
            layout use only. Request the official logo files from Kidde before any external delivery. Keep clear
            space ≥ the badge height; never recolor the wordmark to non-brand colors.
          </div>
        </div>
      </section>

      {/* 04 — VOICE & TONE */}
      <section className="border-b border-brand-line py-16">
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionEyebrow>04 — Voice &amp; Tone</SectionEyebrow>
          <h2 className="mb-1.5 mt-2 text-2xl font-extrabold text-brand-ink md:text-3xl">Voice &amp; Tone</h2>
          <p className="mb-8 max-w-xl text-brand-slate">
            Plain, direct, and protective. Kidde speaks to the family, leads with the benefit, and backs claims
            with substantiation.
          </p>
          <blockquote className="my-1.5 border-l-4 border-brand-red pl-4 text-xl font-bold text-brand-ink">
            “Find Peace of Mind with the Latest CO Detection”
          </blockquote>
          <blockquote className="my-1.5 border-l-4 border-brand-red pl-4 text-xl font-bold text-brand-ink">
            “North America’s #1 home fire safety brand”{" "}
            <span className="text-[13px] font-medium text-brand-slate">
              *Based on total household installations as of December 2023.
            </span>
          </blockquote>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-green-800">Do</h4>
              <ul>
                {doList.map((item) => (
                  <li key={item} className="border-t border-brand-line py-1 text-sm text-brand-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-brand-red">
                Don&apos;t
              </h4>
              <ul>
                {dontList.map((item) => (
                  <li key={item} className="border-t border-brand-line py-1 text-sm text-brand-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — COMPONENTS STARTER */}
      <section className="py-16">
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionEyebrow>05 — Components Starter</SectionEyebrow>
          <h2 className="mb-1.5 mt-2 text-2xl font-extrabold text-brand-ink md:text-3xl">Components Starter</h2>
          <p className="mb-8 max-w-xl text-brand-slate">
            The minimum set the microsite reuses: buttons, pills, stat tiles, cards, and the red trust band.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <div className="mb-3 text-[11px] uppercase tracking-[0.08em] text-brand-slate">Buttons</div>
              <a className="inline-block cursor-pointer rounded-lg border-2 border-brand-red bg-brand-red px-[26px] py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-white">
                Explore Now
              </a>
              <div className="h-3" />
              <a className="inline-block cursor-pointer rounded-lg border-2 border-brand-red bg-white px-[26px] py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-brand-red">
                Learn More
              </a>
            </div>
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <div className="mb-3 text-[11px] uppercase tracking-[0.08em] text-brand-slate">Pills</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-[#FBEAEA] px-3 py-1.5 text-xs font-bold text-brand-red">
                  Residential
                </span>
                <span className="inline-block rounded-full bg-[#FBEAEA] px-3 py-1.5 text-xs font-bold text-brand-red">
                  Professional
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <div className="text-4xl font-extrabold leading-none text-brand-red">#1</div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.08em] text-brand-slate">
                Home fire safety brand
              </div>
            </div>
            <div className="rounded-xl border border-brand-line bg-white p-5">
              <div className="mb-2 text-[11px] uppercase tracking-[0.08em] text-brand-slate">Card</div>
              <div className="font-bold text-brand-ink">Complete Fire Safety Package</div>
              <div className="mt-1 text-[13px] text-brand-slate">
                Whole-home protection homeowners and renters need.
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[10px] bg-brand-red px-4 py-4 text-center text-[15px] font-bold text-white">
            North America&apos;s #1 home fire safety brand
            <small className="mt-0.5 block text-[11px] font-medium text-white/90">
              The red trust band — a Kidde signature device.
            </small>
          </div>
        </div>
      </section>

      <div className="py-9 text-center text-xs text-brand-slate">
        <div className="mx-auto max-w-[1080px] px-7">
          Kidde Brand Kit v1 (Core) · extracted from kidde.com on 2026-07-16 · internal Elynox engagement
          reference · colors are exact computed-style reads; red-deep is derived; logo is a reconstruction
          stand-in; Proxima Nova rendered via Montserrat.
        </div>
      </div>
    </>
  );
}
