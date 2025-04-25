"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = formSchema.parse(formData)

    // Here you would typically:
    // 1. Send an email
    // 2. Store in a database
    // 3. Forward to a CRM system

    // For now, we'll just simulate a successful submission
    // In a real implementation, you would connect this to your email service
    // or database to store the contact request

    console.log("Form submitted:", validatedData)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Thank you for your message. We'll be in touch soon!" }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs",
        errors: error.errors,
      }
    }

    return { success: false, message: "Something went wrong. Please try again later." }
  }
}

