import "@/globals.css";

import QueryProvider from "@/provider/QueryProvider";
import React from "react";

export default function MasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryProvider>{children}</QueryProvider>;
}
