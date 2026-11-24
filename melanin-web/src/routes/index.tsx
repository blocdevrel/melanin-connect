import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ContactSection } from "@/components/ContactSection";
import { CountUp } from "@/components/CountUp";
import { Faq } from "@/components/Faq";
import { SiteButton } from "@/components/SiteButton";
import { SiteImage } from "@/components/SiteImage";
import { Testimonials } from "@/components/Testimonials";
import { imagePreload, imageSizes } from "@/lib/images";
import { images, offerings, pageHead, site } from "@/lib/site";
import { stackLogos } from "@/lib/stack-logos";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: "Melanin Connect Ltd | Build Smarter. Automate Faster. Grow Digitally.",
      description:
        "Melanin Connect Ltd helps businesses transform operations and create scalable digital products using AI, automation and next-generation technology.",
      path: "/",
    });
    return {
      ...head,
      links: [...head.links, imagePreload(images.heroHome, imageSizes.hero)],
    };
  },
  component: HomePage,
});

const words = [
  "best.",
  "affordability.",
  "speed.",
  "quality.",
  "reliability.",
  "clarity.",
] as const;

const systemCovers = {
  ai: "/images/card-1.jpg",
  products: "/images/card-2.jpg",
  commerce: "/images/card-3.jpg",
  blockchain: "/images/service-blockchain.jpg",
} as const;

const serviceArt = {
  ai: "/images/service-ai.jpg",
  products: "/images/service-products.jpg",
  commerce: "/images/service-commerce.jpg",
  blockchain: "/images/service-blockchain.jpg",
} as const;

const reasons = [
  { title: "Discover", detail: "Understand the business problem before any build starts." },
  {
    title: "Design",
    detail: "Develop a technology strategy that matches how the work actually happens.",
  },
  { title: "Build", detail: "Create the product, platform or infrastructure." },
  { title: "Automate", detail: "Integrate AI and automation into the operation." },
  { title: "Scale", detail: "Optimise and expand once the system is in use." },
];

