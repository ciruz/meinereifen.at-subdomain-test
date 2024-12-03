// app/layout.tsx

import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const subdomain = cookieStore.get("x-subdomain")?.value || "default";

  return (
    <html lang="en">
      <body>
        subdomain in layout: {subdomain}
        {children}
        {cookieStore.getAll().map((cookie) => (
          <div key={cookie.name}>
            <p>Name: {cookie.name}</p>
            <p>Value: {cookie.value}</p>
          </div>
        ))}
      </body>
    </html>
  );
}
