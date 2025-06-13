import type { Skill } from "@/types/skill"
import skillsData from "./skills.json"

// This ensures the data scales with the JSON content
export const skills: Skill[] = Array.isArray(skillsData) ? skillsData : []
