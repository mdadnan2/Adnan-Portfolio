import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
}

export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate)
  const now = new Date()
  const years = now.getFullYear() - start.getFullYear()
  return years
}
