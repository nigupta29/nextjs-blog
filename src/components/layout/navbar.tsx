import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { Button } from "../ui/button"

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div className="bg-secondary p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="space-x-4">
            {session ? (
              <>
                <Button asChild>
                  <Link href="/blogs/create">Write Blog</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
