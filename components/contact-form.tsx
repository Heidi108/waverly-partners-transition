"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"

type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  organization: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id]: value,
    }))

    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName) newErrors["first-name"] = "First name is required"
    if (!formData.lastName) newErrors["last-name"] = "Last name is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("entry.1021555764", formData.firstName);      
      formDataToSubmit.append("entry.1839996696", formData.lastName);      
      formDataToSubmit.append("entry.203359972", formData.email);           
      formDataToSubmit.append("entry.52758287", formData.organization);  
      formDataToSubmit.append("entry.684628599", formData.message);        

      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdvGg3vOVS60kx99qEpWtt_hqiCL2MlMwENIPSqt-txhKVzOw/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      })

      setSubmitResult({
        success: true,
        message: "Thank you! Your message has been submitted.",
      })

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitResult({
        success: false,
        message: "Submission failed. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-white text-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      {submitResult && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitResult.success
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-center">
            {submitResult.success ? (
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
            )}
            <p>{submitResult.message}</p>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
            <label htmlFor="first-name" className="text-sm font-medium leading-none">
              First name
            </label>
            <Input
              id="first-name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors["first-name"] ? "border-red-500" : ""}
            />
            {errors["first-name"] && <p className="text-red-500 text-xs mt-1">{errors["first-name"]}</p>}
          </motion.div>
          <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
            <label htmlFor="last-name" className="text-sm font-medium leading-none">
              Last name
            </label>
            <Input
              id="last-name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors["last-name"] ? "border-red-500" : ""}
            />
            {errors["last-name"] && <p className="text-red-500 text-xs mt-1">{errors["last-name"]}</p>}
          </motion.div>
        </div>
        <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </motion.div>
        <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
          <label htmlFor="organization" className="text-sm font-medium leading-none">
            Organization
          </label>
          <Input
            id="organization"
            placeholder="Enter your organization"
            value={formData.organization}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
          <Button type="submit" className="w-full bg-navy hover:bg-navy/90" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
