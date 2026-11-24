import { CodeIcon, LayersIcon, SearchIcon, TrendingUpIcon, ZapIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const steps = [
  { icon: SearchIcon, title: "Discover", description: "Understand the business problem." },
  { icon: LayersIcon, title: "Design", description: "Develop the technology strategy." },
  { icon: CodeIcon, title: "Build", description: "Create the product or infrastructure." },
  { icon: ZapIcon, title: "Automate", description: "Integrate AI and automation." },
  { icon: TrendingUpIcon, title: "Scale", description: "Optimise and expand." },
];

export function Methodology({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink py-16 text-white lg:py-20" : "bg-white py-14 lg:py-16"} id="methodology">
      <div className="wrap">
        <p className="text-[15px] font-medium text-brand">How we work</p>
        <h2 className={`section-title mt-3 max-w-3xl ${dark ? "text-white" : "text-ink"}`}>
          Discover. Design. Build. Automate. Scale.
        </h2>
        <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-[#1f1e1e]/75"}`}>
          Five clear steps take you from a business problem to a solution that keeps growing with you.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-5">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <Reveal delay={index * 70} className="h-full">
                <article
                  className={`h-full rounded-2xl p-5 ${dark ? "bg-white/5" : "bg-[#f6f5f8]"}`}
                >
                  <span className="text-[13px] font-medium text-brand tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className={`mt-4 h-5 w-5 ${dark ? "text-white" : "text-ink"}`} />
                  <h3 className={`mt-3 text-[18px] font-medium tracking-[-0.02em] ${dark ? "text-white" : "text-ink"}`}>
                    {title}
                  </h3>
                  <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-[#1f1e1e]/75"}`}>
                    {description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
