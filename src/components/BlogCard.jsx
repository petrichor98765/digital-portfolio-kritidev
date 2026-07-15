import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '../utils/helpers'

export const BlogCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/writing/${post.slug}`}>
        <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
          {/* Date */}
          <div className="text-xs font-medium text-primary mb-3">
            {formatDate(post.date)}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read time & link */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            {post.readTime && (
              <span className="text-xs text-muted-foreground">
                {post.readTime} min read
              </span>
            )}
            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              Read
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogCard
