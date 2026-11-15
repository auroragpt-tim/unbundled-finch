import { Streamdown } from "streamdown";

const privacyContent = `
# Privacy Policy

**Updated:** November 14, 2026

Unbundled Finch operates a public information website and preliminary project-inquiry forms. This notice describes the personal information requested through those forms. It does not create an attorney-client relationship.

## What the inquiry forms collect

Our public forms ask for your name, email address, a technical service category, approximate document volume, requested output format and timing. Organization, phone number and a brief technical overview are optional. If you prefer a phone response, we ask you to supply a phone number.

**Do not include legal documents, client identifiers, case narratives, privileged material or other sensitive information in these forms.** The forms have no document-upload feature. We arrange any needed exchange of project files separately.

## How submissions are processed

The inquiry forms submit to **Formspree**, a third-party form-processing service. Formspree receives the information you enter and processes it to deliver the inquiry to Unbundled Finch. Your information may be stored or transmitted according to that provider's systems and policies. Read [Formspree's privacy policy](https://formspree.io/legal/privacy-policy/) to learn about its handling of submitted data.

We use inquiry information to respond to you, discuss potential production work and communicate about your request. Sending an inquiry does not create an account, confirm acceptance of a work order, or authorize legal services.

## Other site information

Our hosting and other infrastructure providers may process technical information, such as IP address, browser details or request logs, as part of operating and protecting this website. We may also receive messages sent directly to our email address. Information already supplied in those messages may be handled differently from the structured public forms.

## Access, corrections and questions

To ask about information you submitted, request a correction or inquire about deletion, email **atticus@unbundledfinch.com**. We will review the request in light of operational and legal obligations.

No internet transmission or system can be guaranteed completely secure. Do not send sensitive case materials until a suitable transfer process is agreed.
`;

export default function Privacy() {
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">Policy / Privacy</p><h1>Privacy &amp;<br/><em>Inquiries.</em></h1>
      <p className="uf-lede">How we handle preliminary technical service inquiries.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell">
      <div className="max-w-4xl prose prose-neutral prose-lg"><Streamdown>{privacyContent}</Streamdown></div>
    </div></section>
  </div>;
}
