// middleware.ts
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = new URL(req.url);
  const host = url.hostname; // Get the host (e.g., "subdomain.example.com")

  const subdomain = host.split(".")[0]; // Extract the subdomain

  // Optionally, you can set a default subdomain or handle edge cases
  // const allowedSubdomains = ["sub1", "sub2"]; // List your allowed subdomains
  // if (!allowedSubdomains.includes(subdomain)) {
  //return NextResponse.rewrite(new URL("/404", req.url)); // Redirect to a 404 page or fallback
  //}

  // Pass the subdomain as a header
  const response = NextResponse.next();
  response.headers.set("x-subdomain", subdomain);
  return response;
}
