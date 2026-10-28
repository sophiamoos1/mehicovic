import NextAuth from "next-auth";

import { authConfig } from "./auth.config";

// Next.js 16: "Middleware" heisst jetzt "Proxy". Schickt Nicht-Eingeloggte auf /login.
const { auth } = NextAuth(authConfig);
export default auth;

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|manifest.webmanifest|icons/).*)"],
};
