// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names + Tailwind variants safely.
 * Usage: cn("px-4", isActive && "text-neonCyan")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
