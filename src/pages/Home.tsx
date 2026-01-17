import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Asymmetric Grid */}
      <section className="w-full border-b border-border">
        <div className="container grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">
          {/* Left Content - 7 cols */}
          <div className="md:col-span-7 flex flex-col justify-center py-20 md:pr-12">
            <div className="mb-8 w-16 h-1 bg-primary"></div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-8">
              LEGAL<br/>
              DOCUMENT<br/>
              PROCESSING
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mb-12 font-light">
              Unbundled Finch provides precise, neutral, and efficient document services for legal professionals and individuals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button size="lg" className="rounded-none text-base px-8 h-14 uppercase tracking-wider font-bold">
                  Explore Services
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="outline" size="lg" className="rounded-none text-base px-8 h-14 uppercase tracking-wider font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Image - 5 cols */}
          <div className="md:col-span-5 relative h-64 md:h-auto border-l border-border bg-secondary/20 overflow-hidden">
            <img 
              src="/images/hero-abstract-grid.jpg" 
              alt="Abstract Swiss Grid" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 bg-background p-4 border-t border-r border-border">
              <p className="font-mono text-xs">FIG. 01 — STRUCTURE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - 3 Column Grid */}
      <section className="w-full border-b border-border py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-wide">Precision</h3>
              <div className="w-8 h-0.5 bg-border"></div>
              <p className="text-muted-foreground leading-relaxed">
                Every document is processed with mathematical accuracy. We adhere to strict formatting standards and legal requirements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-wide">Neutrality</h3>
              <div className="w-8 h-0.5 bg-border"></div>
              <p className="text-muted-foreground leading-relaxed">
                Our services are objective and unbiased. We focus purely on the structural integrity and correctness of your documentation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-wide">Efficiency</h3>
              <div className="w-8 h-0.5 bg-border"></div>
              <p className="text-muted-foreground leading-relaxed">
                Streamlined workflows and a dedicated client portal ensure that your requests are handled with maximum speed and minimal friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Split Layout */}
      <section className="w-full border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-96 md:h-auto border-b md:border-b-0 md:border-r border-border overflow-hidden group">
             <img 
              src="/images/office-minimal.jpg" 
              alt="Minimal Office" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-secondary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">THE PROCESS</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We have unbundled the traditional legal support model. You pay only for the specific document processing tasks you need, when you need them.
            </p>
            <ul className="space-y-4 mb-10 font-mono text-sm">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center border border-primary text-primary rounded-full text-xs">1</span>
                <span>Submit Request via Portal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center border border-primary text-primary rounded-full text-xs">2</span>
                <span>Secure Document Upload</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center border border-primary text-primary rounded-full text-xs">3</span>
                <span>Processing & Review</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center border border-primary text-primary rounded-full text-xs">4</span>
                <span>Final Delivery</span>
              </li>
            </ul>
            <Link href="/process">
              <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-wider hover:no-underline hover:opacity-70 justify-start">
                Learn more about our process &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight">READY TO BEGIN?</h2>
          <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto font-light">
            Access our secure client portal to start your first request.
          </p>
          <Link href="/portal">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none h-16 px-12 text-lg font-bold uppercase tracking-widest">
              Access Portal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
