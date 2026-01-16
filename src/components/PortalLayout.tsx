import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/portal", label: "Dashboard" },
    { href: "/portal/new-request", label: "New Request" },
    { href: "/portal/documents", label: "Documents" },
    { href: "/portal/messages", label: "Messages" },
    { href: "/portal/billing", label: "Billing" },
    { href: "/portal/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-secondary/10 font-sans text-foreground flex flex-col">


      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r border-border hidden md:flex flex-col">
          <div className="p-6 border-b border-border">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/assets/logo.svg" alt="Unbundled Finch" className="h-6 w-auto" />
              </div>
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div 
                  className={cn(
                    "px-4 py-3 text-sm font-medium cursor-pointer transition-colors border-l-2",
                    location === item.href 
                      ? "bg-secondary/50 border-primary text-primary" 
                      : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                JD
              </div>
              <div className="text-sm">
                <div className="font-bold">Jane Doe</div>
                <div className="text-xs text-muted-foreground">Client Account</div>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-none text-xs uppercase font-bold">Sign Out</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
