import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Minimum 1 character is required" })
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Minimum 3 character is required" })
    .trim()
    .toLowerCase(),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters are required" })
})

export type RegisterSchemaType = z.infer<typeof registerSchema>
