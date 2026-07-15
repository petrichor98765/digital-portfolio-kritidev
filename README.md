# Personal Portfolio

A modern, production-ready personal portfolio website built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Minimalist, elegant design inspired by Vercel, Linear, and Apple
- 🌙 **Dark/Light Mode**: Seamless theme switching with persistent storage
- 📱 **Responsive**: Fully responsive design for all device sizes
- ⚡ **Performance**: Optimized for Lighthouse scores above 95
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🎨 **Animations**: Smooth Framer Motion animations and transitions
- 📝 **Content-Driven**: Markdown blog posts with syntax highlighting
- 🔍 **SEO-Friendly**: Meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- 🚀 **Cloudflare Ready**: Optimized for deployment on Cloudflare Pages

## Project Structure

```
personal-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── SkillCategory.jsx
│   │   └── index.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Writing.jsx
│   │   ├── WritingDetail.jsx
│   │   ├── About.jsx
│   │   ├── Now.jsx
│   │   ├── NotFound.jsx
│   │   └── index.js
│   ├── content/
│   │   ├── projects/
│   │   │   └── index.js
│   │   └── writing/
│   │       ├── building-scalable-react-applications.md
│   │       ├── mastering-tailwind-css.md
│   │       ├── micro-interactions-web-design.md
│   │       └── index.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd personal-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

### Customization

1. **Update personal information** in:
   - `index.html` - Meta tags and title
   - `src/pages/Home.jsx` - Hero and intro text
   - `src/components/Navbar.jsx` - Brand name
   - `src/components/Footer.jsx` - Social links

2. **Add projects** in `src/content/projects/index.js`:
   ```javascript
   {
     id: 5,
     slug: 'project-slug',
     title: 'Project Title',
     description: 'Short description',
     image: '/projects/image.jpg',
     featured: true,
     tags: ['React', 'Node.js'],
     content: '# Project content in markdown',
     link: 'https://example.com',
     github: 'https://github.com/username/repo',
   }
   ```

3. **Add blog posts** in `src/content/writing/`:
   - Create new `.md` files with frontmatter
   - Update `src/content/writing/index.js` to include the file

4. **Customize colors** in `tailwind.config.js` and `src/styles/globals.css`

5. **Add your resume** to `public/resume.pdf`

6. **Add OG image** to `public/og-image.png` (1200x630px recommended)

## Pages

- **Home** (`/`) - Landing page with hero, featured projects, latest articles, experience, skills
- **Projects** (`/projects`) - All projects with filtering by technology
- **Project Detail** (`/projects/:slug`) - Individual project page
- **Writing** (`/writing`) - Blog posts with filtering by topic
- **Blog Post** (`/writing/:slug`) - Individual blog post
- **About** (`/about`) - About page with biography and philosophy
- **Now** (`/now`) - What you're currently working on
- **404** - Custom not found page

## Performance Optimization

- Code splitting by route
- Lazy loading images
- Optimized CSS with Tailwind's purging
- Minified production builds
- Gzip compression enabled

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Cloudflare Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/personal-portfolio.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to Cloudflare Pages
   - Select "Connect to Git"
   - Authorize and select your repository
   - Select `main` as production branch
   - Set Build settings:
     - Framework: Vite (or Manual)
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Save and deploy

3. **Custom domain:**
   - In Cloudflare Pages settings, add your custom domain
   - Update DNS records as instructed

### Other Platforms

- **Vercel**: Connect repository, auto-detects Vite configuration
- **Netlify**: Same as Vercel
- **GitHub Pages**: Set `build` output to `docs` folder
- **AWS S3 + CloudFront**: Upload `dist` to S3, distribute via CloudFront

## SEO Checklist

- ✅ Meta descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Alt text on images
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times (Lighthouse 95+)

## Technologies

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Framer Motion** - Animations
- **React Markdown** - Blog post rendering
- **Lucide React** - Icons
- **Zustand** - State management
- **PostCSS** - CSS processing

## License

MIT - Feel free to use this template for your portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---