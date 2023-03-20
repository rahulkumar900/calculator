import React, { Children } from "react";

export default function Layout({ children }) {
  return (
    <div className=" w-full h-auto mx-auto  md:w-4/5  p-6 justify-center  ">
      {children}
    </div>
  );
}
