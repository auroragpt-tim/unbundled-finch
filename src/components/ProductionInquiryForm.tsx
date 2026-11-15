import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { PRODUCTION_SERVICES, type ProductionService } from "@/lib/productionIntake";

type ServiceChoice = ProductionService | "unsure" | "";
type FormValues = {
  service: ServiceChoice;
  fileVolume: string;
  output: string;
  timing: string;
  targetDate: string;
  notes: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  phone: string;
  replyMethod: "email" | "phone";
  contactConsent: boolean;
  scopeAcknowledged: boolean;
};
type Step = 0 | 1 | 2 | 3;
type Source = "contact" | "project";

const initial: FormValues = {
  service: "", fileVolume: "", output: "", timing: "", targetDate: "",
  notes: "", firstName: "", lastName: "", email: "", organization: "",
  phone: "", replyMethod: "email", contactConsent: false, scopeAcknowledged: false,
};
const STEP_NAMES = ["Service", "Scope", "Contact", "Review"] as const;
const FORM_ENDPOINTS: Record<Source, string> = {
  // Both public inquiry pages route to the same user-provided Formspree form.
  // Include form_source in the payload to distinguish where inquiries began.
  // No confidential legal materials or uploads are permitted.
  contact: "https://formspree.io/f/mkjrodld",
  project: "https://formspree.io/f/mkjrodld",
};

const volumeLabels: Record<string, string> = {
  "not-sure": "Not sure yet",
  "1-5": "1–5 files",
  "6-20": "6–20 files",
  "21-100": "21–100 files",
  "100+": "More than 100 files",
};
const outputLabels: Record<string, string> = {
  "searchable-pdf": "Searchable PDF",
  "indexed-pdf": "Indexed / bookmarked PDF",
  "word": "Editable Word document",
  "multiple": "Multiple formats",
  "unsure": "I'd like guidance on formats",
};
const timingLabels: Record<string, string> = {
  flexible: "Flexible",
  week: "Within a week (requested)",
  month: "Within a month (requested)",
  date: "Specific requested date",
};

