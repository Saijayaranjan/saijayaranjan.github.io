"use client"

import { motion } from "framer-motion"
import { SkillCard } from "@/components/skill-card"
import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="section-container border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-24">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-32">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="w-full">
          {skills.length > 0 ? (
            <div className="grid grid-cols-2 gap-px bg-border border border-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="p-8 border border-border text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">Skills information will be added soon.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
