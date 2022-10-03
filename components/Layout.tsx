import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="grid min-w-max min-h-screen place-content-center bg-gradient-to-b from-rose-600 to-fuchsia-600">
      <div className="text-white text-center pb-16 font-extralight text-4xl">
        H A R M O N Y
      </div>
      {children}
    </div>
  );
}
