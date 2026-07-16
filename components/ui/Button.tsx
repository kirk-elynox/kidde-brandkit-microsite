import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "muted";

interface ButtonOwnProps {
  variant?: Variant;
  // When set, renders as a Next.js Link instead of a <button> — same visual
  // styles either way, so CTAs can navigate without a separate component.
  href?: string;
}

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

// Kidde's signature CTA: uppercase, red, white text, lightly rounded (not a
// pill) — per Brand DNA Extract "Signature devices". Hover uses the
// [derived] red-deep token, flagged for confirmation at the brand-kit gate.
const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white shadow-sm shadow-black/10 hover:bg-brand-red-deep focus-visible:ring-brand-red",
  secondary:
    "bg-brand-ink text-white border border-white/10 hover:bg-brand-ink/80 focus-visible:ring-brand-ink",
  ghost:
    "bg-transparent text-brand-ink hover:bg-brand-panel focus-visible:ring-brand-ink",
  muted:
    "bg-brand-panel-alt text-brand-ink hover:bg-brand-panel focus-visible:ring-brand-slate",
};

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-2.5 text-sm font-bold uppercase tracking-wide" +
  " transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
  " enabled:hover:scale-[1.02] enabled:active:scale-[0.98]" +
  " disabled:cursor-not-allowed disabled:opacity-50";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", className = "", disabled, children, href, target, rel, ...props }, ref) => {
    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
