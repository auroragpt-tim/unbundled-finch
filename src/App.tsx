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

console.log("UF App.tsx loaded — Wouter routing active");

export default function App() {
  return (
    <Layout>
      <Switch>
        {/* Public marketing pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />

        {/* Auth */}
        <Route path="/portal/login" component={Login} />

        {/* Portal (protected) */}
        <Route path="/portal">
          <ProtectedRoute>
            <PortalLayout>
              <Switch>
                <Route path="/portal" component={Dashboard} />
                <Route path="/portal/documents" component={Documents} />
                <Route path="/portal/billing" component={Billing} />
                <Route path="/portal/messages" component={Messages} />
                <Route path="/portal/settings" component={Settings} />
                <Route path="/portal/new" component={NewRequest} />
                <Route component={NotFound} />
              </Switch>
            </PortalLayout>
          </ProtectedRoute>
        </Route>

        {/* Catch-all */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}