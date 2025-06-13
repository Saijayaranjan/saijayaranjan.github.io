"use client"

import type React from "react"
import "./star-border.css"

interface StarBorderProps {
  as?: React.ElementType
  className?: string
  color?: string
  speed?: string
  children: React.ReactNode
  [key: string]: any
}

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "#6366f1",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          /* Removed inline opacity to use the CSS class value */
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          /* Removed inline opacity to use the CSS class value */
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  )
}

export default StarBorder
