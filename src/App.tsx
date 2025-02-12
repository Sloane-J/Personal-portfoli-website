"use client"

import { Suspense, lazy } from "react"
import { AnimatePresence } from "framer-motion"

// Import critical components normally
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Footer from "./components/layout/Footer"
import { ThemeProvider } from "./components/theme-provider"
import Loading from "./components/ui/loading"

// Lazy load non-critical components
const CustomCursor = lazy(() => import("./components/ui/custom-cursor"))
const ScrollToTop = lazy(() => import("./components/ui/scroll-to-top"))
const About = lazy(() => import("./components/sections/About"))
const Projects = lazy(() => import("./components/sections/Projects"))
const Skills = lazy(() => import("./components/sections/Skills"))
const Contact = lazy(() => import("./components/sections/Contact"))
const Blog = lazy(() => import("./components/sections/Blog"))
const Services = lazy(() => import("./components/sections/Services"))
const Testimonials = lazy(() => import("./components/sections/Testimonials"))

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {/* Critical UI elements load immediately */}
        <Navbar />
        
        <main className="flex min-h-screen flex-col">
          {/* Hero section loads immediately for fast initial paint */}
          <Hero />
          
          <div className="flex-1">
            {/* Non-critical UI elements */}
            <Suspense fallback={null}>
              <CustomCursor />
              <ScrollToTop />
            </Suspense>

            {/* Content sections with loading states */}
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>

            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>

            {/* Projects section with prefetching */}
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>

            {/* Skills section loads when user scrolls near it */}
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>

            {/* Lower priority sections */}
            <Suspense fallback={<Loading />}>
              <Testimonials />
              <Blog />
              <Contact />
            </Suspense>
          </div>

          <Footer />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App