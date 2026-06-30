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
      className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-muted-foreground/30"
    >
      {/* Image */}
      <div 
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-border cursor-pointer"
        onClick={openPrimary}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") openPrimary()
        }}
      >
        <Image
          src={project.image || "/placeholder.svg?height=225&width=400"}
          alt={project.title}
          width={400}
          height={250}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover action links */}
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-10 w-10 items-center justify-center bg-background/90 text-foreground transition-colors hover:bg-foreground hover:text-background"
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
              className="flex h-10 w-10 items-center justify-center bg-background/90 text-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 
            className="font-heading text-2xl font-semibold cursor-pointer group-hover:text-foreground"
            onClick={openPrimary}
          >
            {project.title}
          </h3>
          {primaryUrl && (
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground font-light">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-foreground uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
