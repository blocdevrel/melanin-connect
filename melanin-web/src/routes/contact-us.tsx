import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    pageHead({
      title: "Contact Us | Melanin Connect Ltd",
      description:
        "Talk to Melanin Connect Ltd about AI, automation, digital products and digital commerce for your business.",
      path: "/contact-us",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-line py-14 lg:py-20">
        <h1 className="max-w-[14ch] font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl">
          Talk to Melanin Connect.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-mute">
          Tell us the problem, the timeline, and what done looks like. We’ll reply within one business day.
        </p>
      </section>

      <ContactSection page />
      <Faq />
    </main>
  );
}
