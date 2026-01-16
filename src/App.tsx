import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import PortalLayout from "./components/PortalLayout";
import { ThemeProvider } from "./contexts/ThemeContext";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Portal Pages
import Login from "./pages/portal/Login";
import Dashboard from "./pages/portal/Dashboard";
import NewRequest from "./pages/portal/NewRequest";
import Documents from "./pages/portal/Documents";
import Messages from "./pages/portal/Messages";
import Billing from "./pages/portal/Billing";
import Settings from "./pages/portal/Settings";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/">
        <Layout><Home /></Layout>
      </Route>
      <Route path="/services">
        <Layout><Services /></Layout>
      </Route>
      <Route path="/process">
        <Layout><Process /></Layout>
      </Route>
      <Route path="/pricing">
        <Layout><Pricing /></Layout>
      </Route>
      <Route path="/about">
        <Layout><About /></Layout>
      </Route>
      <Route path="/contact">
        <Layout><Contact /></Layout>
      </Route>

      {/* Portal Routes */}
      <Route path="/portal">
        <Login />
      </Route>
      <Route path="/portal/dashboard">
        <PortalLayout><Dashboard /></PortalLayout>
      </Route>
      <Route path="/portal/new-request">
        <PortalLayout><NewRequest /></PortalLayout>
      </Route>
      <Route path="/portal/documents">
        <PortalLayout><Documents /></PortalLayout>
      </Route>
      <Route path="/portal/messages">
        <PortalLayout><Messages /></PortalLayout>
      </Route>
      <Route path="/portal/billing">
        <PortalLayout><Billing /></PortalLayout>
      </Route>
      <Route path="/portal/settings">
        <PortalLayout><Settings /></PortalLayout>
      </Route>

      {/* 404 */}
      <Route>
        <Layout><NotFound /></Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
