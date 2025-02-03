import { NextRequest } from "next/server";
import { withoutAuth } from "./middlewares/withoutAuth";
import { withAuth } from "./middlewares/withAuth";

export function middleware(request: NextRequest) {
  const onlyNotLoggedInPaths = ["/login", "/sign-up"];
  const onlyLoggedInPaths = ["/my-page", "/my-page/mentor"];

  if (onlyNotLoggedInPaths.includes(request.nextUrl.pathname)) {
    return withoutAuth(request);
  }

  if (onlyLoggedInPaths.includes(request.nextUrl.pathname)) {
    return withAuth(request);
  }
}

export const config = {
  matcher: [
    "/login",
    "/sign-up",
    "courses",
    "/courses/:courseId",
    "/my-page",
    "/my-page/mentor",
  ],
};
