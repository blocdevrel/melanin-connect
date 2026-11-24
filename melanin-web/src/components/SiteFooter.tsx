import { Link } from "@tanstack/react-router";

import { SiteButton } from "@/components/SiteButton";
import { navLinks, offerings, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="footer-inner pt-16 pb-12">
        <div className="border-b border-white/15 pb-12">
          <p className="font-display text-2xl tracking-tight text-white sm:text-3xl">
            AI. Automation. Digital commerce.
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/70">
            We help businesses automate operations, build intelligent digital products and modernise
            digital commerce with AI, automation and blockchain.
          </p>
          <SiteButton to="/contact-us" className="mt-6">
            Talk to us
          </SiteButton>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_1px_minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-x-12">
          <div>
            <p className="text-[15px] font-semibold">Services</p>
            <ul className="mt-4 space-y-2.5">
              {offerings.map((item) => (
                <li key={item.id}>
                  <Link to="/services" hash={item.id} className="inline-block py-1.5 text-[15px] text-white/70 hover:text-brand">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[15px] font-semibold">Company</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="inline-block py-1.5 text-[15px] text-white/70 hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.appUrl} className="inline-block py-1.5 text-[15px] text-white/70 hover:text-brand" target="_blank" rel="noreferrer">
                  Melanin Connect App
                </a>
              </li>
              <li>
                <Link to="/privacy" className="inline-block py-1.5 text-[15px] text-white/70 hover:text-brand">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden bg-white/15 lg:block" aria-hidden />
          <div>
            <p className="text-[15px] font-semibold">Visit</p>
            <p className="mt-4 text-[15px] leading-7 text-white/70">{site.address}</p>
            <p className="mt-2 text-[15px] leading-7 text-white/70">{site.workHours}</p>
            <p className="mt-2 text-[15px] leading-7 text-white/70">African and diaspora markets</p>
          </div>
          <div>
            <p className="text-[15px] font-semibold">Talk</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a className="text-white/70 hover:text-brand" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-brand" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/15" />
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <p className="max-w-md text-sm leading-6 text-white/60">
            {site.legalName}. AI. Automation. Digital commerce.
          </p>
          <p className="mt-4 text-sm text-white/50">© {new Date().getFullYear()} {site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
