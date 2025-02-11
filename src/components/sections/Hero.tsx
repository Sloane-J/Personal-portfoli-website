"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

interface WordAnimationProps {
  text: string;
  className?: string;
}

const WordAnimation: React.FC<WordAnimationProps> = ({ text, className = "" }) => {
  const words: string[] = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className={className}>
      {words.map((word: string, index: number) => (
        <motion.span key={index} variants={itemVariants} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function ModernHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-secondary/20 to-transparent opacity-50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Main heading section */}
            <div className="space-y-6">
              <WordAnimation
                text="Hi, I'm Samuel"
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              />
              <motion.div variants={itemVariants} className="max-w-xl">
                {/* Role */}
                <div className="relative flex items-center gap-4">
                  <div className="font-mono text-lg md:text-xl tracking-tight">
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground/80">Full Stack Developer</span>
                    <span className="text-primary">/&gt;</span>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">{siteConfig.description}</p>
              </motion.div>
            </div>

            {/* CTA section */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" className="group relative" asChild>
                <a href="#projects">
                  View Work
                  <MousePointerClick className="w-4 h-4 ml-2 group-hover:transform group-hover:-rotate-12 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>

            {/* Role and Social links */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-6">
              {/* Social links */}
              <div className="flex items-center gap-6">
                <a href={siteConfig.github} target="_blank" className="group relative">
                  <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Github className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href={siteConfig.linkedin} target="_blank" className="group relative">
                  <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Linkedin className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="group relative">
                  <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Mail className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Modern abstract shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="relative w-full h-[600px]">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-3xl bg-primary/20 animate-float" />
              <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary/20 animate-float-delayed" />
              <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-xl bg-primary/10 animate-float" />
              <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-secondary/10 animate-float-delayed" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
