import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Auth0({
      issuer: `https://${process.env.AUTH_AUTH0_DOMAIN}`,
    }),
  ],
});
