import { Link } from "wouter";

/**
 * Legacy portal work-order route is no longer mounted. Keep a safe
 * informational component in case the prototype is reviewed separately.
 * No direct Formspree upload or customer-data submission is performed here.
 */
export default function NewRequest() {
  return <section className="max-w-3xl mx-auto space-y-6">
    <h1 className="text-3xl font-semibold">Work-order intake has moved</h1>
    <p>The earlier change-order template has been retired. Project inquiries now use a guided, non-confidential production form.</p>
    <p>No source documents should be uploaded until a secure transfer method is arranged.</p>
    <Link href="/portal" className="underline underline-offset-4">Open the production inquiry</Link>
  </section>;
}
