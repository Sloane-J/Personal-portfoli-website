"use client"

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';

export default function HeroWithGradientBackground() {
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

  const SplitText = ({ text, className }) => {
    return (
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={containerVariants}
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-[120px] animate-slow-spin opacity-50" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-secondary/20 to-secondary/10 rounded-full blur-[120px] animate-slow-spin-reverse opacity-50" />
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md pointer-events-none" />

      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 bg-background/70 backdrop-blur-sm p-8 rounded-2xl">
          <div className="space-y-4">
            <SplitText 
              text="Hi, I'm Samuel" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            />
            <SplitText 
              text="Full Stack Developer" 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="text-muted-foreground max-w-prose"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="flex space-x-4"
          >
            <Button variant="default" size="lg" asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="flex space-x-4 pt-4"
          >
            <a href={siteConfig.github} target="_blank" className="hover:scale-110 transition">
              <Github className="w-6 h-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" className="hover:scale-110 transition">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:scale-110 transition">
              <Mail className="w-6 h-6 text-muted-foreground hover:text-foreground" />
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="w-full max-w-md aspect-square bg-primary/10 rounded-3xl flex items-center justify-center">
            <div className="w-64 h-64 bg-primary/20 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, type: "spring" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        <span className="text-xs text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  );
}