import { BookLink } from "@/components/BookLink";
import { ArrowUpRightIcon, CalendarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { booking, site } from "@/lib/site";

/** "What should I do next?" Three ways to start, each opening the booking page. */
export function NextSteps() {
  return (
    <section className="bg-white py-14 lg:py-16" id="next-steps">
      <div className="wrap">
        <h2 className="section-title text-ink">Choose how you'd like to start</h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#1f1e1e]/75">
          Pick a time that suits you. Every conversation is with our team, not a sales script.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {booking.topics.map((topic, index) => (
            <Reveal key={topic.id} delay={index * 80} className="h-full">
              <BookLink
                topic={topic.id}
                className="group flex h-full flex-col rounded-2xl bg-[#f6f5f8] p-6 transition-colors hover:bg-[#efeef2]"
              >
                <span className="inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-ink/70">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {topic.duration}
                </span>
                <span className="mt-4 text-[22px] font-medium tracking-[-0.02em] text-ink">
                  {topic.label}
                </span>
                <span className="mt-2 flex-1 text-[15px] leading-relaxed font-normal text-[#1f1e1e]/75">
                  {topic.summary}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-brand-dark">
                  Choose a time
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </BookLink>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-[15px] text-[#1f1e1e]/75">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-ink underline decoration-brand underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
