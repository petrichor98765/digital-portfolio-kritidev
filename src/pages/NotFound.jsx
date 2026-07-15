import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home as HomeIcon } from 'lucide-react'
import { Button } from '../components'
import { updateMetaTags } from '../utils/helpers'

export const NotFound = () => {
  useEffect(() => {
    updateMetaTags({
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl w-full"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-9xl md:text-[150px] font-bold text-gradient mb-4">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! It looks like you've wandered into the void. The page you're
            looking for doesn't exist.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-muted-foreground mb-4">Maybe try one of these:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <div className="font-semibold text-foreground">Home</div>
              <div className="text-xs text-muted-foreground">Go back home</div>
            </Link>
            <Link
              to="/projects"
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <div className="font-semibold text-foreground">Projects</div>
              <div className="text-xs text-muted-foreground">View my work</div>
            </Link>
            <Link
              to="/writing"
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <div className="font-semibold text-foreground">Writing</div>
              <div className="text-xs text-muted-foreground">Read articles</div>
            </Link>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/">
            <Button size="lg">
              <HomeIcon size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
