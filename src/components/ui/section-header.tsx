"use client"

import { motion } from "framer-motion"
import { fadeUpVariant } from "@/utils/motion"

interface SectionHeaderProps {
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeader({ title, description, align = "center", className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`space-y-4 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {description && (
        <p className={`text-muted-foreground ${align === "center" ? "mx-auto max-w-[700px]" : ""}`}>{description}</p>
      )}
    </motion.div>
  )
}

// Example usage:
// <SectionHeader
//   title="Projects"
//   description="Check out some of my recent work"
//   align="center"
// />

