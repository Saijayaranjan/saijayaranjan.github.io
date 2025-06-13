"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Skill } from "@/types/skill"

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 p-4 rounded-lg border-0 bg-transparent hover:border hover:border-border/50 hover:bg-card/50 hover:backdrop-blur-sm hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.2)" }}
    >
      <div className="relative h-12 w-12 overflow-hidden">
        <Image
          src={skill.logo || "/placeholder.svg"}
          alt={skill.name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <h3 className="text-sm font-medium text-center">{skill.name}</h3>
    </motion.div>
  )
}
