import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import {
  SectionTitle,
  ProjectCard,
  BlogCard,
  ExperienceCard,
  SkillCategory,
  Button,
} from '../components'
import { updateMetaTags } from '../utils/helpers'
import { projects } from '../content/projects'
import { getFeaturedPosts } from '../content/writing'

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

export const Home = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Home',
      description:
        'Full-stack developer creating beautiful, performant web experiences.',
    })
  }, [])

  const experience = [
  {
    title: 'Performance Engineer',
    company: 'Accenture (Client: Vertex Inc.)',
    period: 'Feb 2026 – Present',
    description:
      'Working on cloud infrastructure, DevOps automation, and AI-assisted engineering workflows for enterprise-scale applications.',
    achievements: [
      'Designed an AI repository analysis system using GitHub Actions across 50+ repositories.',
      'Supported Kubernetes route migration and cloud-native deployments using AI-assisted troubleshooting.',
      'Applied Queueing Theory and Universal Scalability Law (USL) to evaluate engineering scalability and automation opportunities.',
    ],
  },
  {
    title: 'Advanced App Engineering Analyst',
    company: 'Accenture',
    period: 'Sep 2025 – Present',
    description:
      'Completed an intensive engineering program focused on Python, data analytics, and backend development.',
    achievements: [
      'Built end-to-end data pipelines for 6 unstructured datasets using Pandas and NumPy.',
      'Integrated processed data into MySQL using mysql.connector.',
      'Developed Flask backend applications and implemented RNN-based analytical models with Matplotlib and Seaborn.',
    ],
  },
  {
    title: 'Software Intern',
    company: 'Syncwave Automations',
    period: 'Jul 2024 – Apr 2025',
    description:
      'Contributed to the development of AI-powered legal technology and backend infrastructure.',
    achievements: [
      'Assisted in building a legal-domain LLM using Agentic RAG trained on 100,000+ court judgments and 1,000+ Indian statutes.',
      'Designed legal application interfaces through Figma wireframes to improve usability.',
      'Designed a PostgreSQL database schema with 14 interconnected tables for efficient legal data retrieval.',
    ],
  },
];

  const skills = [
  {
    category: 'AI & Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'LangSmith',
      'PEFT',
      'OpenCV',
      'YOLO',
      'NLP',
      'spaCy',
      'NLTK',
    ],
  },
  {
    category: 'Programming',
    items: [
      'Python',
      'Java',
      'JavaScript',
      'SQL',
      'R',
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      'Flask',
      'Node.js',
      'Express.js',
      'REST APIs',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Vector Databases',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Argo CD',
      'Gloo Gateway',
      'Apache APISIX',
      'Datadog',
      'Grafana',
      'Jira',
    ],
  },
  {
    category: 'Data Science',
    items: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    category: 'AI Developer Tools',
    items: [
      'ChatGPT',
      'GitHub Copilot',
      'Google Gemini',
      'LM Studio',
      'n8n',
    ],
  },
];

  const featuredProjects = projects.filter((p) => p.featured)
  const featuredPosts = getFeaturedPosts(3)

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Kriti Chinta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer passionate about building intelligent and impactful applications
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
               My interests lie at the intersection of artificial intelligence, healthcare,
              and legal technology. From multimodal Parkinson's disease detection and
              AI-powered legal reasoning to fake news detection, I enjoy building solutions
              that combine machine learning with practical software engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="mailto:your.email@example.com">
                <Button variant="secondary" size="lg">
                  <Mail size={20} className="mr-2" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient border circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50 -z-10" />
              
              {/* Image container */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-lg">
                <img
                  src="/picture.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Select projects showcasing my work"
            className="mb-12"
          >
            Featured Projects
          </SectionTitle>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Writing 
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Thoughts on web development, design, and technology"
            className="mb-12"
          >
            Latest Writing
          </SectionTitle>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      */}

      {/* Experience Timeline */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="My professional journey and key achievements"
            className="mb-12"
          >
            Experience
          </SectionTitle>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Technologies and tools I work with"
            className="mb-12"
          >
            Skills
          </SectionTitle>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => (
              <SkillCategory
                key={skillGroup.category}
                category={skillGroup.category}
                skills={skillGroup.items}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always open to interesting projects and collaborations.
              Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kritich2712@gmail.com">
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail size={20} className="mr-2" />
                  Send me an email
                </Button>
              </a>
              <a href="/kriti_resume_2026.pdf" download>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
