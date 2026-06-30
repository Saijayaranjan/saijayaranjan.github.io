"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryUrl = project.demoUrl || project.githubUrl

  const openPrimary = () => {
    if (primaryUrl) window.open(primaryUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      onClick={openPrimary}
      onKeyDown={(e) => {
        if (e.key === "Enter") openPrimary()
      }}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title}`}
      className="glass-card gradient-border group flex h-full cursor-pointer flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=225&width=400"}
          alt={project.title}
          width={400}
          height={225}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover action links */}
        <div className="absolute right-3 top-3 flex translate-y-1 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background/80 text-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background/80 text-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-xl font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          {primaryUrl && (
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-primary" />
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
