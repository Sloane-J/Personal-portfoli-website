"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"
import { Code2, Layout, Database, Cloud, Shield, Smartphone } from "lucide-react"

const services = [
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

