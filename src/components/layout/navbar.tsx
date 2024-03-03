import { SquarePenIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Logo from "./logo"

export default function Navbar() {
  return (
    <header className="bg-secondary/90 px-5 py-3">
      <div className="flex items-center justify-between">
        <Logo />

        <Button
          asChild
          variant={"link"}
          className="items-start gap-1 text-base"
        >
          <Link href="/blogs/create">
            <SquarePenIcon size={20} />
            <p>Write</p>
          </Link>
        </Button>
      </div>
    </header>
  )
}
