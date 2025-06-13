"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  opacity: number
}

interface ParticlesBackgroundProps {
  particleCount?: number
  particleColor?: string
  minSize?: number
  maxSize?: number
  speed?: number
  opacity?: number
  connectParticles?: boolean
  connectDistance?: number
}

export function ParticlesBackground({
  particleCount = 60,
  particleColor = "#3b82f6",
  minSize = 0.5,
  maxSize = 1.5,
  speed = 0.2,
  opacity = 0.4,
  connectParticles = true,
  connectDistance = 160,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Recreate particles when resizing
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        color: particleColor,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: 0.1 + Math.random() * opacity,
      }))
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off the walls
        if (particle.x + particle.size > canvas.width || particle.x - particle.size < 0) {
          particle.speedX = -particle.speedX
        }
        if (particle.y + particle.size > canvas.height || particle.y - particle.size < 0) {
          particle.speedY = -particle.speedY
        }

        // Mouse interaction - subtle effect
        if (mousePosition) {
          const mx = mousePosition.x
          const my = mousePosition.y
          const dx = particle.x - mx
          const dy = particle.y - my
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 120

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            const directionX = dx / distance || 0
            const directionY = dy / distance || 0
            particle.x += directionX * force * 1.5
            particle.y += directionY * force * 1.5
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Connect particles
        if (connectParticles) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const otherParticle = particlesRef.current[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectDistance) {
              const opacity = (1 - distance / connectDistance) * 0.3 * particle.opacity * otherParticle.opacity
              ctx.beginPath()
              ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, "0")}`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [particleCount, particleColor, minSize, maxSize, speed, opacity, connectParticles, connectDistance])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-2] pointer-events-none" aria-hidden="true" />
}
