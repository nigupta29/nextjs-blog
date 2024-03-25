import CreateBlogForm from "@/components/blogs/create-blog-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Blog"
}

export default function Page() {
  return <CreateBlogForm />
}
