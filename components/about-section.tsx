"use client"

import { motion } from "framer-motion"
import { Database, Code2, Brain, GraduationCap, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const highlights = [
  {
    icon: Database,
    title: "Big Data Analysis",
    description:
      "Specializing in processing and deriving insights from large-scale datasets with a focus on scalable pipelines.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Building full-stack web applications with React, Next.js, and modern backend tooling.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Applying ML techniques to solve complex, data-driven problems and uncover patterns.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="// about me"
        title="About Me"
        description="Driven by curiosity, building with data."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
        {/* Bio card */}
        <motion.div
          className="glass-card gradient-border flex flex-col justify-between gap-6 p-8 lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="space-y-4">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-base leading-relaxed text-foreground/90">
              I&apos;m a Computer Science student at{" "}
              <span className="font-medium text-primary">SRM Institute of Science and Technology</span>, specializing in
              Big Data Analysis. My academic journey has built strong analytical skills and a deep understanding of data
              processing principles.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m passionate about leveraging data to derive meaningful insights and create impactful solutions —
              with a particular focus on scalable systems. Outside academics, I love hackathons, personal projects, and
              exploring the data-science ecosystem.
            </p>
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          className="glass-card gradient-border flex flex-col justify-between gap-6 p-8 lg:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Education</p>
            <h3 className="font-heading text-xl font-semibold">B.Tech, Computer Science</h3>
            <p className="text-sm text-muted-foreground">SRM Institute of Science &amp; Technology</p>
            <div className="flex items-center gap-3 pt-2">
              <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-foreground/80">
                Big Data Analysis
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-foreground/80">Class of 2028</span>
            </div>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card gradient-border group flex flex-col gap-4 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
