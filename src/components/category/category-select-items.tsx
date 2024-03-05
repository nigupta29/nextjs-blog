import { CategorySchemaType, categorySchema } from "@/lib/types"
import { useEffect, useState } from "react"
import { z } from "zod"
import { SelectItem } from "../ui/select"

export default function CategorySelectItems() {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<CategorySchemaType[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories")
        const data = await res.json()
        setCategories(z.array(categorySchema).parse(data.categories))
      } catch (error) {
        throw new Error("Failed to fetch categories.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (isLoading) {
    return (
      <SelectItem value="loading" disabled>
        Loading..
      </SelectItem>
    )
  }

  return (
    <>
      {categories.map((item) => (
        <SelectItem value={item.id} key={item.id} className="capitalize">
          {item.title}
        </SelectItem>
      ))}
    </>
  )
}
