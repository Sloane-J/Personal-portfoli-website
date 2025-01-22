'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/placeholder.svg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team workflows, and progress tracking.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI Content Generator',
    description:
      "An AI-powered content generation tool using OpenAI GPT-3.",
    image: '/placeholder.svg',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          <motion.div
            variants={fadeUpVariant}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              Here are some of my recent projects that showcase my skills and
              experience in building modern web applications.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={fadeUpVariant}
          >
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <motion.div 
                  className="relative aspect-video"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="h-full w-full object-cover transition-transform"
                    loading="lazy"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}