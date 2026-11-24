import { BuildingIcon, GlobeIcon, RocketIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const audiences = [
  {
    icon: BuildingIcon,
    title: "SMEs",
    description: "Businesses looking for automation and digital transformation.",
  },
  {
    icon: RocketIcon,
    title: "Startups",
    description: "Companies needing MVP and product development.",
  },
  {
    icon: GlobeIcon,
    title: "Organisations entering African markets",
    description: "Companies needing digital commerce, payments and local technology infrastructure.",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-white py-14 lg:py-16" id="who-we-serve">
      <div className="wrap">
        <h2 className="section-title max-w-xl text-ink">Built for businesses ready to grow.</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1f1e1e]/75">
          We work with businesses connected to African markets and diaspora markets, and with anyone
          ready to modernise how they operate.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <article className="h-full rounded-2xl bg-[#f6f5f8] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[20px] font-medium tracking-[-0.02em] text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#1f1e1e]/75">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
