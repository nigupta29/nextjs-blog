import prisma from "./db"

export async function fetchBlogs() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const blogs = await prisma.blog.findMany()
    return blogs
  } catch (error) {
    console.error("Prisma Error:", error)
    throw new Error("Failed to fetch blogs.")
  }
}
