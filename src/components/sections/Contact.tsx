"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormField } from "@/components/ui/form"
import { Container } from "@/components/ui/container"
import { Mail, Phone, Linkedin, Github, MapPin, Send, Check } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "samueldorkeyjr@gmail.com",
    href: "mailto:samueldorkeyjr@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 257 774 919",
    href: "tel:+233257774919",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/samueldorkeyjr",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Sloane-J",
    href: "https://github.com/Sloane-J",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Okorase, Koforidua. Ghana",
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleReset = () => {
    setIsSuccess(false)
  }

  return (
    <div className="container max-w-6xl px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
            <p className="mt-2 text-muted-foreground">
              Have a question or want to work together? I|d love to hear from you.
            </p>
          </div>
          
          <div className="h-px w-full bg-border my-4" />
          
          <div className="grid gap-6">
            {contactMethods.map((method) => (
              <Card key={method.label} className="border bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                <p className="mb-6 text-muted-foreground">
                  Thank you for reaching out. I'll respond to your message soon.
                </p>
                <Button onClick={handleReset} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form onSubmit={handleSubmit} className="space-y-6">
                <FormField label="Name">
                  <input
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </FormField>
                <FormField label="Email">
                  <input
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </FormField>
                <FormField label="Message">
                  <textarea
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What would you like to say?"
                  />
                </FormField>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}