import { fetchBlogs } from "@/lib/service"
import BlogListItem from "./blog-list-item"

export default async function BlogList({ page }: { page: number }) {
  const blogs = await fetchBlogs(page)

  return blogs.map((item) => <BlogListItem key={item.id} blog={item} />)
}
