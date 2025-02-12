"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"
import { Code2, Layout, Database, Globe, PencilRuler, Search } from "lucide-react"

const services = [
  {
    title: "Modern Web Development",
    description: "Building fast, SEO-friendly, and responsive web applications using React.js, Astro.js, and Tailwind CSS.",
    icon: Layout,
  },
  {
    title: "Full-Stack Development",
    description: "Developing scalable web solutions with React, PHP, and server-side rendering for optimal performance.",
    icon: Code2,
  },
  {
    title: "Static Site Generation",
    description: "Creating high-performance, pre-rendered websites with Astro.js and Hugo for improved speed and SEO.",
    icon: Globe,
  },
  {
    title: "Website Wireframe Design",
    description: "Designing intuitive wireframes and UI structures for a seamless user experience before development.",
    icon: PencilRuler,
  },
  {
    title: "Backend & API Development",
    description: "Building efficient and secure APIs using PHP and database integrations.",
    icon: Database,
  },
  {
    title: "Technical SEO Implementation",
    description: "Optimizing web applications for search engines with proper metadata, structured data, and server-side rendering.",
    icon: Search,
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUpVariant} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Services & Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive web development solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={fadeUpVariant}>
                  <Card className="h-full transition-colors hover:border-primary/50">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

