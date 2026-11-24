import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { warmScheduler } from "@/lib/scheduler";

const variantClass = {
  primary: "bg-brand text-white hover:bg-brand-deep [&_.btn-arrow]:bg-white [&_.btn-arrow]:text-brand",
  dark: "bg-ink text-white hover:bg-brand-deep [&_.btn-arrow]:bg-white [&_.btn-arrow]:text-ink",
  ghost:
    "border border-white/80 bg-transparent text-white hover:bg-white/10 [&_.btn-arrow]:bg-white [&_.btn-arrow]:text-brand",
  outline:
    "border border-brand/35 bg-transparent text-brand hover:border-brand hover:bg-brand/5 [&_.btn-arrow]:bg-brand [&_.btn-arrow]:text-white",
} as const;

function ArrowIcon() {
  return (
    <span className="btn-arrow inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors">
      <svg viewBox="0 0 16 16" aria-hidden className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 8h9M8.5 4l4 4-4 4" />
      </svg>
    </span>
  );
}

function classes(variant: keyof typeof variantClass, className?: string) {
  return [
    "pressable inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium tracking-[-0.01em] transition-colors md:min-h-0 md:px-3.5 md:py-2 md:text-[12px]",
    variantClass[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function SiteButton({
  to,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof variantClass;
  className?: string;
  onClick?: () => void;
}) {
  const classNames = classes(variant, className);
  const warm = to === "/book" ? warmScheduler : undefined;
  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon />
    </>
  );

  if (to.startsWith("mailto:") || to.startsWith("tel:") || to.startsWith("http")) {
    return (
      <a href={to} className={classNames} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={classNames}
      onClick={onClick}
      onMouseEnter={warm}
      onFocus={warm}
      onTouchStart={warm}
    >
      {content}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: {
  children: ReactNode;
  variant?: keyof typeof variantClass;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes(variant, className)}>
      <span>{children}</span>
      <ArrowIcon />
    </button>
  );
}
