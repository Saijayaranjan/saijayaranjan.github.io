"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, ArrowUp } from "lucide-react"

const socials = [
  { href: "https://github.com/Saijayaranjan", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/saijayaranjan/", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com/saijayaranjan", label: "Instagram", icon: Instagram },
  { href: "mailto:Saijayaranjan@icloud.com", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/[0.06] py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            Srikanth<span className="text-primary">.</span>
          </Link>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sai Srikanth Jayaranjan. Built with Next.js &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="icon-btn"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
