"use client"

import { motion } from "framer-motion"
import { Database, Code2, Brain, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Database,
    title: "Big Data Analysis",
    description: "Processing and deriving insights from large-scale datasets with scalable pipelines.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Building full-stack web applications with modern tooling.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Applying ML techniques to solve complex, data-driven problems.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-container border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-24">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-32">
            About
          </h2>
        </div>

        <div className="space-y-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-primary">
              <Sparkles className="h-6 w-6" />
              <h3 className="text-2xl font-semibold text-foreground">My Background</h3>
            </div>
            
            <div className="prose prose-invert prose-lg text-muted-foreground max-w-3xl leading-relaxed">
              <p>
                I am a Computer Science student at <strong className="text-foreground font-medium">SRM Institute of Science and Technology</strong>, specializing in Big Data Analysis. My academic journey has built strong analytical skills and a deep understanding of data processing principles.
              </p>
              <p className="mt-6">
                I am passionate about leveraging data to derive meaningful insights and create impactful solutions, with a particular focus on scalable systems. Outside academics, I love hackathons, personal projects, and exploring the data science ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-3 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <item.icon className="h-6 w-6 text-foreground" />
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
