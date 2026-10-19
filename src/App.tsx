import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

// The previous client portal was a prototype. Registration now collects
// inquiries only; no customer accounts, files, or billing are exposed.
const legacyPortalPaths = [
  "/portal/dashboard",
  "/portal/new-request",
  "/portal/documents",
  "/portal/messages",
  "/portal/billing",
  "/portal/settings",
];

function Router() {
  return (
    <Switch>
      <Route path="/"><Layout><Home /></Layout></Route>
      <Route path="/services"><Layout><Services /></Layout></Route>
      <Route path="/process"><Layout><Process /></Layout></Route>
      <Route path="/pricing"><Layout><Pricing /></Layout></Route>
      <Route path="/about"><Layout><About /></Layout></Route>
      <Route path="/contact"><Layout><Contact /></Layout></Route>
      <Route path="/privacy"><Layout><Privacy /></Layout></Route>
      <Route path="/terms"><Layout><Terms /></Layout></Route>
      <Route path="/portal"><Layout><Registration /></Layout></Route>
      {legacyPortalPaths.map((path) => (
        <Route key={path} path={path}><Redirect to="/portal" replace /></Route>
      ))}
      <Route><Layout><NotFound /></Layout></Route>
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
