import type { NextAuthConfig } from "next-auth";

// Ohne Datenbank-Zugriff, damit proxy.ts leichtgewichtig bleibt.
export const authConfig = {
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const loggedIn = !!auth?.user;
      if (nextUrl.pathname === "/login") {
        return loggedIn ? Response.redirect(new URL("/", nextUrl)) : true;
      }
      return loggedIn;
    },
  },
} satisfies NextAuthConfig;
