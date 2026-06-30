"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const navItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    navItems.forEach((item) => {
      const el = document.getElementById(item.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/90 border-b border-border backdrop-blur-md" : "bg-transparent"}`}>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            Srikanth<span className="text-muted-foreground">.</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(item.href)
                }}
                className={`relative text-sm font-medium transition-colors ${
                  active === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/resume.pdf"
              download
              className="hidden items-center gap-2 border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background md:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>

            <button
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-4 px-6 pt-32">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Link
                    href={`#${item.href}`}
                    className="block text-4xl font-heading font-semibold tracking-tighter transition-colors hover:text-muted-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      smoothScrollTo(item.href)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/resume.pdf"
                download
                className="btn-primary mt-8 w-full uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
