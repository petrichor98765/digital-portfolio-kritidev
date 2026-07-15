import { motion } from 'framer-motion'

export const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm font-medium text-primary hover:border-primary/50 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCategory
