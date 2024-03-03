import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export const BlogsSkeleton = () => {
  return Array.from({ length: 6 }).map((_, index) => (
    <BlogItemSkeleton key={index} />
  ))
}

export const BlogItemSkeleton = () => {
  return (
    <Card className="h-[250px] md:h-[230px]">
      <CardHeader>
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-1/2" />
      </CardHeader>
      <CardContent className="flex-grow">
        <Skeleton className="mb-2 h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </CardContent>
      <CardFooter className="items-end justify-between">
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-3 w-28" />
      </CardFooter>
    </Card>
  )
}
