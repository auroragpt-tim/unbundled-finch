import { Link } from "wouter";
export default function About(){
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">03 / About</p><h1>Clarity, without<br/><em>intervention.</em></h1>
      <p className="uf-lede">Unbundled Finch is a technical legal-document production and litigation-support service with a deliberately defined scope.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell uf-about-grid">
      <div><p className="uf-eyebrow">Our philosophy</p><h2 className="uf-about-quote">“You write it.<br/>We preserve it.”</h2></div>
      <div className="uf-about-copy"><p>Our work is the architecture around your legal content: PDF assembly, navigation, hyperlinks, searchable text, indexing, and quality control. Clear production makes complex records more usable without changing who authored them.</p>
      <p>Source materials remain under the client's substantive control. An apparent typo, citation discrepancy, factual inconsistency, or omission is not permission for us to rewrite it.</p>
      <p>When a question calls for an editorial, factual, strategic, or legal decision, we ask the client for direction. We then carry out the authorized technical instruction.</p></div>
    </div></section>
    <section className="uf-values uf-section-line"><div className="uf-shell uf-values-grid">
      <article className="uf-value"><span className="uf-eyebrow">01 / PRECISION</span><h2>Technical rigor.</h2><p>Careful attention to bookmarks, links, document sequence, labels, and agreed file specifications.</p></article>
      <article className="uf-value"><span className="uf-eyebrow">02 / INTEGRITY</span><h2>Original authorship.</h2><p>Client-supplied substantive content is preserved unless the client specifically authorizes a change.</p></article>
      <article className="uf-value"><span className="uf-eyebrow">03 / CLARITY</span><h2>Transparent roles.</h2><p>We handle technical production. The client handles legal judgment, substantive review, and content accuracy.</p></article>
    </div></section>
    <section className="uf-section"><div className="uf-shell uf-about-grid">
      <div><p className="uf-eyebrow">Professional boundaries</p><h2 className="uf-subhead">Technical support.<br/>Not legal counsel.</h2></div>
      <div className="uf-about-copy"><p>Unbundled Finch is not a law firm. We do not provide legal advice or representation, interpret law, determine filing strategy, or select authorities, claims, or evidence.</p>
      <p>The client is responsible for confirming that submitted content is final, accurate, complete, and appropriate for its intended legal use. Our review is technical production QC, not legal review.</p>
      <p>Client material is treated as confidential production material with reasonable safeguards. Engaging this service does not, by itself, create an attorney-client relationship or attorney-client privilege.</p>
      <Link href="/contact" className="uf-text-link">Contact Unbundled Finch <span aria-hidden="true">↗</span></Link></div>
    </div></section>
  </div>
}
