import { BlogSchemaType } from "@/lib/types"

export default function BlogListItem({ blog }: { blog: BlogSchemaType }) {
  return (
    <article>
      <h3 className="text-xl font-semibold">{blog.title}</h3>
      <p className="text-base text-muted-foreground">
        {blog.content.slice(0, 150)}...
      </p>
    </article>
  )
}
