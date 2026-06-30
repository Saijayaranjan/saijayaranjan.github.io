"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-foreground">{title}</h2>
      {description && (
        <p className={`section-description ${align === "left" ? "mx-0" : ""}`}>{description}</p>
      )}
    </motion.div>
  )
}
