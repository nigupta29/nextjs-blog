import { checkUserExists } from "@/actions/user"
import prisma from "@/lib/db"
import { registerSchema } from "@/lib/schemas"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()
    const validatedFields = registerSchema.safeParse(formData)

    if (!validatedFields.success) {
      return NextResponse.json({ message: "Invalid Fields" }, { status: 400 })
    }

    const { email, name, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    if (!(await checkUserExists(email))) {
      return NextResponse.json(
        { message: "User Exists Already!" },
        { status: 403 }
      )
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({ message: "User registered!" }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
