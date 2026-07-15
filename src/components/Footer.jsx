import { Mail, Github, Linkedin} from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/petrichor98765', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kriti-chinta/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kritich2712@gmail.com', label: 'Email' },
  ]

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Now', href: '/now' },
    { label: 'Sitemap', href: '#sitemap' },
  ]

{/*{ label: 'Writing', href: '/writing' }, */}

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Kriti Chinta
            </h3>
            <p className="text-muted-foreground text-sm">
              Building beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/kriti_resume_2026.pdf"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  download
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Kriti Chinta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
