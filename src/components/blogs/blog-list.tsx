import { fetchBlogs } from "@/lib/service"
import BlogListItem from "./blog-list-item"

export default async function BlogList() {
  const blogs = await fetchBlogs()

  return (
    <section>
      {blogs.map((item) => (
        <BlogListItem key={item.id} blog={item} />
      ))}
    </section>
  )
}
