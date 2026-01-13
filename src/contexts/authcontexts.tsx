import { createContext, useContext, useEffect, useState } from "react";

// Define the shape of the Netlify Identity User object
interface User {
  id: string;
  email: string;
  user_metadata: {
    full_name?: string;
    [key: string]: any;
  };
  app_metadata: {
    roles?: string[];
    [key: string]: any;
  };
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Netlify Identity
    const netlifyIdentity = (window as any).netlifyIdentity;

    if (netlifyIdentity) {
      netlifyIdentity.init();

      // Set initial user
      const currentUser = netlifyIdentity.currentUser();
      setUser(currentUser);
      setIsLoading(false);

      // Event listeners
      netlifyIdentity.on("login", (user: User) => {
        setUser(user);
        netlifyIdentity.close();
      });

      netlifyIdentity.on("logout", () => {
        setUser(null);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.open("login");
    }
  };

  const logout = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.logout();
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
