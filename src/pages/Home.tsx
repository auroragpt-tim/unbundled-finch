// src/pages/Home.tsx
import React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <h1 style={{ margin: "0 0 10px", fontSize: 28, lineHeight: 1.2 }}>
        Unbundled Finch
      </h1>

      <p style={{ margin: "0 0 16px", fontSize: 16, opacity: 0.85 }}>
        If you can see this text, your <strong>Home route is rendering correctly</strong>.
      </p>

      <div style={{ display: "grid", gap: 10, maxWidth: 520 }}>
        <div style={{ padding: 14, border: "1px solid rgba(0,0,0,0.12)", borderRadius: 12 }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Next checks</div>
          <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9 }}>
            <li>If nav links don’t show, the header nav may be off-screen on mobile.</li>
            <li>If other pages are blank too, we’ll check your route wiring.</li>
            <li>If only Home was blank, your original Home.tsx probably returned nothing.</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/services" style={btnStyle}>Services</Link>
          <Link href="/process" style={btnStyle}>Process</Link>
          <Link href="/contact" style={btnStyle}>Contact</Link>
          <Link href="/portal/login" style={btnStyle}>Portal Login</Link>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.12)",
  textDecoration: "none",
  color: "inherit",
  fontWeight: 600,
};