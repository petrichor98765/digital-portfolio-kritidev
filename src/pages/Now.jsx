import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { updateMetaTags } from '../utils/helpers'

export const Now = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Now',
      description: "What I'm currently working on and learning.",
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-4 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              What I'm Doing Now
            </h1>

            <p className="text-lg text-muted-foreground mb-2">
              A snapshot of what I'm currently focused on—professionally,
              academically, and personally.
            </p>

            <p className="text-sm text-muted-foreground">
              Last updated: July 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          {/* Current Work */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              🚀 Current Focus
            </h2>

            <div className="space-y-4">
              <div className="p-5 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  AI Engineering at Accenture
                </h3>

                <p className="text-muted-foreground">
                  Working as a Performance Engineer, building AI-assisted
                  engineering workflows while working with Kubernetes,
                  GitHub Actions, cloud infrastructure, and DevOps automation
                  for enterprise applications.
                </p>
              </div>

              <div className="p-5 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  Parkinson's Disease Detection Research
                </h3>

                <p className="text-muted-foreground">
                  Continuing research on multimodal Parkinson's disease
                  detection by combining typing behavior, gait analysis, and
                  voice signals. Currently focused on improving model
                  performance and preparing the work for publication.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Learning */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              📚 Currently Learning
            </h2>

            <div className="space-y-2 text-muted-foreground">
              <p>• Agentic AI and autonomous workflows</p>
              <p>• Advanced Retrieval-Augmented Generation (RAG)</p>
              <p>• Multimodal deep learning architectures</p>
              <p>• MLOps and production deployment of AI systems</p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              🎯 Exploring
            </h2>

            <div className="space-y-2 text-muted-foreground">
              <p>• Healthcare AI and medical machine learning</p>
              <p>• Large Language Models and AI agents</p>
              <p>• Computer vision and multimodal learning</p>
              <p>• Building scalable AI applications</p>
            </div>
          </motion.div>

          {/* Reading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              📖 Reading
            </h2>

            <div className="space-y-2 text-muted-foreground">
              <p>• Recent papers on multimodal learning and healthcare AI</p>
              <p>• Research on large language models and AI agents</p>
              <p>• Kubernetes and cloud-native engineering documentation</p>
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              🎯 Goals
            </h2>

            <div className="space-y-3">
              <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground mb-1">
                  Publish AI Research
                </p>

                <p className="text-sm text-muted-foreground">
                  Continue developing my Parkinson's disease detection research
                  and submit it for publication.
                </p>
              </div>

              <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground mb-1">
                  Build More AI Projects
                </p>

                <p className="text-sm text-muted-foreground">
                  Continue exploring LLMs, computer vision, and intelligent
                  automation through hands-on projects.
                </p>
              </div>

              <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground mb-1">
                  Grow as an AI Engineer
                </p>

                <p className="text-sm text-muted-foreground">
                  Deepen my expertise in machine learning, cloud infrastructure, and
                  AI engineering while tackling increasingly complex real-world problems.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Now