// app/layout.tsx

import Navigation from "@/components/layout/header/default/Navigation";
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
        <div className="container mx-auto">
          <Navigation />
          subdomain in layout: {subdomain}
          {children}
        </div>
      </body>
    </html>
  );
}
