import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { BookingFallback, CalendlyEmbed } from "@/components/CalendlyEmbed";
import { CalendarIcon, CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { getEmbedHost } from "@/lib/embed-host";
import { booking, pageHead, site, type BookingTopic } from "@/lib/site";

const topicIds: readonly string[] = booking.topics.map((topic) => topic.id);
const isTopic = (value: unknown): value is BookingTopic =>
  typeof value === "string" && topicIds.includes(value);

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { topic?: BookingTopic } =>
    isTopic(search["topic"]) ? { topic: search["topic"] } : {},
  loader: async () => {
    if (typeof window !== "undefined") return { embedHost: window.location.host };
    const host = await getEmbedHost();
    return { embedHost: host || new URL(site.url).host };
  },
  head: () => {
    const meta = pageHead({
      title: "Book a Consultation | Melanin Connect Ltd",
      description:
        "Schedule a consultation, start a project or book an AI audit with the Melanin Connect Ltd team.",
      path: "/book",
    });
    return {
      ...meta,
      links: [
        ...meta.links,
        { rel: "preconnect", href: "https://calendly.com" },
        { rel: "preconnect", href: "https://assets.calendly.com", crossOrigin: "anonymous" },
      ],
    };
  },
  component: BookPage,
});

const expectations = [
  "Pick a time that suits you, in your own time zone.",
  "Get a confirmation and calendar invite by email.",
  "Talk through your goals with our team and leave with clear next steps.",
];

function BookPage() {
  const { topic: topicId = "consultation" } = Route.useSearch();
  const { embedHost } = Route.useLoaderData();
  const navigate = useNavigate({ from: "/book" });
  const topic = booking.topics.find((t) => t.id === topicId) ?? booking.topics[0];
  const calendlyUrl = topic.calendlyUrl || booking.defaultCalendlyUrl;

  return (
    <main className="bg-white">
      <section className="border-b border-line py-8 lg:py-12">
        <p className="text-sm font-semibold tracking-wide text-mute">Book a call</p>
        <h1 className="mt-3 max-w-[16ch] font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl">
          Let’s talk about what you’re building
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
          Choose the conversation that fits, then pick a time. We’ll come prepared with ideas for your business.
        </p>
      </section>
      <section className="py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <fieldset>
            <legend className="font-geist text-sm font-semibold text-ink">
              What would you like to do?
            </legend>
            <div className="mt-3 space-y-2.5">
              {booking.topics.map((option) => {
                const selected = option.id === topic.id;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-4 transition duration-200 has-focus-visible:ring-2 has-focus-visible:ring-brand ${selected ? "border-brand shadow-md shadow-brand/10" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={option.id}
                      checked={selected}
                      onChange={() =>
                        navigate({
                          search: { topic: option.id },
                          replace: true,
                          resetScroll: false,
                        })
                      }
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${selected ? "border-brand bg-brand text-white" : "border-gray-300"}`}
                      aria-hidden="true"
                    >
                      {selected && <CheckIcon className="h-3 w-3" />}
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-geist text-base font-semibold text-ink">
                          {option.label}
                        </span>
                        <span className="inline-flex items-center gap-1 font-geist text-xs text-gray-500">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {option.duration}
                        </span>
                      </span>
                      <span className="mt-1 block font-geist text-sm font-normal text-gray-600">
                        {option.summary}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8 hidden lg:block">
            <Expect />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white lg:sticky lg:top-28">
            <div className="flex items-center gap-3 bg-ink px-5 py-3 sm:px-6">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] text-white/70">
                  {topic.label} · {topic.duration}
                </p>
              </div>
              {calendlyUrl && (
                <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-geist text-xs text-white/80 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live availability
                </span>
              )}
            </div>
            {calendlyUrl ? (
              <CalendlyEmbed url={calendlyUrl} embedHost={embedHost} topicLabel={topic.label} />
            ) : (
              <BookingFallback topicLabel={topic.label} />
            )}
          </div>
        </div>

        <div className="order-3 lg:hidden">
          <Expect />
        </div>
      </div>
      </section>
    </main>
  );
}

function Expect() {
  return (
    <>
      <h2 className="font-geist text-sm font-semibold text-ink">What to expect</h2>
      <ol className="mt-3 space-y-3">
        {expectations.map((item, index) => (
          <li key={item} className="flex gap-3 font-geist text-sm text-gray-600">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink font-geist text-xs font-semibold text-white">
              {index + 1}
            </span>
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-6 font-geist text-sm text-gray-600 sm:flex-row sm:gap-6">
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-ink">
          <MailIcon className="h-4 w-4 text-brand" />
          {site.email}
        </a>
        <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 hover:text-ink">
          <PhoneIcon className="h-4 w-4 text-brand" />
          {site.phone}
        </a>
      </div>
    </>
  );
}
