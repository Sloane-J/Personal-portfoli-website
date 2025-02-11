"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

// Import components
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import CustomCursor from "./components/ui/custom-cursor"
import { ThemeProvider } from "./components/theme-provider"
import ScrollToTop from "./components/ui/scroll-to-top"
{/*import Experience from "./components/sections/Experience"*/}
import Blog from "./components/sections/Blog"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            <CustomCursor />
            <main className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">
                <Hero />
                <About />
                {/*<Experience />*/}
                <Services />
                <Projects />
                <Skills />
                <Testimonials />
                <Blog />
                <Contact />
              </div>
              <Footer />
            </main>
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App

