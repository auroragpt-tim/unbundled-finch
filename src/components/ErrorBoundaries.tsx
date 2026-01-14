import React from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Keep it quiet in production, helpful in dev
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: 24, fontFamily: "system-ui" }}>
            <h2 style={{ margin: 0, fontSize: 18 }}>Something went wrong.</h2>
            <p style={{ marginTop: 8 }}>
              Please refresh the page. If it continues, contact support.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}