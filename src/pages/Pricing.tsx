import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">PRICING</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Transparent, flat-rate pricing. No hidden fees.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tier 1 */}
          <div className="border border-border p-8 flex flex-col">
            <h3 className="text-xl font-bold uppercase mb-2">Ad-Hoc</h3>
            <p className="text-sm text-muted-foreground mb-8 h-10">For occasional needs.</p>
            <div className="text-4xl font-bold mb-8">Pay as you go</div>
            <ul className="space-y-4 mb-12 flex-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Standard turnaround (48h)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Secure portal access
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Basic formatting
              </li>
            </ul>
            <Link href="/portal">
              <Button variant="outline" className="w-full rounded-none uppercase font-bold tracking-wider">Get Started</Button>
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-primary p-8 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase">Most Popular</div>
            <h3 className="text-xl font-bold uppercase mb-2">Retainer</h3>
            <p className="text-sm text-muted-foreground mb-8 h-10">For consistent volume.</p>
            <div className="text-4xl font-bold mb-2">$500<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            <p className="text-xs text-muted-foreground mb-6">Includes 10 hours of processing</p>
            <ul className="space-y-4 mb-12 flex-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Priority turnaround (24h)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Dedicated account manager
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Advanced formatting & OCR
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> 10% discount on overage
              </li>
            </ul>
            <Link href="/contact">
              <Button className="w-full rounded-none uppercase font-bold tracking-wider">Contact Sales</Button>
            </Link>
          </div>

          {/* Tier 3 */}
          <div className="border border-border p-8 flex flex-col">
            <h3 className="text-xl font-bold uppercase mb-2">Enterprise</h3>
            <p className="text-sm text-muted-foreground mb-8 h-10">For firms & organizations.</p>
            <div className="text-4xl font-bold mb-8">Custom</div>
            <ul className="space-y-4 mb-12 flex-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Same-day turnaround available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> API Integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> Custom workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span> SLA guarantees
              </li>
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full rounded-none uppercase font-bold tracking-wider">Contact Sales</Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
