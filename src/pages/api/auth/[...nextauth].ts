import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prismadb";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const response = await fetch(
          `https://${process.env.VERCEL_URL}/api/account/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        if (response.status === 500) {
          throw new Error("InternalServerError");
        }
        const { user } = await response.json();
        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/account/login",
    signOut: "/account/login",
    error: "/account/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.profileName = user.profileName!;
      }

      return token;
    },
    session({ session, token }) {
      session.user!.profileName = token.profileName;
      session.user!.id = token.sub!;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
