'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { fadeUpVariant, staggerContainer } from '@/utils/motion'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 md:gap-16"
        >
          {/* Image */}
          <motion.div
            variants={fadeUpVariant}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src="/placeholder.svg"
              alt="Profile picture"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUpVariant} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                Full Stack Developer based in Ghana
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Hello! I'm Samuel D. Jr, a passionate Full Stack Developer with a
                keen interest in building digital solutions that make a difference.
                With 4 years of experience in web development, I've had the
                opportunity to work on diverse projects that have sharpened my
                skills in both frontend and backend technologies.
              </p>
              <p>
                When I'm not coding, you can find me reading or painting.
                I believe in continuous learning and regularly attend tech
                conferences and contribute to open-source projects.
              </p>
            </div>

            <Card className="border-muted/50">
              <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    4 years of professional experience in web development
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    HND in Information and Communication Technology
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}