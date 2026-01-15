// src/components/ProtectedRoute.tsx
import React from "react";
import { Redirect } from "wouter";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/portal/login" />;
  }

  return <>{children}</>;
}