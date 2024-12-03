// app/layout.tsx

import DefaultNavigation from "@/components/layout/header/default/DefaultNavigation";
import LuckycarNavigation from "@/components/layout/header/luckycar/LuckycarNavigation";
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
        {subdomain === "wl-lc" ? <LuckycarNavigation /> : <DefaultNavigation />}
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
