"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "An exceptional developer who consistently delivers high-quality work. Their expertise in both frontend and backend development has been invaluable to our projects.",
    author: "Sarah Johnson",
    position: "CTO, Tech Innovations",
    image: "/placeholder.svg",
  },
  {
    content:
      "Working with them was a game-changer for our startup. They brought technical excellence and creative solutions to every challenge we faced.",
    author: "Michael Chen",
    position: "Founder, Digital Startups",
    image: "/placeholder.svg",
  },
  {
    content:
      "Their attention to detail and commitment to writing clean, maintainable code sets them apart. A true professional who elevates any development team.",
    author: "Emily Rodriguez",
    position: "Lead Developer, Web Solutions",
    image: "/placeholder.svg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUpVariant} className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">What others say about working with me</p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="flex flex-col">
                <Card className="relative h-full">
                  <CardContent className="flex h-full flex-col justify-between p-6">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
                    <div className="space-y-4">
                      <p className="text-muted-foreground">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

