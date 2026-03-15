import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(Switch, { children: [_jsx(Route, { path: "/", children: _jsx(Layout, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "/services", children: _jsx(Layout, { children: _jsx(Services, {}) }) }), _jsx(Route, { path: "/process", children: _jsx(Layout, { children: _jsx(Process, {}) }) }), _jsx(Route, { path: "/pricing", children: _jsx(Layout, { children: _jsx(Pricing, {}) }) }), _jsx(Route, { path: "/about", children: _jsx(Layout, { children: _jsx(About, {}) }) }), _jsx(Route, { path: "/contact", children: _jsx(Layout, { children: _jsx(Contact, {}) }) }), _jsx(Route, { path: "/privacy", children: _jsx(Layout, { children: _jsx(Privacy, {}) }) }), _jsx(Route, { path: "/terms", children: _jsx(Layout, { children: _jsx(Terms, {}) }) }), _jsx(Route, { path: "/portal", children: _jsx(Login, {}) }), _jsx(Route, { path: "/portal/dashboard", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(Dashboard, {}) }) }) }), _jsx(Route, { path: "/portal/new-request", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(NewRequest, {}) }) }) }), _jsx(Route, { path: "/portal/documents", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(Documents, {}) }) }) }), _jsx(Route, { path: "/portal/messages", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(Messages, {}) }) }) }), _jsx(Route, { path: "/portal/billing", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(Billing, {}) }) }) }), _jsx(Route, { path: "/portal/settings", children: _jsx(ProtectedRoute, { children: _jsx(PortalLayout, { children: _jsx(Settings, {}) }) }) }), _jsx(Route, { children: _jsx(Layout, { children: _jsx(NotFound, {}) }) })] }));
}
function App() {
    return (_jsx(ErrorBoundary, { children: _jsx(AuthProvider, { children: _jsx(ThemeProvider, { defaultTheme: "light", children: _jsxs(TooltipProvider, { children: [_jsx(Toaster, {}), _jsx(Router, {})] }) }) }) }));
}
export default App;
