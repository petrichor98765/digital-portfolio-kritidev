import { motion } from 'framer-motion'

export const SectionTitle = ({ children, subtitle, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle
