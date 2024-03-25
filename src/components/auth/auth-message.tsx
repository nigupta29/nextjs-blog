import { cn } from "@/lib/utils"
import { InfoIcon, MessageCircleXIcon } from "lucide-react"

export default function AuthMessage({
  type,
  message
}: {
  type: "error" | "success"
  message: string
}) {
  if (!message) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border p-2",
        type === "error" &&
          "border-destructive bg-destructive/20 text-destructive",
        type === "success" && "border-green-700 bg-green-500/20 text-green-700"
      )}
    >
      {type === "error" ? (
        <MessageCircleXIcon className="h-5 w-5" />
      ) : (
        <InfoIcon className="h-5 w-5" />
      )}
      <span className="text-sm">{message}</span>
    </div>
  )
}
