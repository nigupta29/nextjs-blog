"use server"

import prisma from "@/lib/db"

// TODO: add return type for the fucntion

export const checkUserExists = async (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}
