import { Link } from "@tanstack/react-router";

import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { offerings } from "@/lib/site";

export function ServicesOverview() {
  return (
    <section className="scroll-mt-24 bg-ink py-14 text-white lg:py-16" id="services">
      <div className="wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title">Services</h2>
          <p className="max-w-md text-[15px] leading-relaxed text-white/70">
            AI, automation, digital products, commerce and blockchain for businesses that want to
            grow.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {offerings.map((item, index) => (
            <li key={item.id} id={item.id} className="scroll-mt-24">
              <Reveal delay={index * 50}>
                <Link
                  to="/services"
                  hash={item.id}
                  className="group grid gap-3 py-6 sm:grid-cols-12 sm:items-start sm:gap-6"
                >
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/70 sm:col-span-6">
                    {item.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-brand sm:col-span-2 sm:justify-end">
                    Learn more
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <ul className="flex flex-wrap gap-2 sm:col-span-12">
                    {item.includes.map((include) => (
                      <li
                        key={include}
                        className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-white/75"
                      >
                        {include}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
