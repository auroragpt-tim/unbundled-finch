import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  /** Optional: if you wrap routes like <ProtectedRoute><MyPage/></ProtectedRoute> */
  children?: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/portal/login" replace />;

  // Supports both patterns:
  // 1) <Route element={<ProtectedRoute />}> ...nested routes... </Route>
  // 2) <Route element={<ProtectedRoute><Page/></ProtectedRoute>} />
  return children ? <>{children}</> : <Outlet />;
}