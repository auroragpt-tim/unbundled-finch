// src/App.tsx
import React from "react";

console.log("UF App.tsx loaded A1");

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
      UF Build Marker: 2026-01-15 A1
    </div>
  );
}

export default function App() {
  return (
    <>
      <div style={{ padding: 20, fontFamily: "monospace" }}>
        <h1 style={{ margin: "0 0 12px" }}>UF APP LOADED (A1)</h1>
        <p style={{ margin: 0 }}>
          If you can see this, the crash is inside your routes/layout/components
          (not Netlify).
        </p>
      </div>

      <BuildMarker />
    </>
  );
}