"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorEffectProps {
  size?: number
  blur?: number
  opacity?: number
  color?: string
}

export function CursorEffect({ size = 150, blur = 50, opacity = 0.5, color = "primary" }: CursorEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed pointer-events-none z-50 rounded-full bg-${color}/10 mix-blend-screen`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            filter: `blur(${blur}px)`,
          }}
          animate={{
            x: mousePosition.x - size / 2,
            y: mousePosition.y - size / 2,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  )
}
