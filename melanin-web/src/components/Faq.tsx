const items = [
  {
    question: "What does Melanin Connect Ltd do?",
    answer:
      "We are a digital technology company. We help businesses use AI, automation and blockchain to improve operations, digital commerce and growth.",
  },
  {
    question: "Who do you work with?",
    answer:
      "SMEs looking for automation and digital transformation, startups that need a product from idea to production, and organisations entering African and diaspora markets.",
  },
  {
    question: "How does a project start?",
    answer:
      "Book a consultation, start a project, or get an AI audit. We learn the business problem first, then design, build, automate and scale. We’ll reply within one business day.",
  },
  {
    question: "What do you actually build?",
    answer:
      "Web and mobile applications, SaaS platforms, AI-powered platforms, marketplaces, customer portals and internal systems. Where it earns its place, we also build payment and blockchain infrastructure.",
  },
  {
    question: "Where are you based?",
    answer:
      "47 Hill Street, Newtown, Accra, Ghana. We work with businesses connected to African markets and diaspora markets, Monday to Friday.",
  },
];

export function Faq() {
  return (
    <section className="pb-14 lg:pb-16" id="faq">
      <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink sm:text-5xl sm:leading-none">
        Frequently asked questions
      </h2>
      <div className="mt-8 border-b border-ink/10 lg:mt-10">
        {items.map((item) => (
          <details key={item.question} className="group border-t border-ink/10 py-4">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-1 font-medium hover:text-ink/80 sm:gap-6">
              {item.question}
              <span className="shrink-0 text-2xl leading-none transition duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-mute">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
