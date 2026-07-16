interface LogoProps {
  dark?: boolean;
  markOnly?: boolean;
}

// Reconstruction stand-in — the official vector asset was never obtained
// (CDN fetch blocked; see 05a Brand DNA Extract "Logo & Marks"). This is a
// type-set approximation of the red badge + wordmark, not the real mark.
function LogoMark({ dark, size = 28 }: { dark?: boolean; size?: number }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md font-black ${
        dark ? "bg-white text-brand-red" : "bg-brand-red text-white"
      }`}
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      K
    </span>
  );
}

export function Logo({ dark = false, markOnly = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark dark={dark} size={markOnly ? 32 : 28} />
      {!markOnly && (
        <span
          className={`text-sm font-extrabold tracking-[0.2em] ${dark ? "text-white" : "text-brand-ink"}`}
        >
          KIDDE
        </span>
      )}
    </span>
  );
}
