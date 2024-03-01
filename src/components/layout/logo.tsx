import { CrownIcon } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href={"/"} className='group flex gap-2 items-end w-fit'>
      <CrownIcon size={35} />
      <h3 className='text-2xl font-bold group-hover:text-muted-foreground'>
        Writespace
      </h3>
    </Link>
  )
}
