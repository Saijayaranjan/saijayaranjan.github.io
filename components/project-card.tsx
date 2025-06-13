"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="card-hover"
    >
      <Card className="overflow-hidden h-full flex flex-col border-0 bg-transparent hover:border hover:border-border/50 hover:bg-card/50 hover:backdrop-blur-sm transition-all duration-300">
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full">
            <Image
              src={project.image || "/placeholder.svg?height=225&width=400"}
              alt={project.title}
              width={400}
              height={225}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-2 right-2 flex gap-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 hover:bg-background p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 hover:bg-background p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 + techIndex * 0.05 + 0.3 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
