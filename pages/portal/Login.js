import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
export default function Login() {
    const [, setLocation] = useLocation();
    const { user, login, isLoading } = useAuth();
    useEffect(() => {
        if (user) {
            setLocation("/portal/new-request");
        }
    }, [user, setLocation]);
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-secondary/10", children: _jsx("div", { className: "animate-pulse text-sm font-bold uppercase tracking-widest", children: "Loading..." }) }));
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-secondary/10 p-4", children: [_jsx("div", { className: "mb-8", children: _jsx(Link, { href: "/", children: _jsx("img", { src: "/assets/logo.svg", alt: "Unbundled Finch", className: "h-8 w-auto cursor-pointer" }) }) }), _jsxs(Card, { className: "w-full max-w-md rounded-none border-border shadow-none", children: [_jsx(CardHeader, { className: "border-b border-border bg-background text-center py-8", children: _jsx(CardTitle, { className: "uppercase tracking-widest text-lg", children: "Client Portal Access" }) }), _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("p", { className: "text-center text-muted-foreground text-sm", children: "Please sign in to access your dashboard, documents, and messages." }), _jsx(Button, { onClick: login, className: "w-full rounded-none uppercase font-bold tracking-wider h-12", children: "Sign In / Register" })] }), _jsx("div", { className: "mt-6 text-center text-sm text-muted-foreground", children: _jsxs("p", { children: ["Having trouble? ", _jsx("a", { href: "mailto:Vanguard@unbundledfinch.com", className: "text-primary font-bold cursor-pointer hover:underline", children: "Contact Support" })] }) })] })] })] }));
}
