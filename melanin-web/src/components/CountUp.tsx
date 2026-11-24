import { useEffect, useState } from "react";

import { prefersReducedMotion, useInView } from "@/lib/useInView";

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - 2 ** (-10 * t));

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 * Pass `immediate` to start counting as soon as the page loads.
 * The server renders the final number, so it reads correctly without JavaScript,
 * and screen readers always get the final figure.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  delay = 0,
  immediate = false,
  className,
  suffixClassName,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  /** Count as soon as the page loads, instead of waiting until the number scrolls into view. */
  immediate?: boolean;
  className?: string;
  suffixClassName?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ rootMargin: "0px 0px -15% 0px" });
  const [current, setCurrent] = useState(value);
  const active = immediate || inView;

  // Start from zero once hydrated, unless the visitor prefers reduced motion.
  useEffect(() => {
    if (!prefersReducedMotion()) setCurrent(0);
  }, []);

  useEffect(() => {
    if (!active || prefersReducedMotion()) return;
    let frame = 0;
    let start: number | undefined;
    const tick = (now: number) => {
      start ??= now + delay;
      const progress = Math.max(0, (now - start) / duration);
      setCurrent(Math.round(easeOutExpo(Math.min(progress, 1)) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, duration, delay]);

  const final = `${prefix}${value}${suffix}`;
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true" className="relative inline-block tabular-nums">
        {/* Invisible final value reserves the width, so the layout never shifts while counting. */}
        <span className="invisible">
          {prefix}
          {value}
          <span className={suffixClassName}>{suffix}</span>
        </span>
        <span className="absolute inset-0 text-center">
          {prefix}
          {current}
          <span className={suffixClassName}>{suffix}</span>
        </span>
      </span>
    </span>
  );
}
