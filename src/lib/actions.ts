"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"
import { blogSchema } from "./types"
import { redirect } from "next/navigation"

export type CreateFormState =
  | {
      errors?: {
        title?: string[]
        content?: string[]
      }
      message?: string | null
    }
  | undefined

const createBlogSchema = blogSchema.pick({
  title: true,
  content: true
})

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
  
  revalidatePath("/")
  redirect("/")
}
