import { NextRequest, NextResponse } from "next/server";

// The user who has JWT can access this page.
export async function withAuth(req: NextRequest) {
  const redirectUrl = new URL("/login", req.url);

  const token = req.cookies.get(`${process.env.JWT_NAME}`)!.value;

  if (!token) {
    return NextResponse.redirect(redirectUrl);
  }

  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    const res = await response.json();

    if (!res) {
      return NextResponse.redirect(redirectUrl);
    }
  } catch (e) {
    console.log(e);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
