import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createSlug = (text: string) =>
  text.toLowerCase().trim().replaceAll(" ", "-")

const categoryData = [
  "Technology",
  "Travel",
  "Cooking",
  "Health and Wellness",
  "Fashion",
  "Sports",
  "Science",
  "Business and Finance",
  "Entertainment"
]

async function main() {
  /* Delete the current data in the DB */
  await prisma.blog.deleteMany({})

  /* Create different categories */
  categoryData.forEach(async (item) => {
    await prisma.category.upsert({
      create: { title: item, slug: createSlug(item) },
      update: { title: item, slug: createSlug(item) },
      where: { slug: createSlug(item) }
    })
  })
  console.log("Categories Created")

  /* Fetch all those categories */
  const categories = await prisma.category.findMany()

  /* Create atleast 20 blogs */
  for (let i = 1; i <= 20; i++) {
    const title = faker.lorem.words(5)
    const content = faker.lorem.paragraphs(30)

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        categoryId: categories[Math.floor(Math.random() * categories.length)].id
      }
    })

    console.log("Created Blog for title " + blog.title)
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
