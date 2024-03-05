import Navbar from "@/components/layout/navbar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Workspace",
    default: "Home | Workspace"
  },
  description: "Blog app built with NextJS and Prisma"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container my-10 space-y-10">{children}</main>
      </body>
    </html>
  )
}
