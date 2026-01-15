// src/components/Layout.tsx
import React from "react";
import { Link } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 700, letterSpacing: 0.4 }}>Unbundled Finch</div>
          <div style={{ opacity: 0.7, fontSize: 13 }}>Legal document processing</div>
        </div>

        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/services" style={{ textDecoration: "none" }}>
            Services
          </Link>
          <Link href="/portal" style={{ textDecoration: "none" }}>
            Portal
          </Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </nav>
      </header>

      <main style={{ flex: 1, padding: "18px 20px" }}>{children}</main>

      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,0.1)",
          padding: "14px 20px",
          fontSize: 12,
          opacity: 0.75,
        }}
      >
        © {new Date().getFullYear()} Unbundled Finch
      </footer>
    </div>
  );
}