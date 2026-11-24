import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteButton } from "@/components/SiteButton";
import { SiteImage } from "@/components/SiteImage";
import { imageSizes } from "@/lib/images";
import { offerings, pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services | Melanin Connect Ltd",
      description:
        "AI and automation, digital products, digital commerce and blockchain solutions that help businesses lower costs and grow.",
      path: "/services",
    }),
  component: ServicesPage,
});

const art = {
  ai: "/images/service-ai.jpg",
  products: "/images/service-products.jpg",
  commerce: "/images/service-commerce.jpg",
  blockchain: "/images/service-blockchain.jpg",
} as const;

const process = [
  {
    step: "01",
    title: "Discover",
    detail: "Understand the business problem before any build starts.",
  },
  {
    step: "02",
    title: "Design",
    detail: "Develop a technology strategy that matches how the work actually happens.",
  },
  { step: "03", title: "Build", detail: "Create the product, platform or infrastructure." },
  { step: "04", title: "Automate", detail: "Integrate AI and automation into the operation." },
  { step: "05", title: "Scale", detail: "Optimise and expand once the system is in use." },
];

function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-line py-14 lg:py-20">
        <p className="text-sm font-semibold tracking-wide text-mute">Services</p>
        <h1 className="mt-3 max-w-[14ch] font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]">
          Where expertise meets the work
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-mute">
          {site.name} offers the systems a business needs to automate operations, ship digital
          products and modernise commerce. Clear scopes. Real software. A handover your team can
          run.
        </p>
      </section>

      <section className="py-14 lg:py-16">
        <p className="text-sm font-semibold tracking-wide text-mute">Project step guide</p>
        <h2 className="mt-2 max-w-[16ch] font-display text-3xl tracking-tight sm:text-4xl">
          Tailored for the work in front of you
        </h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item) => (
            <li key={item.step} className="bg-[#faf9f7] p-5">
              <p className="inline-block bg-brand px-2 py-0.5 text-sm font-semibold text-white">
                {item.step}
              </p>
              <h3 className="mt-3 font-display text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-[#faf9f7] py-14 lg:py-16">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Services we offer</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-mute">
          We take a direct approach to delivery. Clear scopes. Software and systems your team can
          run.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((service) => (
            <li key={service.id} id={service.id} className="scroll-mt-28">
              <Link to="/contact-us" className="group flex h-full flex-col bg-white p-5 sm:p-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ece8df]">
                  <SiteImage
                    src={art[service.id]}
                    alt=""
                    sizes={imageSizes.service}
                    className="media-zoom h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight underline decoration-ink/20 underline-offset-4 group-hover:decoration-brand">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-mute">{service.summary}</p>
                <span className="mt-5 text-sm font-semibold underline decoration-brand decoration-2 underline-offset-4">
                  Talk to us
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-14 lg:py-16">
        <div className="grid items-center gap-8 rounded-2xl bg-ink px-6 py-10 text-white sm:px-8 lg:grid-cols-[1.2fr_auto] lg:px-10 lg:py-12">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-soft">
              Like what you see?
            </p>
            <h2 className="mt-3 max-w-[18ch] font-display text-3xl leading-[1.1] font-semibold tracking-[-0.03em] sm:text-4xl">
              Turn the work in front of you into a system with {site.name}.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
              Tell us the problem, the timeline, and what done looks like. We’ll reply within one
              business day.
            </p>
          </div>
          <SiteButton to="/contact-us" className="w-full justify-center sm:w-auto sm:shrink-0">
            Contact us
          </SiteButton>
        </div>
      </section>
    </main>
  );
}
