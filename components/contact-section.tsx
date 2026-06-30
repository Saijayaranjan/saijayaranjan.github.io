"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Saijayaranjan@icloud.com",
    href: "mailto:Saijayaranjan@icloud.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saijayaranjan",
    href: "https://www.linkedin.com/in/saijayaranjan/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Saijayaranjan",
    href: "https://github.com/Saijayaranjan",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "instagram.com/saijayaranjan",
    href: "https://instagram.com/saijayaranjan",
  },
]

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/20"

export function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <SectionHeading
        eyebrow="// contact"
        title="Get in Touch"
        description="Have a project in mind or just want to say hello? My inbox is always open."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* Contact info */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {contacts.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card gradient-border group flex items-center gap-4 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="truncate text-sm font-medium text-foreground/90 transition-colors group-hover:text-primary">
                  {c.value}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          className="glass-card gradient-border flex flex-col gap-4 p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input id="name" className={inputClass} placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input id="email" type="email" className={inputClass} placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className={`${inputClass} min-h-[130px] resize-none`}
              placeholder="Tell me about your idea..."
            />
          </div>
          <button type="submit" className="btn-primary mt-2 w-full">
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
