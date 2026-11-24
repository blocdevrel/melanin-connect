import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { schedulerSrc } from "@/lib/scheduler";
import { button } from "@/lib/ui";

type Status = "loading" | "ready" | "scheduled";

/** Floor for the month view. Smaller height reports from Calendly are ignored. */
const MIN_HEIGHT = 680;

/**
 * Inline Calendly scheduler. The iframe is in the first render, so the browser starts
 * the request with the page instead of after hydration. A thin bar shows progress
 * without covering the calendar. When a booking completes we swap in our own confirmation.
 */
export function CalendlyEmbed({
  url,
  embedHost,
  topicLabel,
}: {
  url: string;
  embedHost: string;
  topicLabel: string;
}) {
  const src = useMemo(() => schedulerSrc(url, embedHost), [url, embedHost]);
  const [status, setStatus] = useState<Status>("loading");
  const [height, setHeight] = useState<number | null>(null);
  const [trackedSrc, setTrackedSrc] = useState(src);

  if (src !== trackedSrc) {
    setTrackedSrc(src);
    setStatus("loading");
    setHeight(null);
  }

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)*calendly\.com$/.test(event.origin)) return;
      const data = event.data as { event?: string; payload?: { height?: string } } | undefined;
      if (data?.event === "calendly.event_type_viewed") setStatus("ready");
      if (data?.event === "calendly.event_scheduled") setStatus("scheduled");
      if (data?.event === "calendly.page_height") {
        const value = Number.parseInt(String(data.payload?.height ?? ""), 10);
        if (value >= MIN_HEIGHT) setHeight(value);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (status === "scheduled") return <BookingConfirmed topicLabel={topicLabel} />;

  const frameHeight = height ?? MIN_HEIGHT;

  return (
    <div className="relative bg-white" style={{ minHeight: frameHeight }}>
      {status === "loading" && (
        <div className="scheduler-track absolute inset-x-0 top-0 z-10" role="progressbar" aria-valuetext="Loading available times">
          <span className="scheduler-bar" />
        </div>
      )}
      <p className="sr-only">{status === "loading" ? "Loading available times" : "Choose a time"}</p>
      <iframe
        src={src}
        title={`Schedule: ${topicLabel} with ${site.name}`}
        className="block w-full border-0"
        style={{ height: frameHeight, minHeight: MIN_HEIGHT }}
        loading="eager"
        fetchPriority="high"
        allow="payment"
        onLoad={() => setStatus((current) => (current === "loading" ? "ready" : current))}
      />
    </div>
  );
}

function BookingConfirmed({ topicLabel }: { topicLabel: string }) {
  return (
    <div className="animate-fade-in px-6 py-14 text-center sm:px-10 sm:py-20" role="status">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30">
        <CheckIcon className="h-8 w-8" />
      </span>
      <h2 className="mt-6 font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        You're booked in
      </h2>
      <p className="mx-auto mt-3 max-w-md font-geist text-base text-gray-600">
        Thanks for scheduling "{topicLabel}". A confirmation and calendar invite are on their way to
        your inbox. We look forward to speaking with you.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/services" className={button.dark}>
          Explore our services
        </Link>
        <Link to="/" className={button.outline}>
          Back to home
        </Link>
      </div>
    </div>
  );
}

/** Shown until a Calendly link is configured in src/lib/site.ts. */
export function BookingFallback({ topicLabel }: { topicLabel: string }) {
  const subject = encodeURIComponent(`${topicLabel}: ${site.name} website`);
  return (
    <div className="px-6 py-14 text-center sm:px-10 sm:py-20">
      <h2 className="font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Let's find a time
      </h2>
      <p className="mx-auto mt-3 max-w-md font-geist text-base text-gray-600">
        Send us a note with a few times that suit you and we'll confirm a call within one working
        day.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={`mailto:${site.email}?subject=${subject}`} className={button.primary}>
          <MailIcon className="h-4 w-4" />
          Email {site.email}
        </a>
        <a href={`tel:${site.phone}`} className={button.outline}>
          <PhoneIcon className="h-4 w-4" />
          {site.phone}
        </a>
      </div>
    </div>
  );
}
