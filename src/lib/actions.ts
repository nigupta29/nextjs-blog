"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import prisma from "./db"
import { blogSchema } from "./types"

export type CreateFormState =
  | {
      errors?: {
        title?: string[]
        content?: string[]
        categoryId?: string[]
      }
      message?: string | null
    }
  | undefined

const createBlogSchema = blogSchema.pick({
  title: true,
  content: true,
  categoryId: true
})

export async function createBlog(
  prevState: CreateFormState,
  formData: FormData
) {
  const validatedFields = createBlogSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    categoryId: formData.get("categoryId")
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to Publish Blog."
    }
  }

  try {
    await prisma.blog.create({ data: validatedFields.data })
  } catch (error) {
    return {
      message: "Error while creating blog!"
    }
  }

  revalidatePath("/")
  redirect("/")
}
