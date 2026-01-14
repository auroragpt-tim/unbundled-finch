import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            Unbundled Finch
          </Link>

          <nav className="flex gap-4 text-sm">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Process
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/portal/login"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Portal
            </NavLink>
          </nav>
        </div>
      </header>

      <main