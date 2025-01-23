// React and third-party imports
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

// Layout components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// Section components
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Services from "./components/sections/Services"
import Experience from "./components/sections/Experience"
import Testimonials from "./components/sections/Testimonials"
import Blog from "./components/sections/Blog"
import Contact from "./components/sections/Contact"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      ) : (
        <main className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Services />
            <Experience />
            <Testimonials />
            <Blog />
            <Contact />
          </div>
          <Footer />
        </main>
      )}
    </AnimatePresence>
  )
}

export default App