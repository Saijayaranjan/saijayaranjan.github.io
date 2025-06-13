"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container bg-gradient-to-b from-background/95 to-background">
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-description">Some of my recent projects that showcase my skills and interests.</p>
      </motion.div>

      <div className="mx-auto md:max-w-[64rem] mt-12">
        {projects.length > 0 ? (
          <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
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
            <p className="text-muted-foreground">Project information will be added soon.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
