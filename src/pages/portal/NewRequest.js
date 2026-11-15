import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "wouter";
// Obsolete demo work order. Retained for legacy imports only; does not submit data.
export default function NewRequest() {
  return _jsx("div", { children: _jsx(Link, { href: "/portal", children: "Open the current, non-confidential production inquiry" }) });
}
