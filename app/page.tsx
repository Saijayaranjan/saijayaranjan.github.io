"use client"

import { useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">

      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-primary"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navigation />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
