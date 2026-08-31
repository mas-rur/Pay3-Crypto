import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal-page";
import { site, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy \u2014 ${site.name}`,
  description: `Privacy Policy for the ${site.name} website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      intro={`This Privacy Policy explains how ${site.name} ("we", "us") collects, uses, and protects information when you visit ${site.domain} (the "Site"). We built the Site to require as little personal information as possible.`}
    >
      <LegalSection heading="1. Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-medium text-ink">Contact information</span>{" "}
            you voluntarily provide, such as an email address, if you
            message us directly.
          </li>
          <li>
            <span className="font-medium text-ink">Public blockchain data</span>{" "}
            such as wallet addresses and transactions, which are publicly
            available on the Polygon network and not controlled by us.
          </li>
          <li>
            <span className="font-medium text-ink">Usage data</span>{" "}
            collected automatically, such as pages visited, browser type,
            and general location, typically through standard web server
            logs or privacy-conscious analytics tools.
          </li>
        </ul>
        <p>
          We do not collect private keys, wallet seed phrases, or custody
          any digital assets on your behalf. Never share your private key or
          seed phrase with anyone, including anyone claiming to represent
          {" "}{site.name}.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Information">
        <p>Information we collect may be used to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Respond to inquiries sent to our contact channels;</li>
          <li>Maintain, secure, and improve the Site;</li>
          <li>Understand aggregate usage trends of the Site;</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Cookies and Similar Technologies">
        <p>
          The Site may use essential cookies or similar local storage
          required for basic functionality, and may use privacy-conscious
          analytics to understand how visitors use the Site. Where
          required by law, we will request your consent before using
          non-essential cookies. You can control cookies through your
          browser settings at any time.
        </p>
      </LegalSection>

      <LegalSection heading="4. Third-Party Services">
        <p>
          The Site links to third-party services, including GitHub,
          Instagram, block explorers, and wallet applications. These
          services have their own privacy practices, and we encourage you
          to review their respective policies. We are not responsible for
          the privacy practices of third parties.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Sharing and Disclosure">
        <p>
          We do not sell personal information. We may share information
          with service providers who help us operate the Site, or when
          required to comply with applicable law, protect our rights, or
          respond to a valid legal request.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <p>
          We retain personal information only as long as reasonably
          necessary for the purposes described in this Policy, or as
          required by applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights and Choices">
        <p>
          Depending on your jurisdiction, you may have rights to access,
          correct, or request deletion of personal information we hold
          about you. To exercise these rights, contact us using the details
          below.
        </p>
      </LegalSection>

      <LegalSection heading="8. Children's Privacy">
        <p>
          The Site is not directed at children, and we do not knowingly
          collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material
          changes will be reflected by updating the "Last updated" date
          above.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact">
        <p>
          Questions about this Privacy Policy can be sent to{" "}
          <a
            href={socials.email.href}
            className="text-brand underline underline-offset-2"
          >
            {socials.email.label}
          </a>
          .
        </p>
      </LegalSection>

      <div className="rounded-xl border border-dashed border-paper-line bg-paper-soft p-5 text-sm leading-relaxed text-ink-400">
        This page is a general-purpose template intended as a starting point
        and does not account for every privacy law that may apply to{" "}
        {site.name} (such as GDPR or CCPA, depending on your users). It is
        not a substitute for advice from a qualified lawyer, and we
        recommend having this Policy reviewed by legal counsel before
        relying on it publicly.
      </div>
    </LegalPage>
  );
}
