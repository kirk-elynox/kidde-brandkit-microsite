import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Proxima Nova (the real Kidde brand face) isn't on Google Fonts. Montserrat
// is the labelled rendering substitute — see 05a Brand DNA Extract.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kidde — Elynox Engagement Microsite",
  description:
    "Kidde Global Solutions (KGS) — Phase 1 Discovery & Rapid-Prototype proposal microsite.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
