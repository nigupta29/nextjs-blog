"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import LogoutButton from "../auth/logout-button"
import { Button } from "../ui/button"

export default function Navbar() {
  const { data } = useSession()
  return (
    <div className="bg-secondary p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center space-x-4">
            {data ? (
              <>
                <p>{data.user?.email}</p>
                <Button asChild>
                  <Link href="/blogs/create">Write Blog</Link>
                </Button>
                <LogoutButton />
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
