"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="relative pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline node */}
      <div className="absolute left-[-5px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-foreground" />

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{experience.date}</span>
        <h3 className="font-heading text-xl font-medium tracking-tight">{experience.title}</h3>

        <div className="flex items-center gap-3">
          {experience.logo && (
            <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border">
              <Image
                src={experience.logo || "/placeholder.svg"}
                alt={experience.company}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          <p className="text-sm font-medium text-foreground">{experience.company}</p>
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">{experience.description}</p>

        {experience.skills && experience.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="flex items-center gap-1.5 border border-border px-2.5 py-1 text-xs text-foreground bg-secondary/50"
              >
                {skill.logo && (
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    width={12}
                    height={12}
                    className="h-3 w-3 object-contain"
                  />
                )}
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
