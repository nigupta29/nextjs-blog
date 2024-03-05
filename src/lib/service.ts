import prisma from "./db"

export async function fetchBlogs() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true }
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
