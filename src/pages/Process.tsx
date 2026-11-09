import { Link } from "wouter";

const steps=[
  {n:"01",name:"Define The Production Task",detail:"Tell us which technical outputs you need, which files are involved, and any applicable client-specified formatting or navigation requirements."},
  {n:"02",name:"Supply Finalized Source Material",detail:"Provide the intended content and confirm the source text, exhibits, sequence, names, dates, and citations are acceptable for technical processing."},
  {n:"03",name:"Build, Then Check",detail:"We perform the authorized technical tasks and check items such as document order, bookmarks, internal links, page labels, and file functionality."},
  {n:"04",name:"Review And Direct Revisions",detail:"You review the deliverables. If content or production choices need adjustment, you provide exact instructions. We correct our own production errors without charge."}
];
export default function Process(){
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">02 / Process</p><h1>Careful Work.<br/><em>Clear Boundaries.</em></h1>
      <p className="uf-lede">Extract. Organize. Deliver. The production workflow protects original authorship and keeps editorial or legal decisions with the client.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell">
      <div className="uf-process-steps">{steps.map(s=><article className="uf-process-step" key={s.n}>
        <span className="uf-step-number">{s.n}</span><h2>{s.name}</h2><p>{s.detail}</p>
      </article>)}</div>
    </div></section>
    <section className="uf-statement"><div className="uf-shell uf-statement-grid">
      <p className="uf-eyebrow">Preserve &amp; escalate</p>
      <div><h2>When In Doubt,<br/><em>We Ask.</em></h2>
      <p>If something is incomplete, inconsistent, unreadable, or ambiguous, we may pause the affected work and seek your direction rather than guess or make a substantive edit.</p>
      <p>Standard projects include two complimentary client-directed production revision rounds. Corrections of our own production errors do not use those rounds. Material scope changes may require a revised quote.</p>
      <Link href="/contact" className="uf-text-link">Discuss your workflow <span aria-hidden="true">→</span></Link></div>
    </div></section>
  </div>;
}
