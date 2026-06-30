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
      className="glass-card gradient-border group flex flex-col items-center gap-3 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={skill.logo || "/placeholder.svg"}
          alt={skill.name}
          width={48}
          height={48}
          className="object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <h3 className="text-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
        {skill.name}
      </h3>
    </motion.div>
  )
}
