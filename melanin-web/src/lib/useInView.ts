import { useEffect, useRef, useState } from "react";

/**
 * Reports once when the element first scrolls into view, then stops observing.
 * Elements already scrolled past (e.g. the page hydrated mid-scroll) count as seen.
 */
export function useInView<T extends Element>({
  rootMargin = "0px 0px -8% 0px",
  threshold = 0,
}: { rootMargin?: string; threshold?: number } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && (entry.isIntersecting || entry.boundingClientRect.top < 0)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, inView };
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
