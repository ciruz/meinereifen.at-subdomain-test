// app/layout.tsx

import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "default";

  return (
    <html lang="en">
      <body>
        subdomain in layout: {subdomain}
        {children}
      </body>
    </html>
  );
}
