"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

interface TypeAnimationProps {
  text: string
  className?: string
  delay?: number
}

export function TypeAnimation({ text, className, delay = 0 }: TypeAnimationProps) {
  const controls = useAnimationControls()

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.01,
        },
      })
    }, delay)

    return () => clearTimeout(timeout)
  }, [controls, delay])

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} initial={{ opacity: 0 }} animate={controls} transition={{ delay: index * 0.05 }}>
          {char}
        </motion.span>
      ))}
    </span>
  )
}

