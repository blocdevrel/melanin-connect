import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { SiteButton } from "@/components/SiteButton";
import { SiteImage } from "@/components/SiteImage";
import { imageSizes } from "@/lib/images";
import { images, offerings, site } from "@/lib/site";

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  function close() {
    setMenu(false);
    setMobile(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white text-ink ${menu ? "" : "border-b border-ink/10"}`}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="relative z-30 flex h-24 items-center justify-between">
        <div className="flex min-w-0 items-center gap-8 xl:gap-10">
          <Link
            to="/"
            className="inline-flex shrink-0 items-center"
            onClick={close}
            aria-label={`${site.name} home`}
          >
            <SiteImage
              src={images.logo}
              alt=""
              priority
              sizes={imageSizes.logo}
              className="h-16 w-auto sm:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-x-6 lg:flex xl:gap-x-8" aria-label="Primary">
            <div className="relative" onMouseEnter={() => setMenu(true)}>
              <Link
                to="/services"
                className={`inline-flex items-center gap-1.5 text-[15px] leading-none font-medium ${menu ? "text-ink" : "text-ink/75"}`}
                aria-expanded={menu}
              >
                Services
                <Chevron open={menu} />
              </Link>
            </div>
            <Link
              to="/about-us"
              className="text-[15px] leading-none font-medium text-ink/75 hover:text-ink"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="text-[15px] leading-none font-medium text-ink/75 hover:text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden lg:inline-flex">
            <SiteButton to="/book">Book a call</SiteButton>
          </span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={mobile}
            aria-label={mobile ? "Close menu" : "Menu"}
            onClick={() => setMobile((open) => !open)}
          >
            <span className="flex w-[1.35rem] flex-col gap-[5px]" aria-hidden>
              <span
                className={`h-0.5 origin-center rounded-full bg-ink transition ${mobile ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-ink transition ${mobile ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 origin-center rounded-full bg-ink transition ${mobile ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menu ? (
        <div
          className="absolute top-full right-0 left-0 z-40 hidden bg-white text-ink shadow-[0_18px_40px_rgba(0,0,0,0.16)] lg:block"
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
        >
          <div>
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-line py-6">
              <div className="max-w-xl">
                <p className="font-display text-xl tracking-tight">Beyond the build</p>
                <p className="mt-1.5 text-sm leading-6 text-mute">
                  AI, automation, digital products and commerce for businesses that want to grow.
                </p>
              </div>
              <SiteButton to="/book" onClick={close}>
                Book a call
              </SiteButton>
            </div>
            <ul className="grid grid-cols-2 gap-x-8 py-6 xl:grid-cols-4">
              {offerings.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/services"
                    hash={item.id}
                    onClick={close}
                    className="group flex h-full flex-col py-3 hover:bg-[#f6f5f8]"
                  >
                    <span className="font-display text-base tracking-tight">{item.title}</span>
                    <span className="mt-2 text-sm leading-5 text-mute">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {mobile ? (
        <nav className="absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-ink/10 bg-white py-4 lg:hidden">
          <p className="py-2 text-sm text-mute">Services</p>
          {offerings.map((item) => (
            <Link
              key={item.id}
              to="/services"
              hash={item.id}
              className="block py-3 text-xl"
              onClick={close}
            >
              {item.title}
            </Link>
          ))}
          <Link to="/about-us" className="block py-3 text-xl" onClick={close}>
            About
          </Link>
          <Link to="/contact-us" className="block py-3 text-xl" onClick={close}>
            Contact
          </Link>
          <SiteButton to="/book" className="mt-3 w-full justify-center" onClick={close}>
            Book a call
          </SiteButton>
        </nav>
      ) : null}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden
      className={`size-2.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.25 4.5 6 8.25 9.75 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
