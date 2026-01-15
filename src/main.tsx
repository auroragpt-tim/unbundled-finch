import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* =========================================================
   TEMP: MOBILE-VISIBLE RUNTIME ERROR DISPLAY
   Remove after debugging
========================================================= */

function showFatal(msg: string) {
  try {
    const pre = document.createElement("pre");
    pre.style.position = "fixed";
    pre.style.top = "0";
    pre.style.left = "0";
    pre.style.right = "0";
    pre.style.maxHeight = "60vh";
    pre.style.overflow = "auto";
    pre.style.zIndex = "999999";
    pre.style.background = "rgba(0,0,0,0.95)";
    pre.style.color = "#ffdddd";
    pre.style.padding = "12px";
    pre.style.fontSize = "12px";
    pre.style.whiteSpace = "pre-wrap";
    pre.style.borderBottom = "2px solid red";
    pre.textContent = "FATAL RUNTIME ERROR:\n\n" + msg;
    document.body.appendChild(pre);
  } catch {
    // fail silently
  }
}

window.addEventListener("error", (e) => {
  showFatal(String(e.error?.stack || e.message || e));
});

window.addEventListener("unhandledrejection", (e) => {
  const reason = (e as PromiseRejectionEvent).reason;
  showFatal(String(reason?.stack || reason));
});

/* =========================================================
   NORMAL APP BOOTSTRAP
========================================================= */

const rootEl = document.getElementById("root");

if (!rootEl) {
  showFatal("Root element (#root) not found in index.html");
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}