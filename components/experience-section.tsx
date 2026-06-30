"use client"

import { motion } from "framer-motion"
import { Briefcase, Rocket } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/data/experiences"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        eyebrow="// experience"
        title="Experience"
        description="My professional journey so far."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        {experiences.length > 0 ? (
          <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-primary/25">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="glass-card gradient-border flex flex-col items-center gap-5 p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Rocket className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-semibold">Ready to launch</h3>
              <p className="mx-auto max-w-md text-muted-foreground">
                Actively seeking internships and opportunities to apply my skills in a professional setting. The next
                chapter starts here.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
              <Briefcase className="h-3.5 w-3.5" />
              Open to internships
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
