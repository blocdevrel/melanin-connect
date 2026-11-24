export const site = {
  name: "Melanin Connect Ltd",
  legalName: "Melanin Connect Ltd",
  url: "https://melaninconnect.xyz",
  /** Melanin Connect App, our product. Linked from the footer and opened in a new tab. */
  appUrl: "https://www.melaninconnect.app/",
  email: "info@melaninconnect.xyz",
  phone: "+233503659567",
  workHours: "Monday to Friday, 10:00 am – 5:30 pm",
  address: "47 Hill Street, Newtown, Accra, Ghana",
  /** Google Maps link for the address. Opens in a new tab. */
  mapUrl: "https://maps.app.goo.gl/HV299rEskbTZ2AzA6",
  tagline: "Build Smarter. Automate Faster. Grow Digitally.",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact-us" },
] as const;

/** What Melanin Connect sells. Shared by the nav, homepage, services page and footer. */
export const offerings = [
  {
    id: "ai",
    title: "AI & Automation",
    summary: "Automate repetitive work and deploy intelligent workflows.",
    includes: [
      "AI agents",
      "Workflow automation",
      "Customer-service automation",
      "Content automation",
      "Business intelligence",
      "Internal knowledge systems",
    ],
  },
  {
    id: "products",
    title: "Digital Products",
    summary: "Turn business ideas into scalable web and mobile platforms.",
    includes: [
      "Web applications",
      "Mobile applications",
      "SaaS platforms",
      "AI-powered platforms",
      "Marketplaces",
      "Customer portals",
      "Internal business systems",
    ],
  },
  {
    id: "commerce",
    title: "Digital Commerce",
    summary: "Build modern commerce, payment and customer systems.",
    includes: ["Commerce platforms", "Payment systems", "Customer systems"],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    summary:
      "Deploy secure blockchain-based infrastructure where it provides genuine business value.",
    includes: ["Payment infrastructure", "Secure transactions"],
  },
] as const;

export const images = {
  logo: "/images/logo.png",
  logoLight: "/images/logo.png",
  mark: "/images/logo.png",
  heroHome: "/images/hero-home.jpg",
  heroServices: "/images/hero-services.jpg",
} as const;

/**
 * Calendly booking. Paste the scheduling link from Calendly (Scheduling > your event > Copy link).
 * Each topic can point at its own Calendly event type; leave `calendlyUrl` empty on a topic to
 * use `defaultCalendlyUrl`. While no link is set, the booking page falls back to email and phone.
 */
export const booking = {
  defaultCalendlyUrl: "",
  topics: [
    {
      id: "consultation",
      label: "Book a consultation",
      duration: "30 min",
      summary: "Talk through your business goals and where AI and automation can help.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
    {
      id: "project",
      label: "Start a project",
      duration: "45 min",
      summary: "Scope a product or platform, from idea and prototype to MVP and production.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
    {
      id: "audit",
      label: "Get an AI audit",
      duration: "30 min",
      summary: "Find the manual work, costs and bottlenecks that AI can remove first.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
  ],
} as const;

export type BookingTopic = (typeof booking.topics)[number]["id"];

type PageMeta = { title: string; description: string; path: string };

/** Builds the per-page <head> tags: title, description, Open Graph and Twitter cards. */
export function pageHead({ title, description, path }: PageMeta) {
  const url = `${site.url}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
