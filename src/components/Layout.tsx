import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
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
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
          <Link to="/services" style={{ textDecoration: "none" }}>Services</Link>
          <Link to="/portal" style={{ textDecoration: "none" }}>Portal</Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link>
        </nav>
      </header>

      <main style={{ flex: 1, padding: "18px 20px" }}>
        <Outlet />
      </main>

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