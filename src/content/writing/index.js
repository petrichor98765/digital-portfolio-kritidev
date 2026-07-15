import buildingScalable from './building-scalable-react-applications.md?raw'
import tailwindCss from './mastering-tailwind-css.md?raw'
import microInteractions from './micro-interactions-web-design.md?raw'

const parseFrontmatter = (content) => {
  // Split by the first --- to --- block
  const parts = content.split('---')
  
  if (parts.length < 3) {
    return { frontmatter: {}, content }
  }

  const frontmatterString = parts[1]
  const body = parts.slice(2).join('---').trim()

  const frontmatter = {}
  
  frontmatterString.split('\n').forEach((line) => {
    if (!line.trim()) return
    
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    
    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()
    
    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Parse JSON arrays for tags
    if (key === 'tags' && value.startsWith('[')) {
      try {
        value = JSON.parse(value)
      } catch (e) {
        // Fallback: split by comma
        value = value.replace(/[\[\]"]/g, '').split(',').map(t => t.trim())
      }
    }
    
    // Parse numbers
    if (key === 'readTime') {
      value = parseInt(value) || 5
    }
    
    frontmatter[key] = value
  })

  return { frontmatter, content: body }
}

const rawPosts = [
  buildingScalable,
  tailwindCss,
  microInteractions,
]

export const posts = rawPosts.map((content) => {
  const { frontmatter, content: body } = parseFrontmatter(content)
  
  // Ensure tags is always an array
  let tags = frontmatter.tags || []
  if (!Array.isArray(tags)) {
    tags = [tags]
  }
  
  return {
    title: frontmatter.title || 'Untitled',
    slug: frontmatter.slug || '',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    excerpt: frontmatter.excerpt || '',
    tags: tags,
    readTime: frontmatter.readTime || 5,
    body,
  }
})

export const getPostBySlug = (slug) => {
  return posts.find((post) => post.slug === slug)
}

export const getFeaturedPosts = (limit = 3) => {
  return posts.slice(0, limit)
}

export default posts
