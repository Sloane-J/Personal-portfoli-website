"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/lib/constants"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delayChildren: index * 0.3,
        staggerChildren: 0.05
      }
    })
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150
      }
    }
  };

  const SplitText = ({ text, className, index }) => {
    return (
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        custom={index}
        className={className}
      >
        {text.split('').map((char, charIndex) => (
          <motion.span 
            key={charIndex} 
            variants={letterVariants}
            className={char === ' ' ? 'mr-1' : ''}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    );
  };

  const SplitDescription = ({ text, className }) => {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.5,
          type: "spring",
          stiffness: 120
        }}
        className={className}
      >
        {text}
      </motion.p>
    );
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <SplitText 
              text={`Hi, I'm ${siteConfig.name}`} 
              index={0}
              className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <SplitText 
              text={siteConfig.title} 
              index={1}
              className="text-2xl font-semibold sm:text-3xl md:text-4xl"
            />
          </div>

          <SplitDescription 
            text={siteConfig.description}
            className="max-w-[600px] text-muted-foreground"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3,
              type: "spring",
              stiffness: 120
            }}
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.5,
              type: "spring",
              stiffness: 120
            }}
            className="flex gap-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100
            }}
            className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100
            }}
            className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
        </div>
      </Container>
    </section>
  )
}