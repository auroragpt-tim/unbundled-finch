import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// TEMP DEBUG — REMOVE AFTER FIX
window.onerror = function (message, source, lineno, colno, error) {
  const pre = document.createElement("pre");
  pre.style.whiteSpace = "pre-wrap";
  pre.style.padding = "16px";
  pre.style.color = "red";
  pre.style.fontFamily = "monospace";
  pre.textContent =
    "GLOBAL JS ERROR\n\n" +
    String(message) +
    "\n\n" +
    (error?.stack || "No stack trace");
  document.body.innerHTML = "";
  document.body.appendChild(pre);
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

  componentDidCatch(error: Error) {
    console.error(error);
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
          {"REACT ERROR\n\n" +
            this.state.error.message +
            "\n\n" +
            this.state.error.stack}
        </pre>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);