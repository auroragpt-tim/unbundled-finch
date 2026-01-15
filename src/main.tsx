// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * On-screen crash reporter for when you can't easily open DevTools (phone).
 * Enable by visiting: ?debug=1
 */
function setupOnScreenDebug() {
  const params = new URLSearchParams(window.location.search);
  const enabled = params.get("debug") === "1";

  if (!enabled) return;

  const panel = document.createElement("div");
  panel.id = "uf-debug-panel";
  panel.style.position = "fixed";
  panel.style.left = "12px";
  panel.style.right = "12px";
  panel.style.bottom = "12px";
  panel.style.zIndex = "999999";
  panel.style.maxHeight = "45vh";
  panel.style.overflow = "auto";
  panel.style.background = "rgba(0,0,0,0.92)";
  panel.style.color = "#eaeaea";
  panel.style.border = "1px solid rgba(255,255,255,0.2)";
  panel.style.borderRadius = "12px";
  panel.style.padding = "10px";
  panel.style.fontFamily =
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  panel.style.fontSize = "12px";
  panel.style.lineHeight = "1.35";

  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.gap = "8px";
  header.style.marginBottom = "8px";

  const title = document.createElement("div");
  title.textContent = "UF Debug Panel (enabled via ?debug=1)";
  title.style.fontWeight = "700";

  const actions = document.createElement("div");
  actions.style.display = "flex";
  actions.style.gap = "8px";

  const btnClear = document.createElement("button");
  btnClear.textContent = "Clear";
  btnClear.style.cursor = "pointer";
  btnClear.style.border = "1px solid rgba(255,255,255,0.2)";
  btnClear.style.background = "rgba(255,255,255,0.08)";
  btnClear.style.color = "#fff";
  btnClear.style.padding = "6px 10px";
  btnClear.style.borderRadius = "10px";

  const btnCopy = document.createElement("button");
  btnCopy.textContent = "Copy";
  btnCopy.style.cursor = "pointer";
  btnCopy.style.border = "1px solid rgba(255,255,255,0.2)";
  btnCopy.style.background = "rgba(255,255,255,0.08)";
  btnCopy.style.color = "#fff";
  btnCopy.style.padding = "6px 10px";
  btnCopy.style.borderRadius = "10px";

  const body = document.createElement("pre");
  body.style.whiteSpace = "pre-wrap";
  body.style.margin = "0";
  body.style.userSelect = "text";

  function logLine(kind: string, msg: string) {
    const ts = new Date().toISOString();
    body.textContent += `[${ts}] ${kind}: ${msg}\n`;
    // auto-scroll to bottom
    panel.scrollTop = panel.scrollHeight;
  }

  btnClear.onclick = () => {
    body.textContent = "";
    logLine("INFO", "Cleared debug output.");
  };

  btnCopy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(body.textContent || "");
      logLine("INFO", "Copied debug output to clipboard.");
    } catch (e: any) {
      logLine("ERROR", `Copy failed: ${String(e?.message || e)}`);
    }
  };

  actions.appendChild(btnClear);
  actions.appendChild(btnCopy);
  header.appendChild(title);
  header.appendChild(actions);

  panel.appendChild(header);
  panel.appendChild(body);
  document.body.appendChild(panel);

  // Show basic environment info
  logLine("INFO", `location.href = ${window.location.href}`);
  logLine("INFO", `userAgent = ${navigator.userAgent}`);

  // Capture window errors
  window.addEventListener("error", (event) => {
    const parts = [
      event.message,
      event.filename ? `file: ${event.filename}` : "",
      Number.isFinite(event.lineno) ? `line: ${event.lineno}` : "",
      Number.isFinite(event.colno) ? `col: ${event.colno}` : "",
    ].filter(Boolean);
    logLine("WINDOW_ERROR", parts.join(" | "));
  });

  // Capture unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    const reason = (event as PromiseRejectionEvent).reason;
    logLine("UNHANDLED_REJECTION", reason?.stack || String(reason));
  });

  // Mirror console warnings/errors into the panel
  const origError = console.error.bind(console);
  const origWarn = console.warn.bind(console);

  console.error = (...args: any[]) => {
    try {
      logLine("console.error", args.map((a) => (a?.stack ? a.stack : String(a))).join(" "));
    } catch {}
    origError(...args);
  };

  console.warn = (...args: any[]) => {
    try {
      logLine("console.warn", args.map((a) => String(a)).join(" "));
    } catch {}
    origWarn(...args);
  };

  logLine("INFO", "Debug hooks installed. If the app crashes, it should show up here.");
}

setupOnScreenDebug();

function boot() {
  try {
    const rootEl = document.getElementById("root");
    if (!rootEl) {
      throw new Error('Missing #root element. index.html should contain <div id="root"></div>.');
    }

    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (e: any) {
    // If React mounting fails, still show something visible
    const msg = e?.stack || String(e);
    const fallback = document.createElement("div");
    fallback.style.padding = "16px";
    fallback.style.fontFamily =
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    fallback.innerHTML = `
      <h1 style="font-size:16px;margin:0 0 10px 0;">App failed to boot</h1>
      <pre style="white-space:pre-wrap;margin:0;background:#111;color:#eee;padding:12px;border-radius:10px;overflow:auto;">${msg}</pre>
      <p style="margin:10px 0 0 0;opacity:0.8;">Tip: reload with <b>?debug=1</b> to capture more details.</p>
    `;
    document.body.appendChild(fallback);
    // Also log to console
    console.error("BOOT_FAILURE", e);
  }
}

boot();