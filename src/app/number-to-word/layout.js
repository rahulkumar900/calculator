import React, { Children } from "react";

export default function Layout({ children }) {
  return (
    <div className="grid place-content-center p-6 w-screen h-[90vh]">
      {children}
    </div>
  );
}
