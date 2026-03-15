import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
export default function PortalLayout({ children }) {
    const [location] = useLocation();
    const { user, logout } = useAuth();
    const navItems = [
        { href: "/portal/dashboard", label: "Dashboard" },
        { href: "/portal/new-request", label: "New Request" },
        { href: "/portal/documents", label: "Documents" },
        { href: "/portal/messages", label: "Messages" },
        { href: "/portal/billing", label: "Billing" },
        { href: "/portal/settings", label: "Settings" },
    ];
    // Get user initials
    const getInitials = () => {
        if (!user?.user_metadata?.full_name)
            return "UF";
        const names = user.user_metadata.full_name.split(" ");
        if (names.length >= 2) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return names[0][0].toUpperCase();
    };
    return (_jsx("div", { className: "min-h-screen bg-secondary/10 font-sans text-foreground flex flex-col", children: _jsxs("div", { className: "flex flex-1", children: [_jsxs("aside", { className: "w-64 bg-background border-r border-border hidden md:flex flex-col", children: [_jsx("div", { className: "p-6 border-b border-border", children: _jsx(Link, { href: "/", children: _jsx("div", { className: "flex items-center gap-2 cursor-pointer", children: _jsx("img", { src: "/assets/logo.svg", alt: "Unbundled Finch", className: "h-6 w-auto" }) }) }) }), _jsx("nav", { className: "flex-1 p-4 space-y-1", children: navItems.map((item) => (_jsx(Link, { href: item.href, children: _jsx("div", { className: cn("px-4 py-3 text-sm font-medium cursor-pointer transition-colors border-l-2", location === item.href
                                        ? "bg-secondary/50 border-primary text-primary"
                                        : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"), children: item.label }) }, item.href))) }), _jsxs("div", { className: "p-4 border-t border-border", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: "w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs", children: getInitials() }), _jsxs("div", { className: "text-sm overflow-hidden", children: [_jsx("div", { className: "font-bold truncate", children: user?.user_metadata?.full_name || "User" }), _jsx("div", { className: "text-xs text-muted-foreground truncate", children: user?.email })] })] }), _jsx(Button, { variant: "outline", className: "w-full rounded-none text-xs uppercase font-bold", onClick: logout, children: "Sign Out" })] })] }), _jsx("main", { className: "flex-1 p-8 overflow-y-auto", children: children })] }) }));
}
