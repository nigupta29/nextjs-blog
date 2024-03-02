import { fetchBlogs } from "@/lib/service"

export default async function BlogList() {
  const blogs = await fetchBlogs()

  return (
    <div>
      {blogs.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  )
}
