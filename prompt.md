Build a complete production-quality personal portfolio website using React 19, Vite, Tailwind CSS, React Router, Framer Motion, React Markdown, and Lucide React icons. The website should be fully responsive, accessible, and optimized for deployment on Cloudflare Pages.

The design should be inspired by Vercel, Linear, and Apple—minimalist, modern, elegant, with subtle animations. Prioritize clean typography, generous spacing, and excellent UX over flashy effects. Use a dark-first theme with an optional light mode toggle.

Implement the following pages:

Home
Projects (listing page)
Individual Project page (/projects/:slug)
Writing (blog index)
Individual Blog Post (/writing/:slug)
About
Now
Custom 404 page

The Home page should contain a Hero section, Featured Projects, Latest Writing, Experience timeline, Skills section, Contact section, and Footer.

Use a data-driven architecture:

Project metadata should be stored in separate JavaScript files under src/content/projects/.
Blog posts should be stored as Markdown (.md) files under src/content/writing/.
Render blog posts using React Markdown with syntax highlighting for code blocks.

Create reusable components including Navbar, Footer, Hero, ProjectCard, BlogCard, SkillCategory, ExperienceCard, Button, ThemeToggle, and SectionTitle.

Include smooth scrolling, subtle Framer Motion animations, hover effects, and page transitions. Cards should lift slightly on hover, and the navbar should have a blurred background when scrolling.

The site should be SEO-friendly with proper meta tags, Open Graph tags, Twitter cards, canonical URLs, sitemap, robots.txt, and semantic HTML.

Optimize for a Lighthouse score above 95 by using lazy loading, code splitting, optimized assets, and clean React architecture.

Include placeholder content for projects, writing, experience, skills, and contact information. Add a downloadable resume button that links to public/resume.pdf.

Use this folder structure:

public/
  resume.pdf
  favicon.ico
  og-image.png

src/
  assets/
  components/
  pages/
  content/
    projects/
    writing/
  hooks/
  utils/
  styles/
  App.jsx
  main.jsx

The final output should be a complete, production-ready project with all files, configurations, routing, Tailwind setup, and styling. Do not provide snippets or explanations—generate the entire codebase ready to run with npm install and npm run dev.