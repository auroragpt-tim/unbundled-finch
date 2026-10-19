import { Link } from "wouter";

const featured = [
  { index: "01", title: "Precision", text: "Document architecture that follows your supplied requirements, with careful attention to navigation, formatting, and technical details." },
  { index: "02", title: "Neutrality", text: "Your content remains yours. We preserve client-provided language and ask for direction instead of making substantive changes." },
  { index: "03", title: "Efficiency", text: "Usable, searchable, organized files designed to help legal readers move through complex records with less friction." }
];
const services = [
  { name: "Table of Authorities", detail: "Marking, organizing, generating, and updating authorities supplied in a brief." },
  { name: "eBinder assembly", detail: "Sequenced documents, hierarchical bookmarks, and internal navigation." },
  { name: "Exhibit hyperlinking", detail: "Internal links that help readers find cited exhibits and sections." },
  { name: "PDF production", detail: "OCR, Bates numbering, page labels, indexing, and optimization." }
];
export default function Home() {
  return (
    <div className="uf-site">
      <section className="uf-hero">
        <div className="uf-shell uf-hero-grid">
          <div className="uf-hero-copy">
            <p className="uf-eyebrow uf-hero-eyebrow"><span className="uf-eyebrow-line" /> Legal document production &amp; litigation support</p>
            <h1>We unbundle the<br/><em>complexity</em> of<br/>legal documents.</h1>
            <p className="uf-lede">Clearer structure. Better navigation. Carefully prepared documents—without changing the substance of what you wrote.</p>
            <div className="uf-button-row">
              <Link href="/services" className="uf-button uf-button-dark">Explore services <span aria-hidden="true">↗</span></Link>
              <Link href="/contact" className="uf-button">Discuss a project <span aria-hidden="true">→</span></Link>
            </div>
            <p className="uf-hero-small">Extract. Organize. Deliver.</p>
          </div>
          <div className="uf-hero-art" aria-hidden="true">
            <div className="uf-art-index">UF / 01 <span>CLARITY THROUGH STRUCTURE</span></div>
            <div className="uf-art-center">
              <img src="/assets/finch-mark.svg" alt="" />
              <span className="uf-art-word">UNBUNDLED<br/>FINCH</span>
            </div>
            <div className="uf-art-line"><span /></div>
            <div className="uf-art-note">PRESERVE THE CONTENT.<br/>REFINE THE CONTAINER.</div>
          </div>
        </div>
      </section>
      <section className="uf-values uf-section-line">
        <div className="uf-shell uf-values-grid">
          {featured.map((item) => <article key={item.index} className="uf-value">
            <span className="uf-eyebrow">{item.index} / OUR PRINCIPLES</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>)}
        </div>
      </section>
      <section className="uf-section">
        <div className="uf-shell">
          <div className="uf-section-heading">
            <div><p className="uf-eyebrow">What we do</p><h2>Structure that<br/><em>serves the reader.</em></h2></div>
            <p>Technical production for briefs, records, exhibits, and other client-provided legal materials. We work to your instructions—not independently on legal substance.</p>
          </div>
          <div className="uf-service-list">
            {services.map((s,i) => <Link key={s.name} href="/services" className="uf-service-row">
              <span className="uf-service-num">0{i+1}</span>
              <span className="uf-service-name">{s.name}</span>
              <span className="uf-service-detail">{s.detail}</span>
              <span className="uf-service-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <div className="uf-section-link"><Link href="/services">View all production services <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <section className="uf-statement">
        <div className="uf-shell uf-statement-grid">
          <p className="uf-eyebrow">Our core principle</p>
          <div><blockquote>You write it.<br/>We preserve it.</blockquote>
          <p>If something is unclear, we ask rather than guess. You make the substantive decisions. We make the technical document work.</p>
          <Link href="/about" className="uf-text-link">Learn about our approach <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="uf-final-cta">
        <div className="uf-shell uf-cta-inner">
          <div><p className="uf-eyebrow">Start a conversation</p><h2>Complex material.<br/>Clearer presentation.</h2></div>
          <Link href="/contact" className="uf-button uf-button-dark">Discuss your project <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
