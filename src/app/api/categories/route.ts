import prisma from "@/lib/db"

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { slug: "asc" }
  })
  return Response.json({ categories })
}
