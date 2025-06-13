"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="section-container bg-gradient-to-b from-background to-background/95">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a Computer Science student at SRM Institute of Science and Technology, specializing in Big Data
            Analysis. My academic journey has equipped me with strong analytical skills and a deep understanding of data
            processing principles.
          </p>
          <p className="text-lg leading-relaxed">
            I'm passionate about leveraging data to derive meaningful insights and create impactful solutions. My
            technical expertise includes data analysis, machine learning, and software development, with a particular
            focus on creating scalable solutions for complex data problems.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of academics, I enjoy participating in hackathons, working on personal projects, and exploring new
            technologies in the data science ecosystem. I'm constantly looking for opportunities to apply my skills and
            knowledge to real-world problems.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
