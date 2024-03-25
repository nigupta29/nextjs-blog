import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default async function AuthLayout({
  children
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/")
  }

  return (
    <div className="flex h-screen items-center justify-center p-5">
      {children}
    </div>
  )
}
