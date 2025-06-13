import type { Skill } from "./skill"

export interface Experience {
  title: string
  company: string
  logo?: string
  date: string
  description: string
  skills?: Skill[]
}
