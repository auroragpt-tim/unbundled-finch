import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-black selection:text-white">
      {/* Top Navigation Bar - Fixed Height, Border Bottom */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container h-full flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src="/assets/logo.svg" 
                alt="Unbundled Finch" 
                className="h-8 w-auto group-hover:opacity-80 transition-opacity" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={cn(
                    "text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors cursor-pointer",
                    location === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Portal Login Button */}
            <div className="ml-4 pl-4 border-l border-border">
              <Link href="/portal">
                <span className="text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors cursor-pointer">
                  Client Portal
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle (Placeholder) */}
          <div className="md:hidden">
            <Link href="/portal">
              <span className="text-xs font-bold uppercase border border-primary px-2 py-1">
                Portal
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area - Pt-16 to offset fixed header */}
      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer - Swiss Grid Style */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img src="/assets/logo.svg" alt="Unbundled Finch" className="h-6 w-auto mb-4 opacity-80" />
            <p className="text-sm text-muted-foreground">
              Legal document processing services.<br/>
              Precise. Neutral. Efficient.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navItems.map(item => (
                <li key={item.href}><Link href={item.href}><span className="hover:text-primary cursor-pointer">{item.label}</span></Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-pointer hover:text-primary">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-primary">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-primary">Disclaimer</span></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              vanguard@unbundledfinch.com
            </p>

          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Unbundled Finch. All rights reserved.</p>
          <p>Swiss Design System</p>
        </div>
      </footer>
    </div>
  );
}
