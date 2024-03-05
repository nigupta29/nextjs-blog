import { z } from "zod"

export const categorySchema = z.object({
  id: z.string({
    required_error: "Category Id is required",
    invalid_type_error: "Invalid type for the Category ID"
  }),
  title: z.string({
    required_error: "Category Title is required",
    invalid_type_error: "Category Title should be type of string"
  }),
  slug: z.string({
    required_error: "Category Slug is required",
    invalid_type_error: "Category Slug should be type of string"
  })
})

export type CategorySchemaType = z.infer<typeof categorySchema>

export const blogSchema = z.object({
  id: z.string({
    required_error: "Blog Id is required",
    invalid_type_error: "Invalid type for the Blog ID"
  }),
  title: z
    .string({
      required_error: "Blog Title is required",
      invalid_type_error: "Blog Title should be type of string"
    })
    .min(10, {
      message: "Title must be more than 10 or more characters long."
    }),
  content: z
    .string({
      required_error: "Blog Content is required",
      invalid_type_error: "Blog Content should be type of string"
    })
    .min(100, {
      message: "Content must be more than 100 or more characters long."
    }),
  createdAt: z.date({
    required_error: "Blog's created at date-time is required",
    invalid_type_error: "Blog's created at is not a date!"
  }),
  updatedAt: z.date({
    required_error: "Blog's updated at date-time is required",
    invalid_type_error: "Blog's updated at is not a date!"
  }),
  categoryId: z.string({
    required_error: "Category Id is required",
    invalid_type_error: "Invalid type for the Category ID"
  }),
  category: categorySchema
})

export type BlogSchemaType = z.infer<typeof blogSchema>