function HomePage() {
  return (
    <main id="top" className="bg-white">
      <Hero />
      <Stats />
      <section className="py-14 lg:py-16">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-5xl">
          Replace operational chaos with systems.
        </h2>
        <div className="mt-8">
          <Systems />
        </div>
      </section>
      <Statement />
      <Services />
      <Projects />
      <Stack />
      <Testimonials />
      <Why />
      <ContactSection />
      <Faq />
    </main>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAnimate(false);
      return;
    }

    const id = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex h-auto w-full flex-col overflow-hidden bg-[#0a0612] sm:h-[min(88vh,48rem)] lg:h-[min(92vh,52rem)]"
    >
      <SiteImage
        src={images.heroHome}
        alt=""
        priority
        sizes={imageSizes.hero}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
      />
      <div
        aria-hidden
        className="hero-veil pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(6,4,14,0.88)_0%,rgba(6,4,14,0.62)_42%,rgba(6,4,14,0.22)_68%,rgba(6,4,14,0.12)_100%)]"
      />
      <div className="hero-copy relative z-10 flex min-h-[22rem] flex-1 flex-col items-center justify-center py-10 text-center sm:min-h-0 sm:items-start sm:py-12 sm:text-left lg:py-14">
        <div className="hero-enter flex w-full max-w-xl flex-col items-center sm:items-start lg:max-w-2xl">
          <p className="text-[11px] font-semibold tracking-wide text-brand-soft sm:text-base lg:text-lg">
            AI. Automation. Digital commerce.
          </p>
          <h1 className="hero-headline mt-3 text-center font-display text-[clamp(2.2rem,7.2vw,3.6rem)] font-semibold tracking-[-0.04em] text-white/95 sm:mt-5 sm:text-left">
            <span className="inline-block max-sm:max-w-[18ch]">
              You asked for the{" "}
              <span className="hero-flit" aria-live="polite">
                <span className="hero-flit-sizer" aria-hidden>
                  {words.map((word) => (
                    <span key={word}>{word}</span>
                  ))}
                </span>
                <span
                  className={`hero-flit-word${animate ? " is-animated" : ""}`}
                  key={words[index] ?? words[0]}
                >
                  {words[index] ?? words[0]}
                </span>
              </span>
            </span>
            <span className="mt-0 block">Here we are.</span>
          </h1>
          <div className="mt-8 flex w-full flex-wrap justify-center gap-2.5 sm:mt-9 sm:justify-start sm:gap-3">
            <SiteButton to="/services">Our services</SiteButton>
            <SiteButton to="/book" variant="ghost">
              Book a call
            </SiteButton>
          </div>
        </div>
      </div>
      <div className="hero-logos relative z-10 w-full overflow-hidden pb-6 sm:pb-7 lg:pb-8">
        <div className="logo-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 || undefined}
            >
              {stackLogos.map(({ name, Icon, color }) => (
                <li
                  key={`${copy}-${name}`}
                  className="flex items-center gap-2.5 px-7 text-white sm:gap-3 sm:px-9"
                >
                  <Icon className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" style={{ color }} aria-hidden />
                  <span className="text-sm font-semibold tracking-tight sm:text-base">{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 4, suffix: "+", label: "Products launched" },
    { value: 5000, suffix: "+", label: "Users have used our platforms" },
    { value: 5, suffix: "+", label: "Years in business" },
  ];

  return (
    <section className="bg-white py-16 text-ink sm:py-20 lg:py-24">
      <ul className="grid grid-cols-3 gap-x-3 sm:gap-x-8">
        {stats.map((item, index) => (
          <li key={item.label} className="min-w-0 text-center">
            <CountUp
              value={item.value}
              suffix={item.suffix}
              immediate
              delay={index * 120}
              suffixClassName="text-brand"
              className="font-display text-[clamp(1.7rem,6vw,4.25rem)] leading-none font-bold tracking-[-0.03em] text-ink"
            />
            <p className="mx-auto mt-3 max-w-[16rem] text-[12px] leading-5 text-ink sm:text-sm">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Systems() {
  return (
    <>
      <div className="systems-desktop">
        {offerings.map((item) => (
          <SystemCard
            key={item.id}
            title={item.title}
            summary={item.summary}
            image={systemCovers[item.id]}
          />
        ))}
      </div>
      <div className="systems-carousel">
        <div className="systems-carousel-rail">
          <div className="systems-carousel-train">
            {offerings.map((item) => (
              <div key={item.id} className="systems-carousel-slide">
                <SystemCard
                  title={item.title}
                  summary={item.summary}
                  image={systemCovers[item.id]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SystemCard({ title, summary, image }: { title: string; summary: string; image: string }) {
  return (
    <Link to="/services" className="systems-card group">
      <SiteImage
        src={image}
        alt=""
        sizes={imageSizes.card}
        className="systems-card-media media-zoom object-cover"
      />
      <div className="systems-card-gradient" aria-hidden />
      <div className="systems-card-content">
        <h3 className="systems-card-title">{title}</h3>
        <p className="systems-card-copy">{summary}</p>
      </div>
    </Link>
  );
}

function Statement() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
        <figure className="lg:pr-14">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#ece8df]">
            <SiteImage
              src="/images/card-4.jpg"
              alt="Workspace for designing digital products and automation"
              sizes={imageSizes.half}
              className="media-zoom h-full w-full object-cover"
            />
          </div>
        </figure>
        <div className="lg:border-l lg:border-line lg:py-4 lg:pl-14">
          <p className="max-w-md text-lg leading-8 text-ink">
            Design, build and support for SMEs, startups and organisations that need software
            matching how work actually happens.
          </p>
          <h2 className="mt-8 text-base font-semibold">{site.tagline}</h2>
          <p className="mt-1 text-sm leading-6 text-mute">
            Phased delivery and clear scopes. Accra-based, built for African and diaspora markets.
          </p>
          <Link
            to="/about-us"
            className="mt-5 inline-block text-sm font-semibold underline decoration-1 underline-offset-4 hover:decoration-brand"
          >
            How we work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-ink py-14 text-white lg:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-white sm:text-[2.6rem] sm:leading-none">
          Services
        </h2>
        <Link
          to="/services"
          className="text-sm font-medium text-white underline decoration-brand decoration-2 underline-offset-4 hover:opacity-80"
        >
          All services
        </Link>
      </div>
      <div className="services-marquee mt-9 lg:mt-10">
        <div className="services-track flex w-max md:grid md:w-auto md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          <ul className="flex shrink-0 md:contents">
            {offerings.map((item) => (
              <li key={item.id} className="w-[min(82vw,22rem)] shrink-0 pr-3 md:w-auto md:pr-0">
                <Link
                  to="/services"
                  hash={item.id}
                  className="group grid h-full grid-cols-1 gap-3 md:grid-cols-[11.5rem_1fr] md:gap-5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#141414] md:aspect-auto md:h-[7.5rem]">
                    <SiteImage
                      src={serviceArt[item.id]}
                      alt=""
                      sizes={imageSizes.thumb}
                      className="media-zoom h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <h3 className="text-[15px] leading-snug font-bold text-white underline decoration-white/70 decoration-1 underline-offset-[3px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-5 text-white/70">{item.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cards = [
    {
      title: "Web and mobile platforms",
      role: "Digital products",
      summary: "From idea and prototype to MVP and production.",
      image: "/images/service-products.jpg",
    },
    {
      title: "Commerce and payments",
      role: "Digital commerce",
      summary: "Customer, payment and commerce systems in one place.",
      image: "/images/service-commerce.jpg",
    },
    {
      title: "Intelligent workflows",
      role: "AI and automation",
      summary: "Agents and workflows that take repetitive work off the team.",
      image: "/images/service-ai.jpg",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-14 lg:py-20">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <h2 className="max-w-[18ch] font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] sm:text-5xl">
          Project stack.
        </h2>
        <Link
          to="/services"
          className="max-w-xs text-sm leading-6 text-mute hover:text-ink sm:pb-1"
        >
          Products and systems we design, build and automate.
        </Link>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.title} to="/services" className="group block overflow-hidden bg-white">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#ece8df]">
              <SiteImage
                src={card.image}
                alt=""
                sizes={imageSizes.project}
                className="media-zoom h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-mute">{card.role}</p>
              <h3 className="mt-1 font-display text-2xl tracking-tight underline decoration-ink/20 underline-offset-4 group-hover:decoration-brand">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-mute">{card.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="bg-black py-16 text-white lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(1.85rem,4.5vw,3.15rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
          Combining intelligent systems with proven technologies
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
          We match AI, automation and infrastructure to the use case, so the stack reduces risk and
          holds up in production.
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-2 justify-items-center gap-x-6 gap-y-8 sm:mt-14 sm:max-w-4xl sm:grid-cols-4 sm:gap-x-8">
        {stackLogos.map(({ name, Icon, color }) => (
          <li key={name} className="flex items-center gap-2.5 text-white sm:gap-3">
            <Icon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" style={{ color }} aria-hidden />
            <span className="text-lg font-semibold tracking-tight sm:text-xl">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-ink py-16 text-white lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-soft">Why Melanin Connect</p>
          <h2 className="mt-3 max-w-[14ch] font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] sm:text-5xl">
            A team that thinks beyond the build.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Strategy first. Systems your team can run. Automation that keeps working after launch.
          </p>
          <Link
            to="/about-us"
            className="mt-8 inline-flex text-sm font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 hover:opacity-80"
          >
            More about how we work
          </Link>
        </div>
        <div>
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group grid gap-3 border-t border-white/15 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-brand-soft">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-2xl tracking-tight text-white">{reason.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{reason.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
