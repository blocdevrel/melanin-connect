import { Link } from "@tanstack/react-router";
import { useId, useState, type FormEvent } from "react";

import { ActionButton } from "@/components/SiteButton";
import { ChevronDownIcon } from "@/components/icons";
import { offerings, site } from "@/lib/site";

const services = [
  ...offerings.map((item) => item.title),
  "Book a consultation",
  "Start a project",
  "Get an AI audit",
];

export function ContactSection({ page = false }: { page?: boolean }) {
  const [service, setService] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const listId = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry for Melanin Connect Ltd")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section className="scroll-mt-24 py-14 lg:py-16" id="contact">
      <div className="wrap">
        {page ? null : (
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink sm:text-5xl sm:leading-none">
            Contact
          </h2>
        )}

        <div className={`${page ? "" : "mt-8 lg:mt-10"} grid items-stretch overflow-hidden rounded-2xl bg-[#f6f5f8] lg:grid-cols-2`}>
          <div className="flex flex-col p-6 sm:p-7">
            <h3 className="max-w-[18ch] font-display text-3xl leading-[1.1] font-semibold tracking-[-0.03em] sm:text-4xl">
              {page ? "Visit & talk" : "Tell us the system you need."}
            </h3>
            {page ? null : (
              <p className="mt-3 max-w-sm text-sm leading-6 text-mute">
                A discovery call for AI, automation, digital products or commerce. We’ll reply within one business day.
              </p>
            )}
            <address className="mt-6 text-sm leading-6 not-italic">
              <p>{site.address}</p>
              <p>{site.workHours}</p>
              <p>
                <a href={`tel:${site.phone}`} className="underline decoration-brand underline-offset-4">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-brand underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="rounded-b-2xl bg-white p-6 sm:p-7 lg:rounded-r-2xl lg:rounded-bl-none">
            <form className="quote-form grid gap-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ama Mensah" required />
                <Field
                  label="Organisation"
                  name="organisation"
                  placeholder="Company or institution"
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
                <Field label="Phone (optional)" name="phone" type="tel" placeholder="+233 …" />
              </div>

              <div className="relative">
                <span className="text-[13px] font-medium text-ink" id={`${listId}-label`}>
                  Service <span className="text-brand">*</span>
                </span>
                <input type="hidden" name="service" value={service} required />
                <button
                  type="button"
                  className="field flex items-center justify-between text-left"
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  aria-labelledby={`${listId}-label`}
                  onClick={() => setOpen((value) => !value)}
                >
                  <span className={service ? "text-[#1f1e1e]" : "text-[#1f1e1e]/45"}>
                    {service || "What should we help with?"}
                  </span>
                  <ChevronDownIcon className={`h-4 w-4 shrink-0 ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <ul
                    id={listId}
                    role="listbox"
                    aria-labelledby={`${listId}-label`}
                    className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-black/10 bg-white p-1 shadow-lg"
                  >
                    {services.map((option) => (
                      <li key={option} role="option" aria-selected={option === service}>
                        <button
                          type="button"
                          className="w-full rounded-lg px-3 py-2 text-left text-[15px] hover:bg-[#f6f5f8]"
                          onClick={() => {
                            setService(option);
                            setOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <label className="block">
                <span className="text-[13px] font-medium text-ink">
                  What do you need? <span className="text-brand">*</span>
                </span>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Current tools, the pain, timeline, and what done looks like…"
                  className="field mt-1.5 min-h-[8.5rem] resize-y"
                />
                <span className="mt-1.5 flex items-center justify-between gap-3 text-[12px] text-mute">
                  <span>A clear problem statement helps us reply faster.</span>
                  <span className="tabular-nums">{message.trim().length}</span>
                </span>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <ActionButton
                  type="submit"
                  className="min-h-12 w-full justify-center px-5 py-3 text-sm sm:w-auto"
                >
                  Send message
                </ActionButton>
                <p className="text-[12px] leading-5 text-mute sm:max-w-[16rem] sm:text-right">
                  By sending, you agree we may contact you about this enquiry.{" "}
                  <Link to="/privacy" className="underline decoration-brand/40 underline-offset-2 hover:decoration-brand">
                    Privacy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-ink">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </span>
      <input
        className="field mt-1.5"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={name === "organisation" ? "organization" : name}
      />
    </label>
  );
}
