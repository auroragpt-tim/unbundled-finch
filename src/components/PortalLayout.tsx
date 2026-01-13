import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function PortalLayout({ children }: Props) {
  return (
    <div style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}