import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { useEffect } from "react";
export default function ProtectedRoute({ children }) {
    const { user, isLoading } = useAuth();
    const [, setLocation] = useLocation();
    useEffect(() => {
        if (!isLoading && !user) {
            setLocation("/portal");
        }
    }, [user, isLoading, setLocation]);
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-secondary/10", children: _jsx("div", { className: "animate-pulse text-sm font-bold uppercase tracking-widest", children: "Loading..." }) }));
    }
    if (!user) {
        return null;
    }
    return _jsx(_Fragment, { children: children });
}
