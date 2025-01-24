"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fadeUpVariant, staggerContainer } from "@/utils/motion"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@yourname.dev",
    link: "mailto:hello@yourname.dev"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/yourprofile",
    link: "https://linkedin.com/in/yourprofile"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@yourusername",
    link: "https://github.com/yourusername"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: ""
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeUpVariant} className="text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interested in collaboration or just want to say hello? I'm always open to new opportunities.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUpVariant}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {contactDetails.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-muted/50 rounded-xl p-6 text-center group hover:bg-primary/10 transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4">
                  <contact.icon 
                    className="w-12 h-12 text-primary group-hover:rotate-12 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}