import { Link } from "wouter";

export default function Research() {
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">Projects / Research / Demonstrations</p>
      <h1>Evidence Of Work.<br/><em>Not Just Claims.</em></h1>
      <p className="uf-lede">A collection of public-data projects, applied research, and independently developed technical demonstrations. Projects are identified by their actual status, with methods and limitations documented as work progresses.</p>
    </div></section>

    <section className="uf-section"><div className="uf-shell">
      <div className="uf-section-heading">
        <div><p className="uf-eyebrow">Published project / 01</p><h2>Arizona Judicial<br/><em>Performance Explorer.</em></h2></div>
        <p>Independent interactive visualizations built from publicly available Arizona judicial performance survey information. The project makes a complex public dataset more accessible for exploration; it is not an official judicial evaluation.</p>
      </div>
      <div className="uf-section-link" style={{textAlign:"left", paddingTop:0}}>
        <a href="/judicial-performance/">Explore the published visualization <span aria-hidden="true">↗</span></a>
      </div>
    </div></section>

    <section className="uf-section uf-section-line" style={{borderTop:"1px solid #b9b4ad"}}>
      <div className="uf-shell">
        <div className="uf-section-heading">
          <div><p className="uf-eyebrow">Research directions</p><h2>Projects<br/><em>In Development.</em></h2></div>
          <p>The following are areas of active exploration, not finished products or publicly available services. Independent case studies will be published after development, validation, and documentation.</p>
        </div>
        <div className="uf-services-grid">
          <article className="uf-service-card">
            <span className="uf-eyebrow">02 / PLANNED DEMONSTRATION</span>
            <h2>Workflow Automation</h2>
            <p>Building an independently reproducible example of document intake, structured case tracking, validation rules, and process controls using invented data.</p>
          </article>
          <article className="uf-service-card">
            <span className="uf-eyebrow">03 / PLANNED DEMONSTRATION</span>
            <h2>AI-Assisted Knowledge Systems</h2>
            <p>Exploring retrieval, source-linked responses, and review safeguards for complex document collections with public or synthetic materials.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="uf-final-cta"><div className="uf-shell uf-cta-inner">
      <div><p className="uf-eyebrow">See the approach</p><h2>Research With<br/>Clear Boundaries.</h2></div>
      <Link href="/technologies" className="uf-button uf-button-dark">About Finch Technologies <span aria-hidden="true">↗</span></Link>
    </div></section>
  </div>;
}
