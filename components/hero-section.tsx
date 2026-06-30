"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const socials = [
  { href: "https://github.com/Saijayaranjan", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/saijayaranjan/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:Saijayaranjan@icloud.com", label: "Email", icon: Mail },
]

export function HeroSection() {
  return (
    <section className="container relative flex min-h-screen flex-col justify-center py-20 md:py-32">
      <motion.div
        className="max-w-4xl space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="space-y-6">
          <p className="eyebrow">Portfolio &mdash; 2028</p>
          <h1 className="section-title text-foreground">
            Sai Srikanth Jayaranjan
          </h1>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-muted-foreground">
            Big Data Analyst &amp; Full-Stack Developer
          </h2>
        </div>

        <p className="max-w-2xl text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
          Computer Science student at SRM Institute of Science and Technology. I specialize in turning raw data into meaningful, scalable solutions with an emphasis on clarity and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <button onClick={() => smoothScrollTo("projects")} className="btn-primary group">
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-8 md:left-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Status</span>
          <span className="text-sm font-medium">Open to Internships</span>
        </div>
      </motion.div>
    </section>
  )
}
