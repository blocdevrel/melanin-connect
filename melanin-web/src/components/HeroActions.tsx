import { Link } from "@tanstack/react-router";

import { BookLink } from "@/components/BookLink";
import { ArrowRightIcon } from "@/components/icons";

function ArrowChip() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink">
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  );
}

const pill =
  "inline-flex items-center gap-2 rounded-full py-2 pr-2 pl-4 text-[13px] font-medium transition-colors";

/** "Our services" plus a secondary booking action, shown on the hero banners. */
export function HeroActions({ secondary = "solutions" }: { secondary?: "solutions" | "audit" }) {
  return (
    <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <Link to="/services" className={`${pill} bg-brand text-white hover:bg-brand-dark`}>
        Our services
        <ArrowChip />
      </Link>
      {secondary === "solutions" ? (
        <BookLink topic="consultation" className={`${pill} border border-white/80 text-white hover:bg-white/10`}>
          Book
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand">
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </BookLink>
      ) : (
        <BookLink topic="audit" className={`${pill} border border-white/80 text-white hover:bg-white/10`}>
          Get an AI audit
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand">
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </BookLink>
      )}
    </div>
  );
}
