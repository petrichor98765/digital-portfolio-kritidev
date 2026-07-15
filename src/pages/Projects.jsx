import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, ProjectCard } from '../components'
import { updateMetaTags } from '../utils/helpers'
import { projects } from '../content/projects'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    updateMetaTags({
      title: 'Projects',
      description: 'Explore my portfolio of web development projects.',
    })
  }, [])

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort()

  // Filter projects by tag
  const handleTagFilter = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null)
      setFilteredProjects(projects)
    } else {
      setActiveTag(tag)
      setFilteredProjects(projects.filter((project) => project.tags.includes(tag)))
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A selection of projects I've built, showcasing my skills in Artificial Intelligence and
              full stack development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            FILTER BY TECHNOLOGY
          </h3>
          <div className="flex flex-wrap gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTag(null)
                setFilteredProjects(projects)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              All Projects
            </motion.button>

            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTag}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No projects found with the selected tag.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
