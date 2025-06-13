"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"
import { ProfileCard } from "@/components/profile-card"

export function HeroSection() {
  return (
    <section className="container py-20 md:py-32 lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4">
                Computer Science Student
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-glow-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Sai Srikanth Jayaranjan
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Computer Science student at SRM Institute of Science and Technology, specializing in Big Data Analysis and
              graduating in 2028.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="professional-button professional-button-primary"
              onClick={() => smoothScrollTo("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="professional-button professional-button-outline"
              onClick={() => smoothScrollTo("contact")}
            >
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="https://github.com/Saijayaranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/saijayaranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/saijayaranjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:Saijayaranjan@icloud.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:block h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfileCard
            name="Sai Srikanth"
            title="Computer Science Student"
            handle="saijayaranjan"
            status="SRM IST, 2028"
            contactText="Contact Me"
            avatarUrl="/placeholder.svg?height=400&width=400"
            showUserInfo={true}
            enableTilt={true}
            subtle={true}
            onContactClick={() => {
              smoothScrollTo("contact")
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
