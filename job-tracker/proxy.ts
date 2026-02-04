// works as the first server function that allows us to control cookies, redirect user, logged user ...
// before it was called "middleware"

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  const session = await getSession()

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard") // to get the page where the yser is when the request started

  if (isDashboardPage && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", request.url)) // redirect the user to the url
  }

  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in") // to get the page where the yser is when the request started
  const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up") // to get the page where the yser is when the request started
  if ((isSignInPage || isSignUpPage) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url)) // redirect the user to the url
  }

  // if none of the prerequisites are returned, just continui with normale functioning
  return NextResponse.next()
}