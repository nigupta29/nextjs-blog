"use client"

import { Button } from "@/components/ui/button"
import { BanIcon } from "lucide-react"

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="animate-pulse">
        <BanIcon size={55} />
      </div>
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <p className="text-destructive">{error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
