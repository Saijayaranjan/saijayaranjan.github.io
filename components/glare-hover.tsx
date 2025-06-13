"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./glare-hover.css"

interface GlareHoverProps {
  children: React.ReactNode
  glareColor?: string
  glareOpacity?: number
  glareAngle?: number
  glareSize?: number
  transitionDuration?: number
  playOnce?: boolean
  className?: string
  subtle?: boolean
}

export function GlareHover({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = "",
  subtle = false,
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rgba = `rgba(${hexToRgb(glareColor)}, ${glareOpacity})`

    container.style.setProperty("--gh-bg", "transparent")
    container.style.setProperty("--gh-border", "rgba(255, 255, 255, 0.1)")
    container.style.setProperty("--gh-br", "8px")
    container.style.setProperty("--gh-angle", `${glareAngle}deg`)
    container.style.setProperty("--gh-rgba", rgba)
    container.style.setProperty("--gh-size", `${glareSize}%`)
    container.style.setProperty("--gh-duration", `${transitionDuration}ms`)

    if (subtle) {
      container.classList.add("glare-hover--subtle")
    }
  }, [glareColor, glareOpacity, glareAngle, glareSize, transitionDuration, subtle])

  return (
    <motion.div
      ref={containerRef}
      className={`glare-hover ${playOnce ? "glare-hover--play-once" : ""} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: subtle ? 1.01 : 1.02 }}
      whileTap={{ scale: subtle ? 0.99 : 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, "")

  // Parse the hex values
  const bigint = Number.parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r}, ${g}, ${b}`
}
