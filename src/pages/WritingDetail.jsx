import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Markdown from 'react-markdown'
import { Button } from '../components'
import { updateMetaTags, formatDate } from '../utils/helpers'
import { getPostBySlug, posts } from '../content/writing'

export const WritingDetail = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (post) {
      updateMetaTags({
        title: post.title,
        description: post.excerpt,
      })
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/writing">
            <Button>
              <ArrowLeft size={20} className="mr-2" />
              Back to Writing
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 px-4 bg-card/50 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/writing"
              className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Writing
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <article className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic">
            <Markdown>{post.body}</Markdown>
          </article>
        </motion.div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-card/50 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/writing/${relatedPost.slug}`}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-all"
                  >
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {relatedPost.excerpt}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default WritingDetail
