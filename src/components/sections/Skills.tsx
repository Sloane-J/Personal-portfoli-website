"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"

const skills = {
  frontend: [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-black" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "TailwindCSS", level: 90, color: "bg-teal-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Redux", level: 80, color: "bg-purple-500" },
    { name: "Framer Motion", level: 75, color: "bg-pink-500" },
  ],
  backend: [
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "Express", level: 85, color: "bg-gray-700" },
    { name: "PostgreSQL", level: 80, color: "bg-blue-800" },
    { name: "MongoDB", level: 80, color: "bg-green-500" },
    { name: "Prisma", level: 75, color: "bg-indigo-500" },
    { name: "GraphQL", level: 70, color: "bg-pink-600" },
    { name: "REST APIs", level: 90, color: "bg-red-500" },
    { name: "Python", level: 75, color: "bg-blue-700" },
  ],
  tools: [
    { name: "Git", level: 90, color: "bg-orange-600" },
    { name: "Docker", level: 75, color: "bg-blue-400" },
    { name: "AWS", level: 70, color: "bg-amber-500" },
    { name: "Vercel", level: 85, color: "bg-black" },
    { name: "Jest", level: 80, color: "bg-red-400" },
    { name: "CI/CD", level: 75, color: "bg-green-700" },
    { name: "Agile", level: 85, color: "bg-indigo-600" },
    { name: "VS Code", level: 95, color: "bg-blue-900" },
  ],
}

const SkillBar = ({ skill }: { skill: { name: string, level: number, color: string } }) => (
  <motion.div 
    initial={{ width: 0 }}
    animate={{ width: `${skill.level}%` }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`h-2 rounded-full ${skill.color}`}
  />
)

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
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
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
                        <SkillBar skill={skill} />
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
                        <SkillBar skill={skill} />
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
                        <SkillBar skill={skill} />
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

// Adding missing variants that were defined in the original code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}