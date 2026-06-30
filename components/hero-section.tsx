"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"
import { ProfileCard } from "@/components/profile-card"

const roles = ["Big Data Analyst", "Full-Stack Developer", "Hackathon Builder", "CS Undergraduate"]

const stats = [
  { value: "2028", label: "Graduating" },
  { value: "3+", label: "Projects shipped" },
  { value: "5+", label: "Technologies" },
]

const socials = [
  { href: "https://github.com/Saijayaranjan", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/saijayaranjan/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:Saijayaranjan@icloud.com", label: "Email", icon: Mail },
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container relative flex min-h-screen items-center py-28 md:py-32">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_400px]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wide text-foreground/80">
              Open to internships &amp; collaborations
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Sai Srikanth
              <br />
              <span className="text-primary">Jayaranjan</span>
            </motion.h1>

            <motion.div
              className="flex h-9 items-center gap-3 text-xl font-medium text-foreground/90 sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-mono text-primary">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="max-w-xl text-base text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Computer Science student at SRM Institute of Science and Technology, specializing in Big Data Analysis.
              I turn raw data into meaningful, scalable solutions.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button onClick={() => smoothScrollTo("projects")} className="btn-primary group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => smoothScrollTo("contact")} className="btn-outline">
              Get in Touch
            </button>
            <div className="flex gap-2 sm:ml-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 border-t border-white/[0.06] pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden h-[500px] lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfileCard
            name="Sai Srikanth"
            title="Computer Science Student"
            handle="saijayaranjan"
            status="SRMIST, 2028"
            contactText="Contact Me"
            avatarUrl="/profile-avatar-3d.png"
            showUserInfo={true}
            enableTilt={true}
            subtle={true}
            onContactClick={() => smoothScrollTo("contact")}
          />
        </motion.div>
      </div>
    </section>
  )
}
