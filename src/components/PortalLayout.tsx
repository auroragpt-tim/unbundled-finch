// src/components/PortalLayout.tsx
import React from "react";
import { Link, useLocation } from "wouter";

function PortalNavLink({
  href,
  children,
  end = false,
}: {
  href: string;
  children: React.ReactNode;
  end?: boolean;
}) {
  const [location] = useLocation();

  const isActive = end ? location === href : location === href || location.startsWith(href + "/");

  const style: React.CSSProperties = {
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 8,
    display: "block",
    fontSize: 14,
    fontWeight: isActive ? 700 : 500,
    background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
    color: "inherit",
  };

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
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
          <PortalNavLink href="/portal" end>
            Overview
          </PortalNavLink>
          <PortalNavLink href="/portal/upload">Upload</PortalNavLink>
          <PortalNavLink href="/portal/jobs">Jobs</PortalNavLink>
          <PortalNavLink href="/portal/settings">Settings</PortalNavLink>
        </nav>

        <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7, lineHeight: 1.35 }}>
          This is a demo portal UI (no real document storage yet).
        </div>
      </aside>

      <section>{children}</section>
   
    </div>
  );
}