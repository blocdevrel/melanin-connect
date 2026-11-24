import type { CSSProperties } from "react";

import { useInView } from "@/lib/useInView";

/**
 * Oversized "Melanin Connect Ltd" wordmark that closes the footer. When it scrolls into view, each
 * letter rises out of a blur, one after another. The type is sized to its container (cqw), so it
 * spans the same share of the width on every screen.
 */
/** Mirrors the logo: "Melanin" light, "Connect" in brand orange, then "Ltd" with an orange full stop. */
const parts = [
  { text: "Melanin", tone: "from-white/85 via-white/65 to-white/15", space: false },
  { text: "Connect", tone: "from-brand via-brand/90 to-brand/30", space: true },
  { text: "Ltd", tone: "from-white/70 via-white/50 to-white/10", space: true },
  { text: ".", tone: "from-brand via-brand/90 to-brand/30", space: false },
];

export function FooterWordmark() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", threshold: 0.4 });
  let letterIndex = 0;

  return (
    <div
      ref={ref}
      data-wordmark=""
      data-shown={inView ? "" : undefined}
      className="relative select-none"
      aria-hidden="true"
    >
      <div className="wordmark-glow pointer-events-none absolute inset-0 bg-[radial-gradient(35%_80%_at_50%_100%,rgba(245,78,0,0.14),transparent_70%)]" />
      <div className="@container relative mx-auto max-w-sm overflow-hidden px-4 pt-6 sm:max-w-xl lg:max-w-3xl sm:px-6 lg:px-8">
        <p className="flex justify-center pb-[0.04em] font-geist text-[9.4cqw] leading-[0.9] font-semibold tracking-[-0.06em] whitespace-nowrap">
          {parts.map(({ text, tone, space }) => (
            <span key={text} className={space ? "ml-[0.22em]" : undefined}>
              {[...text].map((char) => {
                const i = letterIndex++;
                return (
                  <span
                    key={i}
                    className={`wordmark-letter inline-block bg-linear-to-b bg-clip-text text-transparent ${tone}`}
                    style={{ "--i": i } as CSSProperties}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
