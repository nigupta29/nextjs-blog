import { GithubIcon } from "lucide-react"
import { Button } from "../ui/button"

export default function ProvidersLogin() {
  return (
    <div className="flex w-full flex-col items-center gap-x-2">
      <Button size="lg" className="w-full gap-2" variant="outline">
        <GithubIcon className="h-5 w-5" />
        <p>Continue with Github</p>
      </Button>
    </div>
  )
}
