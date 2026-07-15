export const updateMetaTags = ({
  title,
  description,
  image = '/og-image.png',
  url = 'https://kriti.dev',
  type = 'website',
} = {}) => {
  // Update title
  if (title) {
    document.title = `${title} | Kriti Chinta`
  }

  // Update meta tags
  const updateOrCreateMeta = (name, content, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name'
    let meta = document.querySelector(`meta[${attr}="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attr, name)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  if (description) {
    updateOrCreateMeta('description', description)
  }

  if (type) {
    updateOrCreateMeta('og:type', type, true)
  }

  if (url) {
    updateOrCreateMeta('og:url', url, true)
  }

  if (title) {
    updateOrCreateMeta('og:title', title, true)
  }

  if (description) {
    updateOrCreateMeta('og:description', description, true)
  }

  if (image) {
    updateOrCreateMeta('og:image', image, true)
    updateOrCreateMeta('twitter:image', image)
  }

  if (title) {
    updateOrCreateMeta('twitter:title', title)
  }

  if (description) {
    updateOrCreateMeta('twitter:description', description)
  }
}

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export const formatDate = (date) => {
  if (!date) return 'Invalid Date'
  
  // Handle both string and Date objects
  const dateObj = typeof date === 'string' ? new Date(date + 'T00:00:00Z') : new Date(date)
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date'
  }
  
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const scrollToElement = (id, offset = 80) => {
  const element = document.getElementById(id)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
