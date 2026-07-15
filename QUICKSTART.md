# Quick Start Guide

## 1. Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 2. Customize Your Portfolio

### Update Basic Information
Open these files and update with your information:

- `index.html` - Page title, description, and meta tags
- `src/components/Navbar.jsx` - Kriti Chinta/brand
- `src/components/Footer.jsx` - Social media links
- `src/pages/Home.jsx` - Bio and introduction text

### Add Your Projects
Edit `src/content/projects/index.js`:

```javascript
{
  id: 1,
  slug: 'my-awesome-project',
  title: 'My Awesome Project',
  description: 'A brief description of the project',
  image: '/projects/my-project.jpg',
  featured: true,
  tags: ['React', 'Tailwind CSS'],
  content: '# Full markdown content here',
  link: 'https://project-url.com',
  github: 'https://github.com/username/repo',
}
```

### Add Blog Posts
Create new markdown files in `src/content/writing/`:

**example.md:**
```markdown
---
title: "My Blog Post Title"
slug: "my-blog-post-title"
date: "2024-03-15"
excerpt: "A brief excerpt of the post"
tags: ["React", "Web Development"]
readTime: 5
---

# Your blog post content here

This is markdown content...
```

Then add it to `src/content/writing/index.js`:

```javascript
import example from './example.md?raw'
// Add to rawPosts array
```

### Update Theme Colors
Edit `tailwind.config.js` to customize colors, or modify CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary: 217.2 91.2% 59.8%;
  --accent: 259 80% 67%;
  /* ... other colors */
}
```

## 3. Add Your Files

- Place your resume at `public/resume.pdf`
- Add an OG image at `public/og-image.png` (1200x630px)
- Add project images to `public/projects/`

## 4. Build for Production

```bash
npm run build
```

The `dist/` folder contains your production build.

## 5. Deploy

Choose your deployment platform:

### Cloudflare Pages
1. Push to GitHub
2. Go to Cloudflare Pages
3. Connect your repository
4. Build command: `npm run build`
5. Build output: `dist`

### Vercel
1. Push to GitHub
2. Import project on Vercel
3. Auto-detects Vite setup

### Netlify
1. Push to GitHub
2. Connect on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 6. SEO Optimization

Update these files with your actual URLs:

- `index.html` - Replace all `https://kriti.dev` with your domain
- `public/sitemap.xml` - Update URLs and lastmod dates
- `.env.example` - Set your actual site configuration

## Key Features Explained

### Dark Mode
Automatically applied based on user system preference, with toggle in navbar.

### Markdown Blog Posts
Blog posts are stored as `.md` files with frontmatter. Use:
- Headers: `# H1`, `## H2`, etc.
- Code blocks: ` ```javascript ... ``` `
- Links: `[text](url)`
- Images: `![alt](url)`

### Animations
Framer Motion animations are built-in to:
- Page transitions
- Card hover effects
- Section reveals on scroll
- Button interactions

### Responsive Design
Fully responsive using Tailwind's mobile-first approach:
- Mobile: Single column layouts
- Tablet (md): Two columns
- Desktop (lg): Three+ columns

## Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Troubleshooting

**Images not loading?**
- Place images in `public/` folder
- Reference as `/image-name.jpg`

**Blog post not appearing?**
- Ensure frontmatter has correct format
- Add file to imports in `src/content/writing/index.js`

**Dark mode not working?**
- Clear browser cache
- Check if Zustand storage is enabled

**Build failing?**
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check Node version (should be 18+)

## Next Steps

1. ✅ Customize your information
2. ✅ Add your projects
3. ✅ Write your first blog post
4. ✅ Set up domain
5. ✅ Deploy to Cloudflare/Vercel/Netlify
6. ✅ Monitor analytics and iterate

## Need Help?

- Check the main `README.md` for detailed documentation
- Visit the GitHub repository for issues/discussions
- Review Vite, React, and Tailwind documentation

---

Happy building! 🚀
