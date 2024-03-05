import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { BlogSchemaType } from "@/lib/types"
import { getRelativeDate } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export default function BlogListItem({ blog }: { blog: BlogSchemaType }) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <Badge className="mb-1 w-fit capitalize" variant={"outline"}>
          {blog.category.title}
        </Badge>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{blog.content.slice(0, 100)}...</p>
      </CardContent>
      <CardFooter className="items-end justify-between">
        <Button size={"sm"} asChild>
          <Link href={`/blogs/${blog.id}`}>
            <p>Read More</p>
            <ArrowUpRightIcon />
          </Link>
        </Button>
        <p className="text-sm">{getRelativeDate(blog.createdAt)}</p>
      </CardFooter>
    </Card>
  )
}
