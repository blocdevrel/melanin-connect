import { createFileRoute } from "@tanstack/react-router";

import { SiteButton } from "@/components/SiteButton";
import { SiteImage } from "@/components/SiteImage";
import { imageSizes } from "@/lib/images";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageHead({
      title: "About Us | Melanin Connect Ltd",
      description:
        "Melanin Connect Ltd serves businesses connected to African and diaspora markets with AI, digital commerce and African and global market expertise.",
      path: "/about-us",
    }),
  component: AboutPage,
});

const standards = [
  "Written scope before any build starts",
  "Staging before production",
  "Auth, roles, and a handover the team can run",
  "AI and automation only where they earn their place",
];

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

const reasons = [
  {
    title: "We start with the problem",
    detail:
      "The first conversation is about the work, the cost, and what done looks like — not a stack.",
  },
  {
    title: "Systems your team can run",
    detail: "Phased delivery, clear scopes, and a handover that still works after we leave.",
  },
  {
    title: "Built for African and diaspora markets",
    detail: "Accra-based, working with businesses connected to African markets and the diaspora.",
  },
];

function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-line py-14 lg:py-20">
        <p className="text-sm font-semibold tracking-wide text-mute">About</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]">
          A product team that thinks beyond the build.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-mute">
          {site.name} works with businesses connected to African markets and diaspora markets —
          finding the real problem, then shipping AI, products and commerce systems that hold up in
          daily use.
        </p>
      </section>

      <section className="grid items-center gap-8 py-14 lg:grid-cols-2 lg:gap-0 lg:py-20">
        <figure className="lg:pr-14">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8df]">
            <SiteImage
              src="/images/service-products.jpg"
              alt="Workspace for designing digital products"
              sizes={imageSizes.half}
              className="h-full w-full object-cover"
            />
          </div>
        </figure>
        <div className="lg:border-l lg:border-line lg:pl-14">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Mission</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-mute">
            To be the AI-powered partner for business growth and digital transformation: intelligent
            automation, digital products and commerce systems that let a team focus on growth.
          </p>
          <h2 className="mt-10 font-display text-3xl tracking-tight sm:text-4xl">Standards</h2>
          <ul className="mt-4 max-w-md space-y-2 text-sm leading-6 text-mute">
            {standards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#faf9f7] py-14 lg:py-16">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Delivery process</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-mute">
              Phased scopes, visible milestones, and a handover your team can run.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-[#ece8df]">
            <SiteImage
              src="/images/service-ai.jpg"
              alt="Abstract view of an automated workflow"
              sizes={imageSizes.wide}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {process.map((item) => (
            <li key={item.step} className="bg-white p-4">
              <p className="text-sm font-semibold">{item.step}</p>
              <h3 className="mt-2 font-display text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-mute">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="relative mb-12 aspect-[16/9] overflow-hidden bg-white/10 sm:mb-14 lg:mb-16">
          <SiteImage
            src="/images/hero-services.jpg"
            alt=""
            sizes={imageSizes.wide}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-soft">Why {site.name}</p>
            <h2 className="mt-3 max-w-[14ch] font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] sm:text-5xl">
              A team that thinks beyond the build.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Strategy first. Systems your team can run. Automation that keeps working after launch.
            </p>
          </div>
          <div>
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="grid gap-3 border-t border-white/15 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-brand-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{reason.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <SiteButton to="/contact-us">Start a discovery conversation</SiteButton>
        </div>
      </section>
    </main>
  );
}
