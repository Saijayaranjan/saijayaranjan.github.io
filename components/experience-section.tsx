"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/data/experiences"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-24">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-32">
            Experience
          </h2>
        </div>

        <div className="w-full max-w-3xl">
          {experiences.length > 0 ? (
            <div className="relative border-l border-border ml-2 pl-4">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex flex-col items-start gap-4 p-8 border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-medium tracking-tight">Ready to launch</h3>
              <p className="max-w-md text-muted-foreground text-sm">
                Actively seeking internships and opportunities to apply my skills in a professional setting.
              </p>
              <div className="mt-4 flex items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-foreground bg-secondary">
                <Briefcase className="h-4 w-4" />
                Open to internships
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
