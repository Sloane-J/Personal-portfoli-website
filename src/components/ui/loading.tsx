"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const spinnerVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  }
}

const textVariants = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  }
}

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm">
      <Container className="flex flex-col items-center gap-4">
        <motion.div
          variants={spinnerVariants}
          initial="initial"
          animate="animate"
          className="relative h-12 w-12"
        >
          <div 
            className="absolute inset-0 rounded-full border-4 border-primary/20" 
            style={{ willChange: 'transform' }}
          />
          <div 
            className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"
            style={{ 
              willChange: 'transform',
              animationDuration: '0.8s'
            }} 
          />
        </motion.div>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-base font-medium text-muted-foreground"
        >
          Loading
        </motion.p>
      </Container>
    </div>
  )
}