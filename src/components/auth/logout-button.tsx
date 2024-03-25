"use client"
import { LogOutIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { Button } from "../ui/button"

export default function LogoutButton() {
  return (
    <Button
      onClick={async () => {
        await signOut()
        redirect("/")
      }}
      className="space-x-2"
      variant={"destructive"}
    >
      <LogOutIcon className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  )
}
