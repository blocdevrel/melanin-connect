import { createFileRoute } from "@tanstack/react-router";

import { LegalContact, LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service | Melanin Connect Ltd",
      description:
        "The terms that apply when you use the Melanin Connect Ltd website and services.",
      path: "/terms",
    }),
  component: TermsPage,
});

const company = "Melanin Connect Ltd";

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 19, 2026">
      <LegalSection title="1. Agreement to Terms">
        <p>
          By accessing or using {company}'s website and services, you agree to be bound by these
          Terms of Service and all applicable laws and regulations. If you do not agree with any of
          these terms, you are prohibited from using or accessing this site.
        </p>
      </LegalSection>

      <LegalSection title="2. Use License">
        <p>
          Permission is granted to temporarily access the materials on {company}'s website for
          personal, non-commercial transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>
        <LegalList
          items={[
            "Modify or copy the materials",
            "Use the materials for any commercial purpose or for any public display",
            "Attempt to reverse engineer any software contained on the website",
            "Remove any copyright or other proprietary notations from the materials",
            "Transfer the materials to another person or mirror the materials on any other server",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Services">
        <p>
          {company} provides AI-powered tools, blockchain payment systems, and business solutions.
          We reserve the right to modify, suspend, or discontinue any aspect of our services at any
          time without prior notice.
        </p>
      </LegalSection>

      <LegalSection title="4. User Accounts">
        <p>
          When you create an account with us, you must provide accurate and complete information.
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activities that occur under your account.
        </p>
      </LegalSection>

      <LegalSection title="5. Prohibited Uses">
        <p>You agree not to use our services:</p>
        <LegalList
          items={[
            "For any unlawful purpose or to solicit others to perform unlawful acts",
            "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
            "To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
            "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
            "To submit false or misleading information",
            "To upload or transmit viruses or any other type of malicious code",
            "To collect or track the personal information of others",
            "To spam, phish, pharm, pretext, spider, crawl, or scrape",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          The content, features, and functionality of our services are owned by {company} and are
          protected by international copyright, trademark, patent, trade secret, and other
          intellectual property laws.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          The materials on {company}'s website are provided on an 'as is' basis. {company} makes no
          warranties, expressed or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitations">
        <p>
          In no event shall {company} or its suppliers be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising
          out of the use or inability to use the materials on {company}'s website, even if {company}{" "}
          or a {company} authorized representative has been notified orally or in writing of the
          possibility of such damage.
        </p>
      </LegalSection>

      <LegalSection title="9. Accuracy of Materials">
        <p>
          The materials appearing on {company}'s website could include technical, typographical, or
          photographic errors. {company} does not warrant that any of the materials on its website
          are accurate, complete, or current.
        </p>
      </LegalSection>

      <LegalSection title="10. Modifications">
        <p>
          {company} may revise these terms of service for its website at any time without notice. By
          using this website you are agreeing to be bound by the then current version of these terms
          of service.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of
          the Republic of Ghana and you irrevocably submit to the exclusive jurisdiction of the
          courts of Ghana.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Information">
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
