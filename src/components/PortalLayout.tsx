import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

export default function PortalLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-semibold tracking-tight">
              Unbundled Finch
            </Link>
            <span className="text-xs text-neutral-500">Client Portal</span>
          </div>

          <nav className="flex gap-4 text-sm">
            <NavLink
              to="/portal"
              end
              className={({ isActive }) =>
                is