import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Markdown from 'react-markdown'
import { Button } from '../components'
import { updateMetaTags } from '../utils/helpers'
import { projects } from '../content/projects'

export const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      updateMetaTags({
        title: project.title,
        description: project.description,
      })
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button>
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 px-4 bg-card/50 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium">
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {p.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