function labelService(value: ServiceChoice): string {
  return value === "unsure" ? "Not sure — please help me choose"
    : value ? PRODUCTION_SERVICES[value].label : "Not selected";
}
function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ProductionInquiryForm({ source }: { source: Source }) {
  const [values, setValues] = useState<FormValues>(initial);
  const [step, setStep] = useState<Step>(0);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (step > 0) titleRef.current?.focus();
  }, [step]);

  const change = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setValues((current) => ({ ...current, [key]: value }));

  const serviceValid = values.service !== "";
  const scopeValid = Boolean(
    values.fileVolume && values.output && values.timing &&
    (values.timing !== "date" || values.targetDate)
  );
  const contactValid = Boolean(
    values.firstName.trim() && values.lastName.trim() &&
    validEmail(values.email) &&
    (values.replyMethod !== "phone" || values.phone.trim()) &&
    values.contactConsent && values.scopeAcknowledged
  );
  const allValid = serviceValid && scopeValid && contactValid;
  const canAdvance = step === 0 ? serviceValid : step === 1 ? scopeValid : contactValid;

  function advance() {
    setError("");
    if (step < 3 && canAdvance) setStep((step + 1) as Step);
  }
  function back() {
    setError("");
    if (step > 0) setStep((step - 1) as Step);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || !allValid || step !== 3) return;
    setSubmitting(true);
    setError("");

    // Only structured NON-CONFIDENTIAL inquiry metadata leaves the browser.
    // No attachments, case narratives, client identities, booking data or
    // substantive pleadings should be collected through this public form.
    const payload = new FormData();
    payload.set("_subject", "Unbundled Finch — technical production inquiry");
    payload.set("form_type", "Non-confidential technical production inquiry");
    payload.set("form_source", source === "project" ? "Project intake" : "Contact page");
    payload.set("firstName", values.firstName.trim());
    payload.set("lastName", values.lastName.trim());
    payload.set("email", values.email.trim());
    payload.set("company", values.organization.trim());
    payload.set("phone", values.phone.trim());
    payload.set("replyPreference", values.replyMethod);
    payload.set("serviceInterest", labelService(values.service));
    payload.set("approximateFileVolume", volumeLabels[values.fileVolume]);
    payload.set("requestedOutput", outputLabels[values.output]);
    payload.set("requestedTiming", timingLabels[values.timing]);
    if (values.timing === "date") payload.set("requestedDate", values.targetDate);
    payload.set("technicalSummary", values.notes.trim());
    payload.set("consentToContact", "Yes");
    payload.set("confidentialityAcknowledgment", "Confirmed: no confidential information submitted");

    try {
      const response = await fetch(FORM_ENDPOINTS[source], {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Inquiry submission failed");
      setCompleted(true);
      setValues(initial);
    } catch {
      setError("Your inquiry could not be sent. Please try again, or email atticus@unbundledfinch.com without confidential attachments.");
    } finally {
      setSubmitting(false);
    }
  }

  if (completed) return (
    <section className="uf-intake-confirmation" role="status" aria-live="polite">
      <p className="uf-eyebrow">Inquiry transmitted</p>
      <h2>Thank You.<br /><em>We'll Be In Touch.</em></h2>
      <p>We received your non-confidential inquiry. This is not an accepted work order, a client account, or a promise to meet a requested deadline. We'll discuss scope and an appropriate document-transfer method before requesting source files.</p>
      <button type="button" className="uf-button uf-button-dark" onClick={() => { setCompleted(false); setStep(0); }}>
        Start another inquiry <span aria-hidden="true">↗</span>
      </button>
    </section>
  );

  return (
    <form className="uf-intake-form" onSubmit={submit} noValidate>
      <div className="uf-intake-topline">
        <span className="uf-eyebrow">Pre-engagement inquiry / No document uploads</span>
        <span className="uf-intake-step-count">0{step + 1} / 04</span>
      </div>
      <ol className="uf-intake-steps" aria-label="Inquiry progress">
        {STEP_NAMES.map((name, index) => (
          <li key={name} className={index === step ? "is-active" : index < step ? "is-complete" : ""} aria-current={index === step ? "step" : undefined}>
            <span>0{index + 1}</span> {name}
          </li>
        ))}
      </ol>

      <div className="uf-intake-main">
        {step === 0 && (
          <section aria-labelledby="uf-intake-title">
            <p className="uf-eyebrow">01 / Define the service</p>
            <h2 id="uf-intake-title" tabIndex={-1} ref={titleRef}>What Do You Need<br/><em>Prepared?</em></h2>
            <p className="uf-intake-intro">Select the primary technical service. The scope can include other tasks; we'll clarify them together before any work begins.</p>
            <fieldset className="uf-intake-service-grid">
              <legend className="uf-sr-only">Primary technical service</legend>
              {(Object.keys(PRODUCTION_SERVICES) as ProductionService[]).map((key, index) => (
                <label key={key} className={"uf-intake-option" + (values.service === key ? " is-selected" : "")}>
                  <input type="radio" name="service" value={key} checked={values.service === key}
                    onChange={() => change("service", key)} />
                  <span className="uf-intake-option-index">{String(index + 1).padStart(2, "0")} / TECHNICAL</span>
                  <strong>{PRODUCTION_SERVICES[key].label}</strong>
                  <small>{PRODUCTION_SERVICES[key].summary}</small>
                </label>
              ))}
              <label className={"uf-intake-option uf-intake-unsure" + (values.service === "unsure" ? " is-selected" : "")}>
                <input type="radio" name="service" value="unsure" checked={values.service === "unsure"}
                  onChange={() => change("service", "unsure")} />
                <span className="uf-intake-option-index">09 / GUIDANCE</span>
                <strong>Not sure yet</strong>
                <small>Describe the kind of technical result you need.</small>
              </label>
            </fieldset>
          </section>
        )}

        {step === 1 && (
          <section aria-labelledby="uf-intake-title">
            <p className="uf-eyebrow">02 / Production specifications</p>
            <h2 id="uf-intake-title" tabIndex={-1} ref={titleRef}>A Few Practical<br/><em>Details.</em></h2>
            <p className="uf-intake-intro">Approximate information is fine. No court facts, client names, legal arguments or documents are needed here.</p>
            {values.service && values.service !== "unsure" && (
              <div className="uf-intake-hint">
                <strong>Useful later for {labelService(values.service)}</strong>
                <span>{PRODUCTION_SERVICES[values.service].requestedInputs.join(" · ")}</span>
                <small>Do not provide these source materials in this public form.</small>
              </div>
            )}
            <div className="uf-intake-fields">
              <div>
                <label htmlFor="uf-intake-files">Approximate number of files *</label>
                <select id="uf-intake-files" name="fileVolume" value={values.fileVolume} onChange={e => change("fileVolume", e.target.value)} required>
                  <option value="">Select an estimate</option>
                  {Object.entries(volumeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="uf-intake-output">Preferred finished format *</label>
                <select id="uf-intake-output" name="output" value={values.output} onChange={e => change("output", e.target.value)} required>
                  <option value="">Select a format</option>
                  {Object.entries(outputLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="uf-intake-timing">Requested timing *</label>
                <select id="uf-intake-timing" name="timing" value={values.timing} onChange={e => { change("timing", e.target.value); if (e.target.value !== "date") change("targetDate", ""); }} required>
                  <option value="">Select a timeframe</option>
                  {Object.entries(timingLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
                <p className="uf-intake-field-help">Requested timing is not an agreed turnaround or a legal deadline calculation.</p>
              </div>
              {values.timing === "date" && (
                <div>
                  <label htmlFor="uf-intake-date">Requested completion date *</label>
                  <input id="uf-intake-date" type="date" name="targetDate" value={values.targetDate} onChange={e => change("targetDate", e.target.value)} required />
                </div>
              )}
              <div className="uf-intake-full">
                <label htmlFor="uf-intake-notes">Non-confidential technical overview (optional)</label>
                <textarea id="uf-intake-notes" name="technicalSummary" rows={4} maxLength={600} value={values.notes}
                  onChange={e => change("notes", e.target.value)}
                  placeholder="Example: I need approximately 30 finalized exhibits sequenced, bookmarked and delivered as a searchable PDF." />
                <p className="uf-intake-field-help">{values.notes.length} / 600 characters · Exclude case narratives, identifying details and privileged material.</p>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section aria-labelledby="uf-intake-title">
            <p className="uf-eyebrow">03 / Point of contact</p>
            <h2 id="uf-intake-title" tabIndex={-1} ref={titleRef}>How May We<br/><em>Reach You?</em></h2>
            <p className="uf-intake-intro">Only your contact details and basic production preferences are required. This does not create a client portal account.</p>
            <div className="uf-intake-fields">
              <div><label htmlFor="uf-intake-first">First name *</label><input id="uf-intake-first" name="firstName" autoComplete="given-name" maxLength={100} value={values.firstName} onChange={e => change("firstName", e.target.value)} required /></div>
              <div><label htmlFor="uf-intake-last">Last name *</label><input id="uf-intake-last" name="lastName" autoComplete="family-name" maxLength={100} value={values.lastName} onChange={e => change("lastName", e.target.value)} required /></div>
              <div><label htmlFor="uf-intake-email">Email address *</label><input id="uf-intake-email" name="email" type="email" autoComplete="email" maxLength={254} value={values.email} onChange={e => change("email", e.target.value)} required /></div>
              <div><label htmlFor="uf-intake-org">Organization or firm (optional)</label><input id="uf-intake-org" name="company" autoComplete="organization" maxLength={160} value={values.organization} onChange={e => change("organization", e.target.value)} /></div>
              <div><label htmlFor="uf-intake-phone">Phone number (optional unless preferred)</label><input id="uf-intake-phone" type="tel" name="phone" autoComplete="tel" maxLength={40} value={values.phone} onChange={e => change("phone", e.target.value)} /></div>
              <div><label htmlFor="uf-intake-reply">Preferred reply method</label><select id="uf-intake-reply" name="replyPreference" value={values.replyMethod} onChange={e => change("replyMethod", e.target.value as FormValues["replyMethod"])}>
                <option value="email">Email</option><option value="phone">Phone</option>
              </select></div>
            </div>
            <div className="uf-intake-consents">
              <label><input type="checkbox" checked={values.scopeAcknowledged} onChange={e => change("scopeAcknowledged", e.target.checked)} />
                <span>I understand this is an initial non-confidential inquiry and will not provide legal documents, client identities, case facts, or privileged material here. *</span>
              </label>
              <label><input type="checkbox" checked={values.contactConsent} onChange={e => change("contactConsent", e.target.checked)} />
                <span>Unbundled Finch may contact me about this request. *</span>
              </label>
              <p className="uf-intake-field-help">This form is submitted through Formspree, a third-party form processor. See our <Link href="/privacy">Privacy Policy</Link>. We provide technical document production, not legal advice or representation.</p>
            </div>
          </section>
        )}

        {step === 3 && (
          <section aria-labelledby="uf-intake-title">
            <p className="uf-eyebrow">04 / Review before sending</p>
            <h2 id="uf-intake-title" tabIndex={-1} ref={titleRef}>Confirm The<br/><em>Essentials.</em></h2>
            <p className="uf-intake-intro">These details help us respond to your project inquiry. No files have been uploaded and no production work has been authorized.</p>
            <dl className="uf-intake-review">
              <div><dt>Primary service</dt><dd>{labelService(values.service)}</dd></div>
              <div><dt>Approximate volume</dt><dd>{volumeLabels[values.fileVolume]}</dd></div>
              <div><dt>Requested output</dt><dd>{outputLabels[values.output]}</dd></div>
              <div><dt>Requested timeframe</dt><dd>{timingLabels[values.timing]}{values.timing === "date" ? " — " + values.targetDate : ""}</dd></div>
              <div><dt>Contact</dt><dd>{values.firstName} {values.lastName} · {values.email}</dd></div>
              <div><dt>Reply by</dt><dd>{values.replyMethod === "email" ? "Email" : "Phone"}</dd></div>
              {values.notes.trim() && <div><dt>Technical overview</dt><dd className="uf-intake-review-notes">{values.notes}</dd></div>}
            </dl>
            <p className="uf-intake-safety-note">Sending this inquiry does not establish a client relationship, authorize legal work, or guarantee a requested deadline. Confidential materials will be requested only after an appropriate transfer method is agreed.</p>
          </section>
        )}
      </div>

      {error && <p className="uf-register-error" role="alert">{error}</p>}
      <div className="uf-intake-actions">
        {step > 0 ? <button type="button" className="uf-button" disabled={submitting} onClick={back}>Back <span aria-hidden="true">←</span></button> : <span className="uf-intake-action-note">No account or file upload required.</span>}
        {step < 3 ? (
          <button type="button" className="uf-button uf-button-dark" disabled={!canAdvance} onClick={advance}>Continue <span aria-hidden="true">→</span></button>
        ) : (
          <button type="submit" className="uf-button uf-button-dark" disabled={submitting || !allValid}>
            {submitting ? "Sending…" : "Send project inquiry"} <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </form>
  );
}
