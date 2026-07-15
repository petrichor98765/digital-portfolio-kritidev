import { motion } from 'framer-motion'

export const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-card border border-border rounded-xl p-6"
    >
      {/* Timeline dot */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background" />

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {experience.title}
        </h3>
        <p className="text-primary text-sm font-medium">{experience.company}</p>
      </div>

      <div className="text-xs text-muted-foreground mb-3">
        {experience.period}
      </div>

      {experience.description && (
        <p className="text-muted-foreground text-sm mb-4">
          {experience.description}
        </p>
      )}

      {experience.achievements && (
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-primary">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default ExperienceCard
