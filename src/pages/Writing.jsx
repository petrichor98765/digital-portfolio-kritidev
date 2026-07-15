import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, BlogCard } from '../components'
import { updateMetaTags } from '../utils/helpers'
import { posts } from '../content/writing'

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

export const Writing = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    updateMetaTags({
      title: 'Writing',
      description: 'Articles and thoughts on web development and technology.',
    })
  }, [])

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort()

  // Filter posts by tag
  const handleTagFilter = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null)
      setFilteredPosts(posts)
    } else {
      setActiveTag(tag)
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)))
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Writing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and insights about web development,
              design patterns, and modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            FILTER BY TOPIC
          </h3>
          <div className="flex flex-wrap gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTag(null)
                setFilteredPosts(posts)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              All Articles
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

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTag}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <BlogCard post={post} />
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
                No articles found with the selected tag.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Writing
