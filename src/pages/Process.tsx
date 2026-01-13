import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Process() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">PROCESS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            A transparent, secure workflow designed for reliability.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <span className="text-6xl font-bold text-border">01</span>
            </div>
            <div className="md:col-span-10 pt-4">
              <h3 className="text-2xl font-bold uppercase mb-4">Account Creation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Register for a secure account on our Client Portal. We verify all accounts to ensure the integrity of our platform. Once approved, you will gain access to the dashboard.
              </p>

            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <span className="text-6xl font-bold text-border">02</span>
            </div>
            <div className="md:col-span-10 pt-4">
              <h3 className="text-2xl font-bold uppercase mb-4">Submit Request</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the "New Request" form in the portal to describe your needs. Select the service type, provide instructions, and set your deadline.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <span className="text-6xl font-bold text-border">03</span>
            </div>
            <div className="md:col-span-10 pt-4">
              <h3 className="text-2xl font-bold uppercase mb-4">Secure Upload</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upload your source documents via our encrypted transfer system. We support PDF, Word, and Excel formats.
              </p>

            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <span className="text-6xl font-bold text-border">04</span>
            </div>
            <div className="md:col-span-10 pt-4">
              <h3 className="text-2xl font-bold uppercase mb-4">Processing & Delivery</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team processes your documents according to your specifications. You will receive a notification when the work is complete. Final files are available for download directly from the portal.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 border-t border-border bg-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold uppercase mb-8">Ready to start?</h2>
          <Link href="/portal">
            <Button size="lg" className="rounded-none px-12 h-14 uppercase font-bold tracking-wider">
              Go to Portal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
