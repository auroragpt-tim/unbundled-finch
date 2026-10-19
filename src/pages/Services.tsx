import { Link } from "wouter";

const services = [
  {n:"01", name:"PDF assembly & sequencing",desc:"Combine client-supplied files, arrange them in the instructed order, and prepare a coherent electronic record."},
  {n:"02", name:"eBinder architecture",desc:"Build hierarchical bookmarks, document sections, and structured navigation so lengthy files are easier to use."},
  {n:"03", name:"Exhibit & internal hyperlinking",desc:"Connect references, exhibit lists, and binder sections to their intended destinations within the finished PDF."},
  {n:"04", name:"OCR & searchable text",desc:"Apply optical character recognition to suitable scanned documents and check the searchability of the resulting files."},
  {n:"05", name:"Pagination, Bates & indexing",desc:"Apply client-directed page labels, Bates numbers, file naming conventions, and document indexes."},
  {n:"06", name:"Table of Authorities production",desc:"Mark and organize cited authorities in client-provided briefs, generate the table, and verify its technical operation and page references."},
  {n:"07", name:"Technical formatting",desc:"Implement client-specified production formatting without rewriting legal arguments or changing substantive wording."},
  {n:"08", name:"Optimization & production QC",desc:"Optimize file size where practical and check bookmarks, hyperlinks, pagination, file sequence, and other agreed technical specifications."}
];
export default function Services() {
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">01 / Services</p><h1>Legal-document<br/><em>production, unbundled.</em></h1>
      <p className="uf-lede">Extract. Organize. Deliver. Select the technical assistance your project requires, guided by the source materials, specifications, and instructions you provide.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell">
      <div className="uf-services-grid">{services.map(s=><article className="uf-service-card" key={s.n}>
        <span className="uf-eyebrow">{s.n} / PRODUCTION SERVICE</span><h2>{s.name}</h2><p>{s.desc}</p>
      </article>)}</div>
    </div></section>
    <section className="uf-statement"><div className="uf-shell uf-statement-grid">
      <p className="uf-eyebrow">An important distinction</p>
      <div><h2>We build the structure.<br/><em>You control the substance.</em></h2>
      <p>We do not provide legal advice, select legal arguments, independently correct client wording, or perform substantive proofreading. When clarification is needed, we preserve the source and request instructions.</p>
      <Link href="/about" className="uf-text-link">Read about non-intervention <span aria-hidden="true">→</span></Link></div>
    </div></section>
    <section className="uf-final-cta"><div className="uf-shell uf-cta-inner">
      <div><p className="uf-eyebrow">Tailored to the task</p><h2>Need a specific<br/>production workflow?</h2></div>
      <Link href="/contact" className="uf-button uf-button-dark">Request a project quote <span aria-hidden="true">↗</span></Link>
    </div></section>
  </div>
}
