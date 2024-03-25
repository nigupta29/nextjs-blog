import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "john.doe@gmail.com"
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "********"
        }
      },
      async authorize(credentials: any) {
        // do something in db

        const user = {
          id: "42",
          email: "john.doe@gmail.com",
          password: "123"
        }

        if (
          credentials?.email == user.email &&
          credentials?.password == user.password
        )
          return user
        else return null
      }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        console.log(profile)

        return {
          ...profile
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role
        token.uid = user.id
      }
      return token
    },

    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.uid
        session.user.role = token.role
      }
      return session
    }
  },

  pages: {
    signIn: "/login"
  }
}
