import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const journey = [
  "Business problems",
  "AI & automation",
  "Digital products",
  "Payments & commerce",
  "Blockchain & payment infrastructure",
  "Deployment",
  "Growth implementation",
  "Recurring technology services",
];

const outcomes = [
  "Lower operating costs",
  "Automation",
  "Better customer experiences",
  "New revenue channels",
  "Faster processes",
  "Secure transactions",
  "Better data",
  "Scalable digital infrastructure",
];

/** The end-to-end journey from business problem to recurring growth, and what it delivers. */
export function ValueChain() {
  return (
    <section className="bg-black py-16 text-white lg:py-24" id="journey">
      <div className="wrap">
        <h2 className="section-title max-w-3xl">From a business problem to a system that scales.</h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
          One partner across the whole journey, so every step builds on the last.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, index) => (
            <li key={step}>
              <Reveal delay={index * 40} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-[13px] font-medium text-brand tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[16px] font-medium tracking-[-0.02em]">{step}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 text-[22px] font-medium tracking-[-0.02em]">What your business gains</h3>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-center gap-3 text-[15px] text-white/85">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
