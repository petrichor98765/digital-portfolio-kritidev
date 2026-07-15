import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar, Footer } from './components'
import {
  Home,
  Projects,
  ProjectDetail,
  Writing,
  WritingDetail,
  About,
  Now,
  NotFound,
} from './pages'

export const App = () => {
  const { isDark } = useTheme()

  useEffect(() => {
    // Apply dark mode class to document root
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<WritingDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/now" element={<Now />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
