import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const subdomain = cookieStore.get("x-subdomain")?.value || "default";

  return <div>subdomain: {subdomain}</div>;
}
