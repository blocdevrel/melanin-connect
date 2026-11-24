import { createFileRoute } from "@tanstack/react-router";

import { LegalContact, LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Melanin Connect Ltd",
      description:
        "Read how Melanin Connect Ltd collects, uses, and safeguards your personal information.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 19, 2026">
      <LegalSection title="1. Introduction">
        <p>
          Welcome to Melanin Connect Ltd ("we," "our," or "us"). We are committed to protecting your
          privacy and ensuring you have a positive experience on our website and in using our
          products and services.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website and use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <h3 className="text-lg font-semibold text-ink">2.1 Information You Provide</h3>
        <p>We may collect information that you provide directly to us, including:</p>
        <LegalList
          items={[
            "Name and contact information (email address, phone number)",
            "Company information",
            "Messages and communications you send to us",
            "Information provided when you register for our services",
          ]}
        />
        <h3 className="pt-2 text-lg font-semibold text-ink">
          2.2 Automatically Collected Information
        </h3>
        <p>
          We may automatically collect certain information about your device and usage patterns,
          including:
        </p>
        <LegalList
          items={[
            "IP address",
            "Browser type and version",
            "Device information",
            "Usage data and analytics",
            "Cookies and similar tracking technologies",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <LegalList
          items={[
            "Provide, maintain, and improve our services",
            "Process your requests and transactions",
            "Send you technical notices and support messages",
            "Respond to your comments and questions",
            "Monitor and analyze trends and usage",
            "Detect, prevent, and address technical issues",
            "Comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Information Sharing and Disclosure">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          your information only in the following circumstances:
        </p>
        <LegalList
          items={[
            "With your consent",
            "To comply with legal obligations",
            "To protect our rights and safety",
            "With service providers who assist us in operating our website",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Data Security">
        <p>
          We implement appropriate technical and organizational security measures to protect your
          personal information. However, no method of transmission over the internet or electronic
          storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>
          Depending on your location, you may have certain rights regarding your personal
          information, including:
        </p>
        <LegalList
          items={[
            "The right to access your personal information",
            "The right to correct inaccurate information",
            "The right to request deletion of your information",
            "The right to object to processing of your information",
            "The right to data portability",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>
          We use cookies and similar tracking technologies to track activity on our website and hold
          certain information. You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
