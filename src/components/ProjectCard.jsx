import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
          {/* Image */}
          {project.image && (
            <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Link */}
            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              View Project
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
