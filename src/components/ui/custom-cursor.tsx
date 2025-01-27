"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  // Track if cursor should be visible
  const [isVisible, setIsVisible] = useState(false)

  // Create motion values for cursor position
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring configuration for smooth movement
  const springConfig = { damping: 25, stiffness: 700 }

  // Create spring-animated values for the outer circle
  // This creates the trailing effect
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Update cursor position on mouse move
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16) // Center the cursor (32px / 2)
      cursorY.set(e.clientY - 16)
    }

    // Show/hide cursor when mouse enters/leaves the window
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer circle - follows with spring motion */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-8 w-8 rounded-full border-2 border-primary md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Inner dot - follows cursor exactly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 rounded-full bg-primary md:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}

