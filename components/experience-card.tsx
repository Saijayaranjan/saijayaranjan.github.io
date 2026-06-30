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
      className="relative pl-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline node */}
      <motion.div
        className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-background"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
      </motion.div>

      <div className="glass-card gradient-border p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-primary">{experience.date}</span>
        <h3 className="mt-1 font-heading text-xl font-semibold">{experience.title}</h3>

        <div className="mt-2 flex items-center gap-3">
          {experience.logo && (
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10">
              <Image
                src={experience.logo || "/placeholder.svg"}
                alt={experience.company}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          )}
          <p className="text-sm font-medium text-foreground/90">{experience.company}</p>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">{experience.description}</p>

        {experience.skills && experience.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary/90"
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
