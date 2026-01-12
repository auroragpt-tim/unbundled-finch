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

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Keep it quiet in production; useful in dev logs.
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: 16 }}>
            <h1 style={{ fontSize: 18, marginBottom: 8 }}>Something went wrong.</h1>
            <p style={{ opacity: 0.8 }}>
              Try refreshing the page. If this keeps happening, it’s on us.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
