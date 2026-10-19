import { Link } from "wouter";
export default function Pricing(){
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">04 / Pricing</p><h1>Defined scope.<br/><em>A clear quote.</em></h1>
      <p className="uf-lede">Production needs vary by file count, condition of the sources, navigation requirements, and the work needed to prepare usable final files.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell uf-about-grid">
      <div><p className="uf-eyebrow">How quoting works</p><h2 className="uf-subhead">Only the work<br/>you need.</h2></div>
      <div className="uf-about-copy"><p>Tell us what you need produced and which materials you have. We'll discuss the requested technical scope, anticipated deliverables, and pricing before the project begins.</p>
      <p>Rather than publish a rate that may not reflect the actual work, quotes are based on the instructions and project requirements provided.</p>
      <p>Each standard project includes two complimentary rounds of client-directed production revisions. If an error is introduced by Unbundled Finch, we correct it without charge. New source materials, major restructuring, or expanded scope may require a revised quote.</p>
      <Link href="/contact" className="uf-button uf-button-dark">Discuss a quote <span aria-hidden="true">↗</span></Link></div>
    </div></section>
  </div>;
}
