import BlogList from "@/components/blogs/blog-list"
import { BlogsSkeleton } from "@/components/layout/loaders"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Suspense fallback={<BlogsSkeleton />}>
          <BlogList />
        </Suspense>
      </section>
    </>
  )
}
