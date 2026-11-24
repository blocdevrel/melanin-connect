import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/** Eyebrow, title and intro. Type scale matches the reference: 15px lead, medium display title. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-[15px] font-medium text-brand">{eyebrow}</p>}
      <h2 className={`section-title text-balance ${eyebrow ? "mt-3" : ""} ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {children && (
        <div
          className={`mt-4 text-[15px] leading-relaxed text-pretty ${dark ? "text-white/70" : "text-[#1f1e1e]/75"}`}
        >
          {children}
        </div>
      )}
    </Reveal>
  );
}
