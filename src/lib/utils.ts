import { clsx, type ClassValue } from "clsx"
import { formatRelative } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRelativeDate(currentDate: Date) {
  const formattedDate = formatRelative(currentDate, new Date())
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}
