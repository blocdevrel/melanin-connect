/** Shared controls. Sizes follow the reference site: 13px medium pills, 15px body type. */
const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans text-[13px] font-medium transition duration-200 ease-out";

export const button = {
  primary: `${base} bg-brand px-5 py-3 text-white hover:bg-brand-dark`,
  dark: `${base} bg-ink px-5 py-3 text-white hover:bg-ink-soft`,
  outline: `${base} border border-ink/15 bg-white px-5 py-3 text-ink hover:border-ink`,
  glass: `${base} border border-white/80 bg-transparent px-5 py-3 text-white hover:bg-white/10`,
} as const;

export const navItem =
  "text-[15px] font-medium text-ink/75 transition-colors hover:text-ink data-[status=active]:text-ink";

export const textLink =
  "font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand-dark";
