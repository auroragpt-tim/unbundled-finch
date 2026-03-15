import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">ABOUT</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Unbundled Finch is built on the principles of precision, neutrality, and efficiency.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">We believe legal support should be precise and accessible.</strong> Traditional legal support models are often bloated, opaque, and expensive. We unbundle these services, offering specific, high-quality document processing tasks on demand.
            </p>
            <p>
              Our team consists of experienced legal document specialists who understand the importance of formatting, accuracy, and deadlines. We treat every document with the same level of care and confidentiality as a top-tier law firm.
            </p>
            <p>
              The "Swiss Style" of our brand reflects our operational philosophy: clarity, objectivity, and a rejection of unnecessary ornamentation. We focus on the content and the structure, ensuring your documents stand on their own merit.
            </p>
          </div>
          <div className="bg-secondary/20 p-8 border border-border">
            <h3 className="text-xl font-bold uppercase mb-6">Trust & Policies</h3>
            <ul className="space-y-4 text-sm">
              <li className="border-b border-border pb-4">
                <strong className="block mb-1">Confidentiality</strong>
                All documents are treated as strictly confidential. We use industry-standard encryption for data in transit and at rest.
              </li>
              <li className="border-b border-border pb-4">
                <strong className="block mb-1">Conflict of Interest</strong>
                As a neutral processing service, we do not provide legal advice or representation. We maintain strict neutrality in all engagements.
              </li>
              <li>
                <strong className="block mb-1">Data Retention</strong>
                We retain documents only as long as necessary to complete the requested service, after which they are securely deleted from our systems.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
