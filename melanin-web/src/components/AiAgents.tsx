import { BookLink } from "@/components/BookLink";
import {
  BookIcon,
  HeadsetIcon,
  PenIcon,
  SettingsIcon,
  TargetIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { button } from "@/lib/ui";

const agents = [
  {
    icon: HeadsetIcon,
    name: "Support",
    description: "Handles FAQs, enquiries and lead qualification.",
  },
  {
    icon: TargetIcon,
    name: "Sales",
    description: "Qualifies prospects and follows up automatically.",
  },
  {
    icon: PenIcon,
    name: "Content",
    description: "Creates and distributes marketing content.",
  },
  {
    icon: SettingsIcon,
    name: "Operations",
    description: "Automates repetitive internal processes.",
  },
  {
    icon: BookIcon,
    name: "Knowledge",
    description: "Lets employees query company documentation and knowledge.",
  },
];

export function AiAgents() {
  return (
    <section className="bg-[#faf9f7] py-14 lg:py-20" id="ai-agents">
      <div className="wrap">
        <p className="text-[15px] font-medium text-brand">Melanin Connect Ltd AI agents</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-xl text-ink">Agent stack.</h2>
          <p className="max-w-md text-[15px] leading-relaxed text-[#1f1e1e]/75">
            Named agents that work alongside your team, so people can focus on the work that grows
            the business.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agents.map(({ icon: Icon, name, description }, index) => (
            <li key={name}>
              <Reveal delay={index * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl bg-white p-6">
                  <span className="text-[13px] font-medium text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[22px] font-medium tracking-[-0.02em] text-ink">{name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1f1e1e]/75">{description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-8">
          <BookLink topic="audit" className={button.dark}>
            Find your first AI agent
          </BookLink>
        </Reveal>
      </div>
    </section>
  );
}
