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
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/10">
        <div className="animate-pulse text-sm font-bold uppercase tracking-widest">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/10 p-4">
      <div className="mb-8">
        <Link href="/">
          <img src="/assets/logo.svg" alt="Unbundled Finch" className="h-8 w-auto cursor-pointer" />
        </Link>
      </div>
      
      <Card className="w-full max-w-md rounded-none border-border shadow-none">
        <CardHeader className="border-b border-border bg-background text-center py-8">
          <CardTitle className="uppercase tracking-widest text-lg">Client Portal Access</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            <p className="text-center text-muted-foreground text-sm">
              Please sign in to access your dashboard, documents, and messages.
            </p>
            
            <Button 
              onClick={login} 
              className="w-full rounded-none uppercase font-bold tracking-wider h-12"
            >
              Sign In / Register
            </Button>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Having trouble? <a href="mailto:Vanguard@unbundledfinch.com" className="text-primary font-bold cursor-pointer hover:underline">Contact Support</a></p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
