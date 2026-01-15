// src/App.tsx
import React from "react";
import { Route, Switch, Link } from "wouter";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export default function App() {
  console.log("✅ App.tsx loaded (Wouter)");

  return (
    <>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>Unbundled Finch</strong>

        <nav style={{ display: "flex", gap: 12 }}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Routes */}
      <main style={{ padding: 20 }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />

          {/* Catch-all */}
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Build marker */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          left: 16,
          background: "rgba(0,0,0,0.85)",
          color: "white",
          padding: "8px 12px",
          borderRadius: 9999,
          fontSize: 12,
          fontFamily: "monospace",
        }}
      >
        UF Build Marker — Wouter
      </div>
    </>
  );
}