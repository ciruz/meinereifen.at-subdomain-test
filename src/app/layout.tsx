// app/layout.tsx
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const subdomain = cookieStore.get("x-subdomain") || "default";

  return (
    <html lang="en">
      <body>
        <h1>Subdomain: {subdomain}</h1>
        {children}
      </body>
    </html>
  );
}
