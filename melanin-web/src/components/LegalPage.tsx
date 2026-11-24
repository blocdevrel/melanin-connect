import type { ReactNode } from "react";

import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** Shared layout for the Privacy Policy and Terms of Service pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white">
      <section className="border-b border-line py-14 lg:py-20">
        <p className="text-sm font-semibold tracking-wide text-mute">{site.legalName}</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-mute">Last updated: {updated}</p>
      </section>
      <section className="py-14 lg:pb-20">
        <div className="max-w-2xl space-y-10 text-sm leading-7 text-mute">{children}</div>
      </section>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: readonly string[] }) {
  return (
    <ul className="ml-1 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Contact card used at the end of each legal page. */
export function LegalContact() {
  return (
    <div className="mt-2 grid grid-cols-1 gap-4 rounded-2xl bg-brand-soft p-5 ring-1 ring-brand/10 sm:grid-cols-2 sm:p-6">
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
          <MailIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="text-gray-700 underline-offset-4 hover:text-brand hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
          <MapPinIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Address</p>
          <address className="not-italic">
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-700 underline-offset-4 hover:text-brand hover:underline"
            >
              {site.address}
              <ArrowUpRightIcon className="ml-1 inline-block h-3.5 w-3.5 align-[-0.1em] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </a>
          </address>
        </div>
      </div>
    </div>
  );
}
