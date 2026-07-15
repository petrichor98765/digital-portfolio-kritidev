import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { updateMetaTags } from '../utils/helpers'

export const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'About',
      description: 'Learn more about my background, interests, and journey in AI and software engineering.',
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-14 pb-8 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              I'm a Software Engineer passionate about building intelligent
              systems that combine artificial intelligence, research, and
              scalable software engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6 pb-8 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Story */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">My Journey</h2>

            <p className="text-lg text-muted-foreground">
              I'm currently a Performance Engineer at Accenture, where I work on
              cloud infrastructure, DevOps automation, and AI-assisted
              engineering workflows for enterprise applications. Before that, I
              contributed to the development of legal AI systems during my
              internship at Syncwave Automations.
            </p>

            <p className="text-lg text-muted-foreground">
              Beyond my professional work, I'm deeply interested in artificial
              intelligence and machine learning research. My projects span
              healthcare AI, computer vision, natural language processing, and
              large language models, with a focus on solving meaningful
              real-world problems through intelligent software.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Journey So Far</h2>

            <div className="relative border-l-2 border-primary/30 ml-3 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  2021 - 2025 • B.Tech in Computer Science
                </h3>
                <p className="text-muted-foreground">
                  Graduated from Vellore Institute of Technology - AP with a strong
                  foundation in software engineering, machine learning, and artificial
                  intelligence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  2024 – 2025 • Software Intern
                </h3>
                <p className="text-muted-foreground">
                  Joined Syncwave Automations, contributing to a legal-domain LLM,
                  designing PostgreSQL schemas, and building interfaces for AI-powered
                  legal applications.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  2025 • Joined Accenture
                </h3>
                <p className="text-muted-foreground">
                  Started as an Advanced App Engineering Analyst, working with Python,
                  data analytics, backend development, and machine learning.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  2026 • Performance Engineer
                </h3>
                <p className="text-muted-foreground">
                  Currently working with Vertex Inc. through Accenture on Kubernetes,
                  DevOps automation, GitHub Actions, cloud infrastructure, and
                  AI-assisted engineering workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beyond Work */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Beyond Engineering
            </h2>

            <p className="text-lg text-muted-foreground">
              When I'm not coding or experimenting with new AI ideas, you'll
              usually find me:
            </p>

            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>🤖 Reading the latest AI and machine learning research</li>
              <li>💡 Building side projects to explore new technologies</li>
              <li>💪 Strength training and staying active</li>
              <li>☕ Enjoying coffee while brainstorming new ideas</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Let's Connect
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Whether it's AI, machine learning, software engineering, research,
              or an exciting new idea, I'm always open to meaningful
              conversations and collaborations.
            </p>

            <a
              href="mailto:kritich2712@gmail.com"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default About