import ProductionInquiryForm from "@/components/ProductionInquiryForm";

export default function Contact() {
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">05 / Contact</p>
      <h1>Tell Us What<br/><em>You Need Organized.</em></h1>
      <p className="uf-lede">Describe the technical production you need without sharing case details or files. We'll discuss scope, specifications and next steps.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell uf-intake-layout">
      <ProductionInquiryForm source="contact" />
      <aside className="uf-intake-aside">
        <p className="uf-eyebrow">Production first</p>
        <h2>Clarity Starts<br/><em>With A Conversation.</em></h2>
        <p>For eBinders, Tables of Authorities, OCR, bookmarks, hyperlinks and other document-production tasks, this form helps us understand the essentials before requesting any source material.</p>
        <div className="uf-aside-rule" />
        <p className="uf-eyebrow">Direct contact</p>
        <a className="uf-text-link" href="mailto:atticus@unbundledfinch.com">atticus@unbundledfinch.com <span aria-hidden="true">↗</span></a>
        <div className="uf-aside-rule" />
        <p className="uf-small-note">Unbundled Finch provides technical legal-document production only—not legal advice or representation. This form does not establish attorney-client privilege.</p>
      </aside>
    </div></section>
  </div>;
}
