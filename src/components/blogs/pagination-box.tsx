import { POSTS_PER_PAGE, fetchTotalBlogsCount } from "@/lib/service"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default async function PaginationBox({ page }: { page: number }) {
  const totalBlogs = await fetchTotalBlogsCount()
  const totalPages = Math.ceil(totalBlogs / POSTS_PER_PAGE)

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant={"outline"} asChild>
        <Link href={page > 1 ? `?page=${page - 1}` : ""}>
          <ChevronLeft className="h-4 w-4" />
          <span className="align-middle">Previous</span>
        </Link>
      </Button>
      <Button variant={"ghost"} className="border" disabled>
        {page}
      </Button>
      <Button variant={"outline"} asChild className="px-6">
        <Link href={page < totalPages ? `?page=${page + 1}` : ""}>
          <span className="align-middle">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
