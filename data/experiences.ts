import type { Experience } from "@/types/experience"
import experiencesData from "./experiences.json"

// This ensures the data scales with the JSON content
export const experiences: Experience[] = Array.isArray(experiencesData) ? experiencesData : []
