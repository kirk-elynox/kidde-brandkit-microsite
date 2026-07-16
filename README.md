# Kidde Brand Kit + Microsite (Next.js scaffold)

Coded counterpart to the single-file HTML deliverables (`05 Brand Kit`, `06
Microsite`) in this folder — same brand tokens, wired up as a real Next.js +
Tailwind app instead of one static `.html` file. Structure follows the
pattern used in `elynox-microsite-draft`.

## Run it

```bash
npm install
npm run dev
```

Then visit `/` for the homepage.

## Structure

```
app/
  page.tsx        Homepage
  layout.tsx      Root layout (Montserrat font, metadata)
  globals.css     Tailwind entry
components/ui/
  Button.tsx  Input.tsx  Card.tsx  Accordion.tsx  Nav.tsx  Logo.tsx
tailwind.config.ts  Brand tokens — sourced from `05a Brand DNA Extract — Kidde`
```

## Known gaps (carried from the Brand DNA Extract)
- `brand-red-deep` (#8E1D22) is a **derived** hover shade, not evidenced
  on-page — confirm or replace once Kidde signs off on the brand kit.
- `Logo.tsx` is a **reconstruction stand-in** (text + color badge) — the
  official vector asset was never obtained; swap in the real mark once
  Kidde provides it.
- Headline/body font renders in **Montserrat** as a labelled substitute for
  Proxima Nova (commercial/Typekit, not on Google Fonts).
