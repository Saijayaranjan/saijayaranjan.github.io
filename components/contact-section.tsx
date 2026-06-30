"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react"

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
  "w-full border-b border-border bg-transparent px-0 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-foreground"

export function ContactSection() {
  return (
    <section id="contact" className="section-container border-t border-border mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-24">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-32">
            Contact
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-px bg-border border border-border"
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
                className="group flex items-center gap-6 p-6 bg-card transition-colors hover:bg-secondary"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="truncate mt-1 text-sm font-medium text-foreground transition-colors">
                    {c.value}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            className="flex flex-col gap-6 p-8 border border-border bg-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid gap-1">
              <input id="name" className={inputClass} placeholder="Name" />
            </div>
            <div className="grid gap-1">
              <input id="email" type="email" className={inputClass} placeholder="Email address" />
            </div>
            <div className="grid gap-1">
              <textarea
                id="message"
                className={`${inputClass} min-h-[120px] resize-none`}
                placeholder="Message details..."
              />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
