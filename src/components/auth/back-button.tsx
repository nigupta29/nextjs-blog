"use client"

import { Undo2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
      <Undo2Icon className="h-4 w-4" />
    </Button>
  )
}
