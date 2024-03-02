import { z } from "zod"

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
  createdAt: z
    .string({
      required_error: `Created At is required`,
      invalid_type_error: `Created At should be a Date type`
    })
    .datetime({ message: `Created At should be a Date type` }),
  updatedAt: z
    .string({
      required_error: `Updated At is required`,
      invalid_type_error: `Updated At should be a Date type`
    })
    .datetime({ message: `Updated At should be a Date type` })
})
