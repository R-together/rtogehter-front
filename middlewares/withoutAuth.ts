import { NextRequest, NextResponse } from "next/server";

// The user only who does not logged in can access this page.
export async function withoutAuth(req: NextRequest) {
  // Default redirect URL
  const redirectUrl = new URL("/", req.url);

  const token = req.cookies.get(`${process.env.JWT_NAME}`)?.value;

  // If the user doesn't have a JWT, the user can use this page.
  if (!token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(redirectUrl);
}
