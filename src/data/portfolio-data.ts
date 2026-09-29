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
{/*interface Social {
  platform: string
  url: string
  icon: LucideIcon
}
*/}
interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export const personalInfo = {
  name: "Samuel Dorkey",
  role: "Software Developer",
  description: "Building exceptional digital experiences with modern web technologies.",
  email: "samueldorkeyjr@gmail.com",
  location: "Accra, Ghana",
  availability: "Open to new projects",
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
    description: "Crafting fast, responsive, and accessible interfaces with React, Astro, and Tailwind CSS — built to look sharp on every screen and perform well in production.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description: "Designing and building reliable server-side logic, REST APIs, and database architectures using Node.js, Supabase, and PostgreSQL.",
    icon: Database,
  },
  {
    title: "Full Stack Development",
    description: "Delivering complete, production-ready applications from database to UI — with clean architecture, type safety, and real-world deployment experience.",
    icon: Code2,
  },
  {
    title: "Cloud & Deployment",
    description: "Shipping applications to Vercel, Cloudflare Pages, and other modern platforms — with CI/CD pipelines, environment configuration, and zero-downtime deployments.",
    icon: Cloud,
  },
  {
    title: "Security & Auth",
    description: "Implementing secure authentication flows, role-based access control, and data protection best practices — from Row Level Security in Supabase to edge-level enforcement.",
    icon: Shield,
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile and PWA experiences using React Native and Expo — with offline support, push notifications, and native device integrations.",
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

