import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    toggleTheme()
    const newIsDark = !isDark
    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg" />
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2.5 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  )
}

export default ThemeToggle
