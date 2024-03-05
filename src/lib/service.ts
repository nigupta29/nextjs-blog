import prisma from "./db"

export const POSTS_PER_PAGE = 10

export async function fetchTotalBlogsCount() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const totalBlogs = await prisma.blog.count()
    return totalBlogs
  } catch (error) {
    console.error("Prisma Error:", error)
    throw new Error("Failed to fetch total count for blogs.")
  }
}

export async function fetchBlogs(page: number) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true },
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1)
    })
    return blogs
  } catch (error) {
    console.error("Prisma Error:", error)
    throw new Error("Failed to fetch blogs.")
  }
}

export async function fetchBlogById(id: string) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { category: true }
    })
    return blog
  } catch (error) {
    console.error("Prisma Error:", error)
    throw new Error("Failed to fetch blog.")
  }
}
