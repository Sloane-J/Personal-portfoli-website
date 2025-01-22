"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { fadeUpVariant, slideInLeft, slideInRight } from "@/utils/motion"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="space-y-4">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Samuel
              </span>
            </h1>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Full Stack Developer</h2>
          </motion.div>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="max-w-[600px] text-muted-foreground"
          >
            I build exceptional digital experiences with modern web technologies. Focused on creating responsive,
            user-friendly applications with clean code.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
        </div>
      </Container>
    </section>
  )
}

