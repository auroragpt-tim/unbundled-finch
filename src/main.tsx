// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

/**
 * Crash reporter that shows errors ON SCREEN (helpful on mobile).
 * Keep it for now. Remove later once stable.
 */
function showGlobalError(message: unknown, error?: unknown) {
  const pre = document.createElement("pre");
  pre.style.whiteSpace = "pre-wrap";
  pre.style.padding = "16px";
  pre.style.color = "red";
  pre.style.fontFamily = "monospace";

  const stack =
    (error as any)?.stack ||
    (error as any)?.message ||
    (typeof error === "string" ? error : "") ||
    "No stack trace";

  pre.textContent = `GLOBAL JS ERROR

${String(message)}

${stack}`;

  document.body.innerHTML = "";
  document.body.appendChild(pre);
}

window.onerror = function (message, source, lineno, colno, error) {
  showGlobalError(message, error);
};

window.onunhandledrejection = function (event) {
  showGlobalError("UNHANDLED PROMISE REJECTION", (event as any)?.reason);
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("React error boundary caught:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            padding: 16,
            color: "red",
            fontFamily: "monospace",
          }}
        >
          {"REACT ERROR BOUNDARY\n\n" +
            this.state.error.message +
            "\n\n" +
            (this.state.error.stack || "No stack")}
        </pre>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById("root");

if (!root) {
  document.body.innerHTML =
    "<pre style='color:red;font-family:monospace'>❌ No #root element found</pre>";
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary>
        <Router>
          <AuthProvider>
            <ThemeProvider defaultTheme="light">
              <App />
            </ThemeProvider>
          </AuthProvider>
        </Router>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
