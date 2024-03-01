import { SquarePenIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Logo from "./logo"

export default function Navbar() {
  return (
    <header className='px-5 py-3 bg-secondary/50'>
      <div className='flex items-center justify-between'>
        <Logo />

        <Button
          asChild
          variant={"link"}
          className='items-start text-base gap-1'
        >
          <Link href='/blogs/create'>
            <SquarePenIcon size={20} />
            <p>Write</p>
          </Link>
        </Button>
      </div>
    </header>
  )
}
