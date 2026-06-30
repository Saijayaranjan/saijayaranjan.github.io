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
    <footer className="relative border-t border-border py-12">
      <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            Srikanth<span className="text-muted-foreground">.</span>
          </Link>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Sai Srikanth Jayaranjan
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:bg-foreground hover:text-background"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <div className="w-px h-6 bg-border mx-2" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 px-4 items-center gap-2 border border-border bg-card text-xs font-mono uppercase tracking-widest text-muted-foreground transition-all hover:bg-foreground hover:text-background"
            aria-label="Back to top"
          >
            Top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
