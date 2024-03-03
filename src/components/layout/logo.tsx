import { CrownIcon } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="group flex w-fit items-end gap-2 hover:text-muted-foreground"
    >
      <CrownIcon size={35} />
      <h3 className="text-2xl font-bold">Writespace</h3>
    </Link>
  )
}
