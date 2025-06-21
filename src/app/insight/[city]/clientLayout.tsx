// src/app/insight/[city]/ClientLayout.tsx
"use client";

import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
}
