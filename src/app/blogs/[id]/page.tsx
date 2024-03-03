import Container from "@/components/layout/container"
import { fetchBlogById } from "@/lib/service"
import { getRelativeDate } from "@/lib/utils"

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await fetchBlogById(params.id)

  return (
    <Container>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold md:text-center md:text-4xl">
          {blog.title}
        </h1>

        <h3 className="text-xl text-muted-foreground md:text-center">
          {getRelativeDate(blog.createdAt)}
        </h3>

        <p className="text-muted-foreground md:text-lg">{blog.content}</p>
      </div>
    </Container>
  )
}
