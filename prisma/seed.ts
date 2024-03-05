import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.category.createMany({
    data: [
      { title: "Software Development", slug: "software-development" },
      { title: "personal", slug: "personal" }
    ]
  })

  const cats = await prisma.category.findMany()

  const blogs = await prisma.blog.createMany({
    data: [
      {
        title:
          "9 Steps to Build a RESTful API with Node.js, MongoDB, and Express",
        content:
          "In this post, I’ll guide you through the process of creating a simple RESTful API using Node.js, MongoDB, and Express. Before starting, I’m assuming that you have Node.js, npm, MongoDB and VS Code installed on your machine. If you haven’t yet, then you can check the following: Installing Node.js Download MongoDB Download VS Code Let’s jump right into it!🚀 Step 1: Setting Up the Project Let’s create a new project folder to get started. Open your terminal and run the following commands one by one. mkdir my-first-restful-api cd my-first-restful-api This will create a new directory in your machine. RESTful API with Node.js, MongoDB, and Express Now, let’s initialize our project by running the follwing command in the terminal (make sure you’re into your newly created project folder). npm init The above command will walk you through creating a package.json file. Enter the details for the query and hit enter to go to the next query. Or you can run the below comman",
        categoryId: cats[0].id as string
      },
      {
        categoryId: cats[1].id as string,
        title:
          "9 Steps to Build a RESTful API with Node.js, MongoDB, and Express",
        content:
          "In this post, I’ll guide you through the process of creating a simple RESTful API using Node.js, MongoDB, and Express. Before starting, I’m assuming that you have Node.js, npm, MongoDB and VS Code installed on your machine. If you haven’t yet, then you can check the following: Installing Node.js Download MongoDB Download VS Code Let’s jump right into it!🚀 Step 1: Setting Up the Project Let’s create a new project folder to get started. Open your terminal and run the following commands one by one. mkdir my-first-restful-api cd my-first-restful-api This will create a new directory in your machine. RESTful API with Node.js, MongoDB, and Express Now, let’s initialize our project by running the follwing command in the terminal (make sure you’re into your newly created project folder). npm init The above command will walk you through creating a package.json file. Enter the details for the query and hit enter to go to the next query. Or you can run the below comman"
      }
    ]
  })

  console.log(blogs)
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
