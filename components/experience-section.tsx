"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/data/experiences"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container bg-gradient-to-b from-background to-background/95">
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-description">My professional journey so far.</p>
      </motion.div>

      <div className="mx-auto max-w-4xl mt-12 space-y-8">
        {experiences.length > 0 ? (
          experiences.map((experience, index) => <ExperienceCard key={index} experience={experience} index={index} />)
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Fresher</h3>
            <p className="text-muted-foreground">
              Currently seeking opportunities to apply my skills and knowledge in a professional setting.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
