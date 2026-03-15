import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import PortalLayout from "./components/PortalLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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
      <Route path="/privacy">
        <Layout><Privacy /></Layout>
      </Route>
      <Route path="/terms">
        <Layout><Terms /></Layout>
      </Route>

      {/* Portal Routes */}
      <Route path="/portal">
        <Login />
      </Route>
      <Route path="/portal/dashboard">
        <ProtectedRoute><PortalLayout><Dashboard /></PortalLayout></ProtectedRoute>
      </Route>
      <Route path="/portal/new-request">
        <ProtectedRoute><PortalLayout><NewRequest /></PortalLayout></ProtectedRoute>
      </Route>
      <Route path="/portal/documents">
        <ProtectedRoute><PortalLayout><Documents /></PortalLayout></ProtectedRoute>
      </Route>
      <Route path="/portal/messages">
        <ProtectedRoute><PortalLayout><Messages /></PortalLayout></ProtectedRoute>
      </Route>
      <Route path="/portal/billing">
        <ProtectedRoute><PortalLayout><Billing /></PortalLayout></ProtectedRoute>
      </Route>
      <Route path="/portal/settings">
        <ProtectedRoute><PortalLayout><Settings /></PortalLayout></ProtectedRoute>
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
      <AuthProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
