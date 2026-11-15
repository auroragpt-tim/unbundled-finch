import ProductionInquiryForm from "@/components/ProductionInquiryForm";

export default function Registration() {
  return <div className="uf-site">
    <section className="uf-page-intro">
      <div className="uf-shell">
        <p className="uf-eyebrow">Unbundled Finch / Production inquiry</p>
        <h1>Start With<br/><em>The Work You Need.</em></h1>
        <p className="uf-lede">Tell us the technical document-production outcome you're looking for. We'll review the scope together before requesting your files or committing to a turnaround.</p>
      </div>
    </section>
    <section className="uf-section"><div className="uf-shell uf-intake-layout">
      <ProductionInquiryForm source="project" />
      <aside className="uf-intake-aside">
        <p className="uf-eyebrow">How this works</p>
        <h2>Information First.<br/><em>Files Later.</em></h2>
        <p>Our first conversation establishes the technical task: document assembly, navigation, OCR, indexing, formatting, or quality control.</p>
        <div className="uf-aside-rule" />
        <p className="uf-eyebrow">What to expect</p>
        <p>No account is created, no files are uploaded, and no legal information needs to be disclosed through this inquiry.</p>
        <p>When it's time to exchange documents, we'll confirm a suitable transfer process and precise production specifications.</p>
        <div className="uf-aside-rule" />
        <p className="uf-eyebrow">Prefer email?</p>
        <a className="uf-text-link" href="mailto:atticus@unbundledfinch.com">atticus@unbundledfinch.com <span aria-hidden="true">↗</span></a>
      </aside>
    </div></section>
  </div>;
}
