"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    title: "Tech Blog",
    description:
      "A modern, high-performance tech blog built with Hugo and the Stack theme, featuring fast loading times, SEO optimization, and a clean, minimal design.",
    image: "/tech-blog-preview.svg",
    tags: ["Hugo", "Stack Theme", "Markdown", "Go", "TailwindCSS"],
    github: "https://github.com", // Update if you have a repo
    demo: "https://intheloop-blog.netlify.app/",
    type: ["Blog", "Static Site Generation"],
  },  
  {
    title: "Volta Portal",
    description:
      "An informational website about the Volta Region of Ghana, showcasing its people, districts, festivals, and cultural heritage.",
    image: "/volta-portal-preview.svg",
    tags: ["JavaScript", "JSON", "HTML", "Tailwind CSS"],
    github: "https://github.com", // Update if applicable
    demo: "https://number-9ner.netlify.app/",
    type: ["Web App", "Cultural Website"],
  },  
  {
    title: "Peer-to-Peer LMS",
    description:
      "A learning management system (LMS) designed for college students, enabling peer-to-peer content sharing, course management, and real-time AI-powered support via Tawk.to API.",
    image: "/peer-to-peer-lms-preview.svg",
    tags: ["PHP", "Bootstrap", "Apache", "phpMyAdmin", "Tawk.to API"],
    github: "https://github.com", // Update with actual repo if available
    demo: "https://demo.com", // Update with actual live link
    type: ["LMS", "Web App"],
  },  
  {
    title: "Affiliate Marketing Coach Website",
    description:
      "A professional website for an affiliate marketing coach offering courses in affiliate marketing, graphic design, import & shipping, and WhatsApp business marketing.",
    image: "/affiliate-coach.svg",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Astro"],
    github: "https://github.com/Sloane-J/fairy-app",
    demo: "https://affiliate-nexus.vercel.app/",
    type: ["Web App", "Business Website"],
  },
];

export default function ModernProjects() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((project) => project.type.includes(filter))
    : projects;

  const allTypes = [...new Set(projects.flatMap((project) => project.type))];

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
              Explore a selection of projects that demonstrate my skills and
              creativity in web development.
            </motion.p>

            {/* Project Type Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center flex-wrap gap-4 py-6"
            >
              <Button
                variant={filter === null ? "default" : "outline"}
                onClick={() => setFilter(null)}
                className="flex items-center gap-2"
              >
                <FilterIcon className="w-4 h-4" />
                All Projects
              </Button>
              {allTypes.map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </Button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence>
            <motion.div
              className="grid gap-8 grid-cols-1 md:grid-cols-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1,
                  },
                },
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
                        stiffness: 100,
                      },
                    },
                  }}
                >
                  <Card className="overflow-hidden group h-full flex flex-col shadow-lg rounded-xl">
                    <motion.div
                      className="relative aspect-video overflow-hidden"
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
                    <CardHeader className="flex-grow px-6 py-4">
                      <CardTitle className="text-xl font-bold">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 px-6 py-4 mt-auto">
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
                        <Button size="sm" asChild className="hover:opacity-90">
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
