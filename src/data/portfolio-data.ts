import { Layout, Code2, Database, Cloud, Shield, Smartphone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

interface Social {
  platform: string
  url: string
  icon: LucideIcon
}

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Developer",
  description: "Building exceptional digital experiences with modern web technologies.",
  email: "your.email@example.com",
  location: "City, Country",
  availability: "Open to new opportunities",
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workflows, and progress tracking.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool using OpenAI's GPT-3 for creating high-quality, SEO-optimized content.",
    image: "/placeholder.svg",
    tags: ["Next.js", "OpenAI", "TailwindCSS", "TypeScript", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs using Node.js, Express, and various databases.",
    icon: Database,
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development with seamless integration between frontend and backend systems.",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    description: "Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Vercel.",
    icon: Cloud,
  },
  {
    title: "Security Implementation",
    description: "Implementing secure authentication, authorization, and data protection measures.",
    icon: Shield,
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications using React Native and modern mobile frameworks.",
    icon: Smartphone,
  },
]

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Redux", level: 80 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Jest", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Agile", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
]

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter",
  },
]

