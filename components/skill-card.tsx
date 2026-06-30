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
      className="group flex flex-col items-center gap-4 border border-border bg-card p-6 transition-colors hover:border-muted-foreground/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex h-12 w-12 items-center justify-center grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
        <Image
          src={skill.logo || "/placeholder.svg"}
          alt={`${skill.name} logo`}
          width={40}
          height={40}
          className="h-8 w-8 object-contain"
        />
      </div>
      <h3 className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
        {skill.name}
      </h3>
    </motion.div>
  )
}
