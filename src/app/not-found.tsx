import { Button } from "@/components/ui/button"
import { FrownIcon, HeartCrackIcon, HomeIcon } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="animate-pulse">
        <FrownIcon size={55} />
      </div>
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-lg text-muted-foreground">
        Could not find the requested resource
      </p>
      <Button asChild>
        <Link href="/">
          <span>Back to Home</span>
        </Link>
      </Button>
    </div>
  )
}
