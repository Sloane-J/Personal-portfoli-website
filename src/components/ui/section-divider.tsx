"use client"

import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

interface SectionDividerProps {
  className?: string
  animate?: boolean
}

export function SectionDivider({ className, animate = true }: SectionDividerProps) {
  if (!animate) {
    return <div className={cn("h-16 w-1 bg-primary/10 rounded-full my-8 mx-auto", className)} />
  }

  return (
    <motion.div
      className={cn("h-16 w-1 bg-primary/10 rounded-full my-8 mx-auto", className)}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.div
        className="h-1/3 w-full bg-primary rounded-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 66, 0] }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

// Example usage:
// <SectionDivider />
// or with custom classes:
// <SectionDivider className="h-24" />
// or without animation:
// <SectionDivider animate={false} />

