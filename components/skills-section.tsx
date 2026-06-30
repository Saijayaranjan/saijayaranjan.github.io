"use client"

import { motion } from "framer-motion"
import { SkillCard } from "@/components/skill-card"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="// tech stack"
        title="Skills & Tools"
        description="Technologies and tools I work with."
      />

      <div className="mx-auto mt-14 max-w-4xl">
        {skills.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="glass-card p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">Skills information will be added soon.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
