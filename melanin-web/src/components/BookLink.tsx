import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { warmScheduler } from "@/lib/scheduler";
import type { BookingTopic } from "@/lib/site";

/** Links to the booking page with a topic pre-selected. */
export function BookLink({
  topic,
  className,
  children,
  onClick,
}: {
  topic?: BookingTopic;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/book"
      search={topic ? { topic } : {}}
      className={className}
      onClick={onClick}
      onMouseEnter={warmScheduler}
      onFocus={warmScheduler}
      onTouchStart={warmScheduler}
    >
      {children}
    </Link>
  );
}
