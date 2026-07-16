import type { Config } from "tailwindcss";

// Brand tokens sourced from "05a Brand DNA Extract — Kidde — 2026-07-16.md"
// (computed-style frequency sweep of kidde.com, 2026-07-16). Token names stay
// role-based so components read by purpose, not literal color name.
// `red-deep` is flagged [derived] in the extract — not an on-page token,
// confirm or replace once JET signs off on the brand kit (Phase 0 gate,
// Microsite Delivery SOP).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#AC242A",         // Kidde Red — primary brand / CTA / energy
          "red-deep": "#8E1D22",  // [derived] hover/depth — confirm at review gate
          ink: "#000000",         // Primary text / foundation
          white: "#FFFFFF",        // Surface / reversed text
          slate: "#747574",        // Secondary text
          panel: "#F8F8F8",         // Light panel background (hero)
          "panel-alt": "#F7F8F9",    // Light panel / subtle button bg
          line: "#E4E4E4",           // Card borders / dividers
        },
      },
      fontFamily: {
        // Proxima Nova is the real brand face (commercial/Typekit, not on
        // Google Fonts). Montserrat is the labelled rendering substitute —
        // closest free geometric-sans stand-in per the Brand DNA Extract.
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
