import React, { ReactNode } from "react";

export default async function SiteLayout({
  params,
  children,
}: {
  params: { domain: string };
  children: ReactNode;
}) {
  const domain = decodeURIComponent(params.domain);

  return (
    <div>
      domain:
      {domain}
      <br />
      <br />
      children:
      {children}
    </div>
  );
}
