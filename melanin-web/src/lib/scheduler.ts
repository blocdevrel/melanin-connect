import { booking } from "@/lib/site";

/** Brand colours (hex without #) so the Calendly scheduler matches the site. */
const EMBED_PARAMS = {
  embed_type: "Inline",
  hide_gdpr_banner: "1",
  hide_event_type_details: "1",
  background_color: "ffffff",
  text_color: "1b1635",
  primary_color: "f54e00",
  utm_source: "website",
  utm_medium: "booking-page",
} as const;

/** Inline Calendly URL. Stable for a given event, so switching topics does not reload it. */
export function schedulerSrc(url: string, embedDomain: string) {
  const embed = new URL(url);
  embed.searchParams.set("embed_domain", embedDomain);
  for (const [key, value] of Object.entries(EMBED_PARAMS)) embed.searchParams.set(key, value);
  return embed.toString();
}

export function defaultSchedulerUrl() {
  return (
    booking.topics.find((topic) => topic.calendlyUrl)?.calendlyUrl || booking.defaultCalendlyUrl
  );
}

/** Warm the scheduler connection when someone is about to open the booking page. */
export function warmScheduler() {
  if (typeof document === "undefined") return;
  const url = defaultSchedulerUrl();
  if (!url || document.getElementById("calendly-warm")) return;

  for (const href of ["https://calendly.com", "https://assets.calendly.com"]) {
    if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) continue;
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = href;
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);
  }

  const prefetch = document.createElement("link");
  prefetch.id = "calendly-warm";
  prefetch.rel = "prefetch";
  prefetch.as = "document";
  prefetch.href = schedulerSrc(url, window.location.host);
  document.head.appendChild(prefetch);
}
