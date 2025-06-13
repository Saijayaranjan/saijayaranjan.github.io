import type { Project } from "@/types/project"
import projectsData from "./projects.json"

// This ensures the data scales with the JSON content
export const projects: Project[] = Array.isArray(projectsData) ? projectsData : []
