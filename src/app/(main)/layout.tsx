import Navbar from "@/components/layout/navbar"

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
