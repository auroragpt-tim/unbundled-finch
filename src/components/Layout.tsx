import { useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="uf-public">
      <header className="uf-header">
        <div className="uf-shell uf-header-inner">
          <Link href="/" className="uf-brand" onClick={() => setMobileOpen(false)}>
            <img src="/assets/logo.svg" alt="Unbundled Finch — Home" />
          </Link>
          <button
            className="uf-menu-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="uf-primary-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "Close" : "Menu"} <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          </button>
          <nav id="uf-primary-nav" className={"uf-nav" + (mobileOpen ? " uf-nav-open" : "")} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={"uf-nav-link" + (location === item.href ? " uf-nav-active" : "")}
                onClick={() => setMobileOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/portal" className="uf-portal-link" onClick={() => setMobileOpen(false)}>Client portal <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="uf-footer">
        <div className="uf-shell uf-footer-main">
          <div className="uf-footer-brand">
            <img src="/assets/logo.svg" alt="Unbundled Finch" />
            <p className="uf-footer-motto">Extract. Organize. Deliver.</p>
            <p>Technical document production and litigation support.</p>
          </div>
          <div>
            <span className="uf-eyebrow">Explore</span>
            <Link href="/services">Services</Link>
            <Link href="/process">Our process</Link>
            <Link href="/about">Our approach</Link>
            <Link href="/pricing">Project pricing</Link>
          </div>
          <div>
            <span className="uf-eyebrow">Information</span>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/portal">Client portal</Link>
          </div>
        </div>
        <div className="uf-shell uf-footer-bottom">
          <span>© {new Date().getFullYear()} Unbundled Finch</span>
          <span>Technical services only. No legal advice or representation.</span>
        </div>
      </footer>
    </div>
  );
}
