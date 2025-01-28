"use client"

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';

export default function ModernHero() {
  // Animate text by word instead of letter for a more modern feel
  const WordAnimation = ({ text, className }) => {
    const words = text.split(' ');
    
    return (
      <motion.div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
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
        {/* Main content with asymmetric layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Role tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <WordAnimation 
                text="Hi, I'm Samuel"
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="max-w-xl"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {siteConfig.description}
                </p>
              </motion.div>
            </div>

            {/* CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
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

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-6 pt-8"
            >
              <a 
                href={siteConfig.github}
                target="_blank"
                className="group relative"
              >
                <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Github className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href={siteConfig.linkedin}
                target="_blank"
                className="group relative"
              >
                <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Linkedin className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="group relative"
              >
                <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right column - Modern abstract shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="relative w-full h-[600px]">
              {/* Abstract shape compositions */}
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