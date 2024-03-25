import BlogList from "@/components/blogs/blog-list"
import PaginationBox from "@/components/blogs/pagination-box"
import { BlogsSkeleton } from "@/components/layout/loaders"
import { Suspense } from "react"

export default function Home({
  searchParams
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page || 1)

  return (
    <>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Suspense fallback={<BlogsSkeleton />}>
          <BlogList page={currentPage} />
        </Suspense>
      </section>
      <PaginationBox page={currentPage} />
    </>
  )
}
