"use client"

import { motion } from "framer-motion"
import { SkillCard } from "@/components/skill-card"
import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-description">Technologies and tools I'm proficient in.</p>
      </motion.div>

      <div className="mx-auto max-w-5xl mt-12">
        {skills.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center p-8 text-center"
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
