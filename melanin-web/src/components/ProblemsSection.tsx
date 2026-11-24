import { Link } from "@tanstack/react-router";

import { BookLink } from "@/components/BookLink";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { imageSizes } from "@/lib/images";
import { offerings } from "@/lib/site";

const imagesById = {
  ai: "/images/service-ai.jpg",
  products: "/images/service-products.jpg",
  commerce: "/images/service-commerce.jpg",
} as const;

const featured = offerings.flatMap((item) => {
  if (item.id === "blockchain") return [];
  return [{ ...item, image: imagesById[item.id] }];
});

/** Three lead offers, in the reference site's large-card row. */
export function ProblemsSection() {
  return (
    <section className="py-14 lg:py-16" id="problems">
      <div className="wrap">
        <SectionHeading title="Replace manual work with systems." />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.id} delay={index * 80} className="h-full">
              <Link
                to="/services"
                hash={item.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#f6f5f8]"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <SiteImage
                    src={item.image}
                    alt={item.title}
                    sizes={imageSizes.project}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#1f1e1e]/75">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-dark">
                    Learn more
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-[15px] text-[#1f1e1e]/75">
          Not sure where to start?{" "}
          <BookLink
            topic="audit"
            className="font-medium text-ink underline decoration-brand underline-offset-4"
          >
            Get an AI audit
          </BookLink>
        </p>
      </div>
    </section>
  );
}
