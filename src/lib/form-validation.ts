import * as z from "zod"

// Simple contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message is too short"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

