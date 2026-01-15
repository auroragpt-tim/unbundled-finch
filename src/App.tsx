// src/App.tsx
import React from "react";
import { Route, Switch, Link } from "wouter";

console.log("UF App.tsx loaded A2 (wouter)");

function BuildMarker() {
  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 999999,
        padding: "10px 14px",
        borderRadius: 9999,
        background: "rgba(0,0,0,0.85)",
        color: "white",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        fontSize: 14,
        lineHeight: 1,
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        userSelect: "none",
      }}
    >
      UF Build Marker: 2026-01-15 A2 (wouter)
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Unbundled Finch</h1>
      <p>Legal document processing</p>

      <nav style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portal">Portal</Link>
      </nav>
    </div>
  );
}

function SimplePage({ title }: { title: string }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>{title}</h1>
      <p>This page exists.</p>
      <p>
        <Link href="/">← Go Home</Link>
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <p>
        <Link href="/">← Go Home</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about">
          <SimplePage title="About" />
        </Route>
        <Route path="/contact">
          <SimplePage title="Contact" />
        </Route>
        <Route path="/portal">
          <SimplePage title="Portal (placeholder)" />
        </Route>

        {/* Catch-all */}
        <Route component={NotFound} />
      </Switch>

      <BuildMarker />
    </>
  );
}