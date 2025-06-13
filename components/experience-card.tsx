"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/types/experience"
import Image from "next/image"

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-3 border-l-2 border-primary/20 pl-6 relative p-4 rounded-r-lg hover:bg-primary/5 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="absolute -left-3 top-5 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="h-3 w-3 rounded-full bg-primary" />
      </motion.div>

      <div className="flex items-center gap-2 flex-wrap">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">{experience.date}</Badge>
        <h3 className="text-xl font-semibold">{experience.title}</h3>
      </div>

      <div className="flex items-center gap-3">
        {experience.logo && (
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/50">
            <Image
              src={experience.logo || "/placeholder.svg"}
              alt={experience.company}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        )}
        <p className="text-base font-medium">{experience.company}</p>
      </div>

      <p className="text-muted-foreground">{experience.description}</p>

      {experience.skills && experience.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.05 + 0.3 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="flex items-center gap-1 border-primary/10 bg-primary/5">
                {skill.logo && (
                  <div className="relative h-3 w-3 overflow-hidden">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      width={12}
                      height={12}
                      className="object-contain"
                    />
                  </div>
                )}
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
