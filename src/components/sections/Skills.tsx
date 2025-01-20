"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "TailwindCSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Redux", level: 80 },
    { name: "Framer Motion", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "Prisma", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "REST APIs", level: 90 },
    { name: "Python", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Vercel", level: 85 },
    { name: "Jest", level: 80 },
    { name: "CI/CD", level: 75 },
    { name: "Agile", level: 85 },
    { name: "VS Code", level: 95 },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              A comprehensive overview of my technical skills and proficiency levels in various technologies and tools.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend Skills */}
            <motion.div variants={fadeUpVariant}>
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={fadeUpVariant}>
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.backend.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Others */}
            <motion.div variants={fadeUpVariant}>
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Others</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.tools.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

