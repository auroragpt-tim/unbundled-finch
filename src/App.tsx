// src/App.tsx
import React from "react";
import { Route, Switch } from "wouter";

import Layout from "./components/Layout";
import PortalLayout from "./components/PortalLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Process from "./pages/Process";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Portal pages
import Dashboard from "./pages/portal/Dashboard";
import Login from "./pages/portal/Login";
import Documents from "./pages/portal/Documents";
import Billing from "./pages/portal/Billing";
import Messages from "./pages/portal/Messages";
import Settings from "./pages/portal/Settings";
import NewRequest from "./pages/portal/NewRequest";

console.log("✓ App.tsx loaded — Wouter routing active (SINGLE ROUTER)");

export default function App() {
  return (
    <Switch>
      {/* Public marketing pages - wrapped in Layout */}
      <Route path="/" nest>
        <Layout>
          <Home />
        </Layout>
      </Route>

      <Route path="/about" nest>
        <Layout>
          <About />
        </Layout>
      </Route>

      <Route path="/services" nest>
        <Layout>
          <Services />
        </Layout>
      </Route>

      <Route path="/pricing" nest>
        <Layout>
          <Pricing />
        </Layout>
      </Route>

      <Route path="/process" nest>
        <Layout>
          <Process />
        </Layout>
      </Route>

      <Route path="/contact" nest>
        <Layout>
          <Contact />
        </Layout>
      </Route>

      <Route path="/privacy" nest>
        <Layout>
          <Privacy />
        </Layout>
      </Route>

      <Route path="/terms" nest>
        <Layout>
          <Terms />
        </Layout>
      </Route>

      {/* Auth - Portal Login (public, no protection) */}
      <Route path="/portal/login" nest>
        <Layout>
          <Login />
        </Layout>
      </Route>

      {/* Portal Dashboard (protected) */}
      <Route path="/portal" nest>
        <ProtectedRoute>
          <PortalLayout>
            <Dashboard />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Portal Documents (protected) */}
      <Route path="/portal/documents" nest>
        <ProtectedRoute>
          <PortalLayout>
            <Documents />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Portal Billing (protected) */}
      <Route path="/portal/billing" nest>
        <ProtectedRoute>
          <PortalLayout>
            <Billing />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Portal Messages (protected) */}
      <Route path="/portal/messages" nest>
        <ProtectedRoute>
          <PortalLayout>
            <Messages />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Portal Settings (protected) */}
      <Route path="/portal/settings" nest>
        <ProtectedRoute>
          <PortalLayout>
            <Settings />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Portal New Request (protected) */}
      <Route path="/portal/new" nest>
        <ProtectedRoute>
          <PortalLayout>
            <NewRequest />
          </PortalLayout>
        </ProtectedRoute>
      </Route>

      {/* Catch-all 404 */}
      <Route nest>
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}
