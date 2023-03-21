import React, { Children } from "react";

export default function Layout({ children }) {
  return (
    <div className=" w-full h-auto mx-auto md:max-w-6xl p-6 justify-center ">
      {children}
    </div>
  );
}
