import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 8,
  display: "block",
  fontSize: 14,
  fontWeight: isActive ? 700 : 500,
  background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
});

export default function PortalLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 18 }}>
      <aside
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 12,
          padding: 12,
          height: "fit-content",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 10 }}>Client Portal</div>

        <nav style={{ display: "grid", gap: 6 }}>
          <NavLink to="/portal" end style={linkStyle}>
            Overview
          </NavLink>

          <NavLink to="/portal/upload" style={linkStyle}>
            Upload
          </NavLink>

          <NavLink to="/portal/jobs" style={linkStyle}>
            Jobs
          </NavLink>

          <NavLink to="/portal/settings" style={linkStyle}>
            Settings
          </NavLink>
        </nav>

        <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7, lineHeight: 1.35 }}>
          This is a demo portal UI (no real document storage yet).
        </div>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
}