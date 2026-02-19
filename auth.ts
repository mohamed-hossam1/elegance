import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { SignInSchema } from "./lib/validation";
import bcrypt from "bcryptjs";
import { createServerClient } from "./lib/supbase/server";

declare module "next-auth" {
  interface User {
    role?: "admin" | "user";
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
        async authorize(credentials) {
            const validatedData = SignInSchema.safeParse(credentials);
            if (!validatedData.success) return null;

            const { email, password } = validatedData.data;

            const supabase = createServerClient();

            const { data: user } = await supabase
                .from("users")
                .select("*")
                .eq("email", email)
                .single();

            if (!user || !user.password) return null;

            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            );

            if (!isValidPassword) return null;

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                role: user.role,
            };
        },
        credentials: {
          email: { label: "Email", type: "text", placeholder: "example@example.com" },
          password: { label: "Password", type: "password" },
        }
    }),
  ],

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as "admin" | "user";
      }
      return session;
    },

    async jwt({ token, user, account }) {
      const supabase = createServerClient();

      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const { data: existingUser } = await supabase
          .from("users")
          .select("*")
          .eq("email", token.email!)
          .single();

        if (!existingUser) {
          const { data: newUser } = await supabase
            .from("users")
            .insert({
              name: token.name || "anynomous", 
              email: token.email || "anynomous@elegance-egy.com",
              image: token.picture || null,
              role: "user",
              provider: "google",
              provider_account_id: account.providerAccountId || "",
            })
            .select()
            .single();

          if (newUser) {
            token.sub = newUser.id;
            token.role = newUser.role;
          }
        } else {
          token.sub = existingUser.id;
          token.role = existingUser.role;
        }
      }

      return token;
    },
  },
});
