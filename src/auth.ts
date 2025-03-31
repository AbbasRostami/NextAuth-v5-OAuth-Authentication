import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
  }
  interface User {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),

    Credentials({
      authorize: async (credentials) => {
        try {
          console.log("📩 Retrieving user information:", credentials);
      
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
      
          const data = await res.json();
      
          if (!res.ok) {
            return Promise.reject(new Error(data.error || "❌ Incorrect email or password."));
          }
      
          console.log("✅ Login successful:", data);
          return data;
        } catch (error) {
          console.error("⚠️ Authentication error:", error);
          return Promise.reject(new Error("🚨 An authentication issue occurred. Please try again later."));
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, account }) => {
      console.log("🔑 Account Object:", account);
      console.log("🔑 User Object:", user);

      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      console.log("🔑 Final Token:", token);
      return token;
    },
    session: async ({ session, token }) => {
      console.log("🛠 Session Callback - Token:", token);

      session.accessToken = token.accessToken as string | undefined;

      return session;
    },

    authorized: async ({ auth, request }: any) => {
      const isAuthorized = !!auth?.accessToken;
      const isPrivateRoute = request.nextUrl.pathname.startsWith("/posts");

      if (isPrivateRoute && !isAuthorized) {
        return Response.redirect(new URL("/login", request.nextUrl.origin));
      }

      return true;
    },
  },

});
