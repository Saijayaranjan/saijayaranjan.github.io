"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-24">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-32">
            Selected Work
          </h2>
        </div>

        <div className="w-full">
          {projects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
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
              <p className="text-muted-foreground">Project information will be added soon.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
