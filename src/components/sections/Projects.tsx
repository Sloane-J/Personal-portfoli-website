"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FilterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  type: string[];
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/placeholder.svg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    type: ['Web App', 'Full Stack']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workflows, and progress tracking.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    type: ['Web App', 'Productivity']
  },
  {
    title: 'AI Content Generator',
    description: "An AI-powered content generation tool using OpenAI GPT-3.",
    image: '/placeholder.svg',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    type: ['AI', 'Web App']
  }
];

export default function ModernProjects() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.type.includes(filter)) 
    : projects;

  const allTypes = [...new Set(projects.flatMap(project => project.type))];

  return (
    <section id="projects" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-muted-foreground"
            >
              Explore a selection of projects that demonstrate my skills and creativity in web development.
            </motion.p>

            {/* Project Type Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-4 py-6"
            >
              <Button 
                variant={filter === null ? 'default' : 'outline'}
                onClick={() => setFilter(null)}
                className="flex items-center gap-2"
              >
                <FilterIcon className="w-4 h-4" />
                All Projects
              </Button>
              {allTypes.map(type => (
                <Button
                  key={type}
                  variant={filter === type ? 'default' : 'outline'}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </Button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    delayChildren: 0.3,
                    staggerChildren: 0.1 
                  } 
                }
              }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring", 
                        stiffness: 100 
                      }
                    }
                  }}
                >
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <motion.div 
                      className="relative aspect-video"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        className="h-full w-full object-cover transition-transform"
                        loading="lazy"
                      />
                    </motion.div>
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="hover:bg-primary/10"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title} on GitHub`}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          asChild
                          className="hover:opacity-90"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}