import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
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
          console.log("📩 دریافت اطلاعات کاربر:", credentials);

          const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await res.json();
          console.log("📜 پاسخ API:", data);

          if (!res.ok) {
            throw new Error(
              data.error || "❌ ورود ناموفق، لطفاً دوباره تلاش کنید."
            );
          }

          return data;
        } catch (error) {
          console.error("⚠️ خطا در احراز هویت:", error);
          throw new Error(
            "🚨 مشکلی در احراز هویت رخ داده است، لطفاً بعداً تلاش کنید."
          );
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, account }: any) => {
      console.log("🔑 JWT Callback - Account:", account);

      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },

    session: async ({ session, token }: any) => {
      console.log("🛠 Session Callback - Token:", token);

      session.accessToken = token.accessToken || token.sub;

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

  events: {
    createUser: async ({ user }) => {
      console.log("✅ کاربر جدید ثبت‌ نام کرد:", user);
    },
  },
});
