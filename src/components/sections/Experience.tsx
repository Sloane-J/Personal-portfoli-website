"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of enterprise-scale React applications",
      "Implemented microservices architecture using Node.js",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client projects",
      "Created RESTful APIs using Express and MongoDB",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Reduced server response time by 60%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "2018 - 2020",
    description: [
      "Built responsive web applications using React",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized website performance and SEO",
      "Increased mobile user engagement by 45%",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUpVariant} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              My professional journey and contributions in the tech industry
            </p>
          </motion.div>

          <motion.div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-border md:left-1/2" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 md:w-1/2" />
                <div
                  className={`absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:ml-[-8px]`}
                />
                <div className="flex-1 md:w-1/2">
                  <Card className={`mx-2 md:mx-8 ${index % 2 === 0 ? "md:mr-0" : "md:ml-0"}`}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold">{experience.title}</h3>
                          <p className="text-lg font-medium text-primary">{experience.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {experience.description.map((item, i) => (
                            <li key={i} className="list-disc list-inside">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

