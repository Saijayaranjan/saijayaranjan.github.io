"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="// portfolio"
        title="Featured Projects"
        description="A selection of things I've built — from academic tools to hackathon wins."
      />

      <div className="mx-auto mt-14 max-w-6xl">
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
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
            <p className="text-muted-foreground">Project information will be added soon.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
