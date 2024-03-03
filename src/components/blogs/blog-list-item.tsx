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
import { Button } from "../ui/button"

export default function BlogListItem({ blog }: { blog: BlogSchemaType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{blog.content.slice(0, 150)}...</p>
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
