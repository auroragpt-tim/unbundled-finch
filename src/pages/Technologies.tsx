import { Link } from "wouter";

const disciplines = [
  {
    n: "01", name: "Workflow engineering",
    desc: "Mapping operational processes, translating requirements into clear rules, and prototyping repeatable steps with validation and human review."
  },
  {
    n: "02", name: "Applied AI & document systems",
    desc: "Investigating document extraction, retrieval, structured knowledge, and AI-assisted review with attention to provenance, limitations, and accuracy."
  },
  {
    n: "03", name: "Data & knowledge architecture",
    desc: "Designing accessible information structures, research tools, visualizations, and systems that make complex material easier to navigate and evaluate."
  }
];

export default function Technologies() {
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">Finch Technologies / Research &amp; development</p>
      <h1>Systems designed<br/><em>for the work behind the work.</em></h1>
      <p className="uf-lede">Finch Technologies is the research and development initiative of Unbundled Finch. Its focus is the engineering of practical workflows, information systems, and applied AI tools for complex administrative and legal-adjacent work.</p>
    </div></section>

    <section className="uf-section"><div className="uf-shell">
      <div className="uf-section-heading">
        <div><p className="uf-eyebrow">Areas of exploration</p><h2>From process<br/><em>to working system.</em></h2></div>
        <p>The emphasis is on the entire workflow: identifying the problem, structuring information, designing safeguards, testing behavior, and documenting what the system actually does.</p>
      </div>
      <div className="uf-services-grid">{disciplines.map(item => <article className="uf-service-card" key={item.n}>
        <span className="uf-eyebrow">{item.n} / RESEARCH DISCIPLINE</span>
        <h2>{item.name}</h2><p>{item.desc}</p>
      </article>)}</div>
    </div></section>

    <section className="uf-statement"><div className="uf-shell uf-statement-grid">
      <p className="uf-eyebrow">Engineering principles</p>
      <div><h2>Automate the routine.<br/><em>Keep judgment accountable.</em></h2>
        <p>Reliable automation requires more than a successful demonstration. It requires defined inputs, clear review responsibilities, error handling, traceability, and realistic testing.</p>
        <p>Research and prototypes are presented as such. They are not represented as deployed client systems, substitutes for professional judgment, or legal advice.</p>
        <Link href="/projects" className="uf-text-link">Explore projects &amp; research <span aria-hidden="true">↗</span></Link>
      </div>
    </div></section>

    <section className="uf-final-cta"><div className="uf-shell uf-cta-inner">
      <div><p className="uf-eyebrow">Unbundled Finch</p><h2>Two disciplines.<br/>One commitment to clarity.</h2></div>
      <Link href="/services" className="uf-button uf-button-dark">Explore Finch Services <span aria-hidden="true">↗</span></Link>
    </div></section>
  </div>;
}
