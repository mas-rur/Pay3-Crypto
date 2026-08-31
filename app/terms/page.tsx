import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal-page";
import { site, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: `Terms of Use \u2014 ${site.name}`,
  description: `Terms of Use for the ${site.name} website and the ${site.ticker} token.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="September 2026"
      intro={`These Terms of Use ("Terms") govern your access to and use of the ${site.name} website located at ${site.domain} (the "Site") and any related content or services. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.`}
    >
      <LegalSection heading="1. Eligibility">
        <p>
          You must be able to form a legally binding contract to use the
          Site. You may not use the Site if you are prohibited from doing so
          under the laws of your jurisdiction, including laws relating to
          digital assets, or if you are located in, or a citizen or resident
          of, a jurisdiction where use of the Site or acquisition of{" "}
          {site.ticker} would be unlawful.
        </p>
      </LegalSection>

      <LegalSection heading="2. Nature of the Site and the Token">
        <p>
          The Site provides general information about {site.name} and the{" "}
          {site.ticker} token, including token details, allocation, and team
          information. Content on the Site, including the whitepaper
          placeholder, is provided for informational purposes only and does
          not constitute an offer or solicitation to buy or sell {site.ticker}
          , securities, or any other financial instrument in any
          jurisdiction where such an offer or solicitation would be unlawful.
        </p>
        <p>
          {site.ticker} is intended to function as a utility token within the
          {" "}{site.name} ecosystem. Nothing on this Site should be
          interpreted as a promise or guarantee regarding the future value,
          liquidity, or utility of {site.ticker}.
        </p>
      </LegalSection>

      <LegalSection heading="3. No Financial, Investment, or Legal Advice">
        <p>
          Nothing on the Site constitutes financial, investment, legal, or
          tax advice. You are solely responsible for evaluating the merits
          and risks of any decision involving digital assets and should
          consult independent professional advisors before doing so.
        </p>
      </LegalSection>

      <LegalSection heading="4. Risks of Digital Assets">
        <p>
          Digital assets, including {site.ticker}, are subject to high price
          volatility, regulatory uncertainty, technical risks (including
          smart contract vulnerabilities), and potential total loss of
          value. Blockchain transactions are generally irreversible. You
          acknowledge and accept these risks before interacting with{" "}
          {site.ticker} or any related smart contract.
        </p>
      </LegalSection>

      <LegalSection heading="5. Acceptable Use">
        <p>You agree not to use the Site to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Violate any applicable law or regulation;</li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Site;
          </li>
          <li>
            Attempt to gain unauthorized access to the Site, related
            systems, or smart contracts;
          </li>
          <li>
            Impersonate any person or entity, or misrepresent your
            affiliation with {site.name};
          </li>
          <li>
            Use the Site to transmit malware or engage in fraudulent
            activity.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Intellectual Property">
        <p>
          The Site, including its design, text, graphics, logos, and the{" "}
          {site.name} name and branding, is owned by {site.name} or its
          licensors and is protected by applicable intellectual property
          laws. You may not reproduce, distribute, or create derivative
          works from Site content without prior written permission, except
          as permitted by open-source licenses that may apply to specific
          code repositories.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Links and Services">
        <p>
          The Site may link to third-party websites, block explorers, or
          services (including social platforms and wallet applications) that
          are not owned or controlled by {site.name}. We are not responsible
          for the content, accuracy, or practices of any third-party
          service, and linking to it does not imply endorsement.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclaimers">
        <p>
          The Site and its content are provided on an "as is" and "as
          available" basis, without warranties of any kind, whether express
          or implied, including warranties of merchantability, fitness for a
          particular purpose, or non-infringement. We do not warrant that
          the Site will be uninterrupted, secure, or error-free.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {site.name}, its team, and
          affiliates will not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of
          profits, revenue, or digital assets, arising from your use of the
          Site or interaction with {site.ticker} or any related smart
          contract.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes will
          be reflected by updating the "Last updated" date above. Continued
          use of the Site after changes take effect constitutes acceptance
          of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
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
        and does not account for every jurisdiction or regulatory regime
        that may apply to {site.name}. It is not a substitute for advice
        from a qualified lawyer, and we recommend having these Terms
        reviewed by legal counsel before relying on them publicly.
      </div>
    </LegalPage>
  );
}
