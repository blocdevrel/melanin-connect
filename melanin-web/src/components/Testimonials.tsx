const quotes = [
  {
    company: "E-commerce founder",
    name: "Sarah Chen",
    role: "Seattle",
    quote:
      "Saved me 15 hours per week on operations. Now I can focus on growth. Revenue increased 3x in the first month.",
  },
  {
    company: "Tech startup",
    name: "Michael Rodriguez",
    role: "CEO, Miami",
    quote:
      "The AI tools reduced manual work by 40%. Game changer for our business. Best investment we've made.",
  },
  {
    company: "Digital agency",
    name: "Emily Johnson",
    role: "Owner, Boston",
    quote:
      "Blockchain payments brought in 50% more international clients. Setup took 15 minutes. Incredible results.",
  },
  {
    company: "SaaS founder",
    name: "James Wilson",
    role: "Austin",
    quote:
      "The unified dashboard shows everything I need. No more juggling multiple platforms. Highly recommended.",
  },
];

export function Testimonials() {
  const loop = [...quotes, ...quotes];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What our clients are saying</h2>
      <p className="mt-3 text-sm text-mute">{quotes.length} reviews</p>
      <div className="testimonials-shell mt-8">
        <div className="testimonials-train">
          {loop.map((item, index) => (
            <article key={`${item.name}-${index}`} className="testimonials-card" aria-hidden={index >= quotes.length || undefined}>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[12px] font-medium tracking-[0.04em] text-ink/50 uppercase">{item.company}</p>
                <p className="mt-4 text-[15px] leading-6 text-ink">“{item.quote}”</p>
                <div className="mt-auto pt-6">
                  <p className="text-[15px] font-medium text-ink">{item.name}</p>
                  <p className="text-[13px] text-mute">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
