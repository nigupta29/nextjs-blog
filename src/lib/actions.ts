"use server"

import prisma from "./db"
import { blogSchema } from "./types"

export type CreateFormState =
  | {
      errors?: {
        title?: string[]
        content?: string[]
      }
      message?: string | null
    }
  | undefined
  
const createBlogSchema = blogSchema.omit({ id: true })

export async function createBlog(
  prevState: CreateFormState,
  formData: FormData
) {
  const validatedFields = createBlogSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content")
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to Publish Blog."
    }
  }

  const { title, content } = validatedFields.data

  try {
    await prisma.blog.create({ data: { title, content } })
  } catch (error) {
    return {
      message: "Error while creating blog!"
    }
  }

  //TODO: do something after adding blog to db
  console.log(validatedFields.data)
}
