// src/App.tsx
import React from "react";
import { Route, Switch, Redirect } from "wouter";

// Layouts / wrappers
import Layout from "./components/Layout";
import PortalLayout from "./components/PortalLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Portal pages
import PortalLogin from "./pages/portal/Login";
import PortalDashboard from "./pages/portal/Dashboard";
import PortalBilling from "./pages/portal/Billing";
import PortalDocuments from "./pages/portal/Documents";
import PortalMessages from "./pages/portal/Messages";
import PortalNewRequest from "./pages/portal/NewRequest";
import PortalSettings from "./pages/portal/Settings";

/**
 * If you still want the "am I on the newest deploy?" marker,
 * keep it on for one deploy and remove after everything works.
 */
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

/**
 * Helper wrappers so we can use Layout/PortalLayout cleanly with wouter.
 */
function PublicShell({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

function PortalShell({ children }: { children: React.ReactNode }) {
  return <PortalLayout>{children}</PortalLayout>;
}

export default function App() {
  // tiny sanity log
  console.log("UF App.tsx mounted (wouter)");

  return (
    <>
      <Switch>
        {/* ========= Public site ========= */}
        <Route path="/">
          <PublicShell>
            <Home />
          </PublicShell>
        </Route>

        <Route path="/about">
          <PublicShell>
            <About />
          </PublicShell>
        </Route>

        <Route path="/services">
          <PublicShell>
            <Services />
          </PublicShell>
        </Route>

        <Route path="/pricing">
          <PublicShell>
            <Pricing />
          </PublicShell>
        </Route>

        <Route path="/process">
          <PublicShell>
            <Process />
          </PublicShell>
        </Route>

        <Route path="/contact">
          <PublicShell>
            <Contact />
          </PublicShell>
        </Route>

        <Route path="/privacy">
          <PublicShell>
            <Privacy />
          </PublicShell>
        </Route>

        <Route path="/terms">
          <PublicShell>
            <Terms />
          </PublicShell>
        </Route>

        {/* ========= Portal ========= */}
        {/* Common pattern: /portal -> /portal/login */}
        <Route path="/portal">
          <Redirect to="/portal/login" />
        </Route>

        <Route path="/portal/login">
          <PortalShell>
            <PortalLogin />
          </PortalShell>
        </Route>

        {/* Protected routes (assumes ProtectedRoute renders children when allowed) */}
        <Route path="/portal/dashboard">
          <ProtectedRoute>
            <PortalShell>
              <PortalDashboard />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        <Route path="/portal/billing">
          <ProtectedRoute>
            <PortalShell>
              <PortalBilling />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        <Route path="/portal/documents">
          <ProtectedRoute>
            <PortalShell>
              <PortalDocuments />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        <Route path="/portal/messages">
          <ProtectedRoute>
            <PortalShell>
              <PortalMessages />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        <Route path="/portal/new-request">
          <ProtectedRoute>
            <PortalShell>
              <PortalNewRequest />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        <Route path="/portal/settings">
          <ProtectedRoute>
            <PortalShell>
              <PortalSettings />
            </PortalShell>
          </ProtectedRoute>
        </Route>

        {/* ========= Catch-all ========= */}
        <Route>
          <PublicShell>
            <NotFound />
          </PublicShell>
        </Route>
      </Switch>

      <BuildMarker />
    </>
  );
}