import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * STEP A: HARD BYPASS APP
 * If you can see the message on the page,
 * React + Netlify are working.
 */

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

const root = document.getElementById("root");

if (!root) {
  document.body.innerHTML =
    "<pre style='color:red;font-family:monospace'>❌ No #root element found</pre>";
} else {
  ReactDOM.createRoot(root).render(
    <div
      style={{
        padding: 24,
        fontFamily: "monospace",
        fontSize: 16,
      }}
    >
      ✅ MAIN.TSX RENDERED  
      <br />
      React is alive.  
      <br />
      Netlify is serving correctly.  
      <br />
      <br />
      If you see this, the crash is **inside App / routes / components**.
    </div>
  );
}