import { fetchBlogs } from "@/lib/service"
import BlogListItem from "./blog-list-item"

export default async function BlogList() {
  const blogs = await fetchBlogs()

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {blogs.map((item) => (
        <BlogListItem key={item.id} blog={item} />
      ))}
    </section>
  )
}
