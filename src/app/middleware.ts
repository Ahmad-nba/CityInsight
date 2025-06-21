// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cities from "@features/insight/data/cities.json";
 
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/");

  if (pathParts[1] === "insight" && pathParts[2]) {
    const cityParam = decodeURIComponent(pathParts[2]);
    const isValid = cities.some(
      (city) => city.toLowerCase() === cityParam.toLowerCase()
    );

    if (!isValid) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }

  return NextResponse.next();
}
