"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollY } = useScroll()
  const [scrollPosition, setScrollPosition] = useState(0)

  // Update scroll position for canvas animation
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest)
    })
  }, [scrollY])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties - subtle professional look
    const gridSize = 50
    const lineWidth = 0.5
    const primaryColor = "rgba(59, 130, 246, 0.12)" // More subtle blue
    const secondaryColor = "rgba(59, 130, 246, 0.06)" // Even more subtle

    // Animation properties
    let animationFrameId: number
    let angle = 0
    const baseSpeed = 0.0003 // Slower animation for more professional look

    const drawGrid = () => {
      if (!canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate grid dimensions with perspective
      const perspectiveOriginX = canvas.width / 2
      const perspectiveOriginY = canvas.height / 2

      // Calculate scroll-based offsets - more subtle
      const scrollFactor = scrollPosition / 8000 // Less sensitive
      const scrollOffsetX = Math.sin(scrollPosition / 1500) * 10 // Reduced movement
      const scrollOffsetY = scrollPosition * 0.02 // Reduced movement

      // Apply rotation and translation based on scroll
      ctx.save()
      ctx.translate(perspectiveOriginX + scrollOffsetX, perspectiveOriginY)
      ctx.rotate(angle + scrollFactor)
      ctx.translate(-(perspectiveOriginX + scrollOffsetX), -(perspectiveOriginY + scrollOffsetY * 0.1))

      // Draw horizontal lines with parallax effect
      for (let y = -gridSize; y <= canvas.height + gridSize; y += gridSize) {
        // Apply subtle parallax to y position based on scroll
        const parallaxY = y + ((scrollPosition * 0.01) % gridSize)

        ctx.beginPath()
        ctx.moveTo(0, parallaxY)
        ctx.lineTo(canvas.width, parallaxY)
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = y % (gridSize * 2) === 0 ? primaryColor : secondaryColor
        ctx.stroke()
      }

      // Draw vertical lines with parallax effect
      for (let x = -gridSize; x <= canvas.width + gridSize; x += gridSize) {
        // Apply subtle parallax to x position based on scroll
        const parallaxX = x + ((scrollPosition * 0.01) % gridSize)

        ctx.beginPath()
        ctx.moveTo(parallaxX, 0)
        ctx.lineTo(parallaxX, canvas.height)
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = x % (gridSize * 2) === 0 ? primaryColor : secondaryColor
        ctx.stroke()
      }

      ctx.restore()

      // Update angle for next frame - speed varies with scroll
      const dynamicSpeed = baseSpeed + Math.abs(scrollY.getVelocity()) / 100000
      angle += dynamicSpeed

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [scrollPosition, scrollY])

  // Create a parallax effect for the canvas position
  const yOffset = useTransform(scrollY, [0, 1000], [0, -50]) // Reduced movement

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="opacity-100"
        style={{ y: yOffset }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}
