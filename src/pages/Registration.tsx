import { useState } from "react";
import { Link } from "wouter";

const FORM_ENDPOINT = "https://formspree.io/f/moejzwne";

export default function Registration() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSending(true);

    const data = new FormData(form);
    data.set("form_type", "Prospective client registration");
    data.set("_subject", "Unbundled Finch — new registration inquiry");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Submission unsuccessful");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("We couldn't submit your information. Please try again or email atticus@unbundledfinch.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="uf-site">
      <section className="uf-page-intro">
        <div className="uf-shell">
          <p className="uf-eyebrow">Unbundled Finch / Registration</p>
          <h1>Register your<br/><em>interest.</em></h1>
          <p className="uf-lede">Interested in document-production services? Share your contact information and we'll follow up to discuss what you need.</p>
        </div>
      </section>

      <section className="uf-section">
        <div className="uf-shell uf-contact-grid">
          <div>
            <p className="uf-eyebrow">Prospective client information</p>
            {submitted ? (
              <div className="uf-registration-confirmation" role="status" aria-live="polite">
                <h2>Thank you for your interest.</h2>
                <p>Your information was submitted. Unbundled Finch can follow up using the contact details you provided.</p>
                <p>This registration does not create a login account or grant portal access.</p>
                <button type="button" className="uf-button" onClick={() => setSubmitted(false)}>
                  Submit another inquiry <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <form className="uf-form" onSubmit={submit}>
                <div className="uf-form-two">
                  <div>
                    <label htmlFor="register-first-name">First name *</label>
                    <input id="register-first-name" name="firstName" autoComplete="given-name" maxLength={100} required />
                  </div>
                  <div>
                    <label htmlFor="register-last-name">Last name *</label>
                    <input id="register-last-name" name="lastName" autoComplete="family-name" maxLength={100} required />
                  </div>
                </div>
                <label htmlFor="register-email">Email address *</label>
                <input id="register-email" type="email" name="email" autoComplete="email" maxLength={254} required />
                <div className="uf-form-two">
                  <div>
                    <label htmlFor="register-organization">Organization / firm (optional)</label>
                    <input id="register-organization" name="company" autoComplete="organization" maxLength={160} />
                  </div>
                  <div>
                    <label htmlFor="register-phone">Phone (optional)</label>
                    <input id="register-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
                  </div>
                </div>
                <label htmlFor="register-interest">Service of interest (optional)</label>
                <select id="register-interest" name="serviceInterest" defaultValue="">
                  <option value="">Select a service, if known</option>
                  <option value="Table of Authorities">Table of Authorities</option>
                  <option value="eBinder assembly">eBinder assembly</option>
                  <option value="Exhibit hyperlinking">Exhibit hyperlinking</option>
                  <option value="PDF / OCR / Bates numbering">PDF / OCR / Bates numbering</option>
                  <option value="Other or unsure">Other / not sure yet</option>
                </select>
                <label htmlFor="register-note">Anything else you'd like us to know? (optional)</label>
                <textarea id="register-note" name="message" rows={4} maxLength={1000} placeholder="A brief, non-confidential description is enough." />
                <p className="uf-small-note">Please do not submit legal documents, sensitive personal information, or confidential case details. This is a contact registration, not a document upload or an account signup.</p>
                <label className="uf-register-consent" htmlFor="register-consent">
                  <input type="checkbox" id="register-consent" name="consentToContact" value="Yes" required />
                  <span>I agree that Unbundled Finch may contact me about this inquiry. *</span>
                </label>
                <p className="uf-small-note">Read our <Link href="/privacy">Privacy Policy</Link> for information about how submitted details are handled.</p>
                {error && <p className="uf-register-error" role="alert">{error}</p>}
                <button type="submit" className="uf-button uf-button-dark" disabled={sending}>
                  {sending ? "Submitting…" : "Register interest"} <span aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </div>
          <aside className="uf-contact-aside">
            <p className="uf-eyebrow">What happens next</p>
            <h2>Start with<br/>a conversation.</h2>
            <p>Registration helps us understand who is interested and how to follow up. There is no account password, customer dashboard, or document upload at this stage.</p>
            <div className="uf-aside-rule" />
            <p className="uf-eyebrow">Prefer email?</p>
            <a href="mailto:atticus@unbundledfinch.com" className="uf-text-link">atticus@unbundledfinch.com <span aria-hidden="true">↗</span></a>
            <p className="uf-small-note">Unbundled Finch offers technical legal-document production, not legal advice or representation.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
