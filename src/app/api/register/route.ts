import { registerSchema } from "@/lib/schemas"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.json()
  const validatedFields = registerSchema.safeParse(formData)

  if (!validatedFields.success) {
    return NextResponse.json({ message: "Invalid Fields" }, { status: 400 })
  }

  const { email, name, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  return NextResponse.json({ formData }, { status: 201 })
}
