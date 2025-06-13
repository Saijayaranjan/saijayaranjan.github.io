"use client"

import type React from "react"
import { useEffect, useRef, useCallback, useState } from "react"
import "./profile-card.css"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  handle: string
  status: string
  contactText: string
  avatarUrl: string
  showUserInfo?: boolean
  enableTilt?: boolean
  onContactClick?: () => void
  subtle?: boolean
}

export function ProfileCard({
  avatarUrl = "/placeholder.svg?height=400&width=400",
  name = "Sai Srikanth",
  title = "Computer Science Student",
  handle = "saijayaranjan",
  status = "SRM, 2028",
  contactText = "Contact Me",
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
  subtle = false,
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const updateCardTransform = useCallback(
    (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
      const width = card.clientWidth
      const height = card.clientHeight

      const percentX = Math.min(Math.max((100 / width) * offsetX, 0), 100)
      const percentY = Math.min(Math.max((100 / height) * offsetY, 0), 100)

      const centerX = percentX - 50
      const centerY = percentY - 50

      // Reduce tilt intensity if subtle mode is enabled
      const tiltFactor = subtle ? 0.5 : 1

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${35 + (percentX / 100) * 30}%`,
        "--background-y": `${35 + (percentY / 100) * 30}%`,
        "--pointer-from-center": `${Math.min(Math.hypot(percentY - 50, percentX - 50) / 50, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${-((centerX / 5) * tiltFactor).toFixed(3)}deg`,
        "--rotate-y": `${((centerY / 4) * tiltFactor).toFixed(3)}deg`,
        "--card-opacity": subtle ? "0.8" : "1",
      }

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value)
      })
    },
    [subtle],
  )

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!enableTilt) return
      const card = cardRef.current
      const wrap = wrapRef.current

      if (!card || !wrap) return

      const rect = card.getBoundingClientRect()
      updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap)
    },
    [enableTilt, updateCardTransform],
  )

  const handlePointerEnter = useCallback(() => {
    if (!enableTilt) return
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap) return

    wrap.classList.add("active")
    card.classList.add("active")
  }, [enableTilt])

  const handlePointerLeave = useCallback(() => {
    if (!enableTilt) return
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap) return

    wrap.classList.remove("active")
    card.classList.remove("active")

    // Reset to center
    const properties = {
      "--pointer-x": "50%",
      "--pointer-y": "50%",
      "--background-x": "50%",
      "--background-y": "50%",
      "--pointer-from-center": "0",
      "--pointer-from-top": "0.5",
      "--pointer-from-left": "0.5",
      "--rotate-x": "0deg",
      "--rotate-y": "0deg",
    }

    Object.entries(properties).forEach(([property, value]) => {
      wrap.style.setProperty(property, value)
    })
  }, [enableTilt])

  useEffect(() => {
    if (!mounted || !enableTilt) return

    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap) return

    // Initial setup
    wrap.style.setProperty("--card-opacity", subtle ? "0.8" : "1")

    if (subtle) {
      wrap.classList.add("subtle")
    }

    return () => {
      wrap.style.setProperty("--card-opacity", "0")
    }
  }, [mounted, enableTilt, subtle])

  const handleContactClick = useCallback(() => {
    if (onContactClick) onContactClick()
  }, [onContactClick])

  if (!mounted) return null

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${subtle ? "pc-card-wrapper--subtle" : ""}`}
      style={
        {
          "--behind-gradient":
            "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",
          "--inner-gradient": "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
        } as React.CSSProperties
      }
    >
      <section
        ref={cardRef}
        className="pc-card"
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-avatar-content">
            <Image
              className="avatar"
              src={avatarUrl || "/placeholder.svg"}
              alt={`${name} avatar`}
              width={400}
              height={400}
              priority
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <Image src={avatarUrl || "/placeholder.svg"} alt={`${name} mini avatar`} width={48} height={48} />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
