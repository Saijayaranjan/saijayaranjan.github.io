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
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border border-white/10 bg-background/70 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="font-heading text-lg font-bold tracking-tight">
            Srikanth<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(item.href)
                }}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10 ring-1 ring-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/resume.pdf"
              download
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary md:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-2 px-6 pt-28">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Link
                    href={`#${item.href}`}
                    className="block rounded-xl px-4 py-3 text-2xl font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
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
                className="btn-primary mt-4 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
