import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Initialize Netlify Identity
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.init();
            // Set initial user
            const currentUser = netlifyIdentity.currentUser();
            setUser(currentUser);
            setIsLoading(false);
            // Event listeners
            netlifyIdentity.on("login", (user) => {
                setUser(user);
                netlifyIdentity.close();
            });
            netlifyIdentity.on("logout", () => {
                setUser(null);
            });
        }
        else {
            setIsLoading(false);
        }
    }, []);
    const login = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.open("login");
        }
    };
    const logout = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.logout();
        }
    };
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, isLoading }, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
