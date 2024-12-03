import { headers } from "next/headers";

export default async function Page() {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "default";

  return <div>subdomain in page: {subdomain}</div>;
}
