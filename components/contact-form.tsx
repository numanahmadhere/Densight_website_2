"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Calendar, Send } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const openCalendly = () => {
    window.open("https://calendly.com/numan-ahmad/30min", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t("Get in Touch")}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("Have questions about our AI solutions? Fill out the form and our team will get back to you promptly.")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("Name")}
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("Your name")}
              required
              className="w-full border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("Email")}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("Your email address")}
              required
              className="w-full border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("Company")} ({t("Optional")})
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("Your company name")}
              className="w-full border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("Message")}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("How can we help you?")}
              required
              className="w-full min-h-[120px] border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 flex-1"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  {t("Sending...")}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t("Send Message")}
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={openCalendly}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 flex-1"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {t("Schedule Meeting")}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t("Contact Information")}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("Email")}</h4>
              <a href="mailto:info@densight.ai" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                info@densight.ai
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("Headquarters")}</h4>
              <address className="not-italic text-gray-600 dark:text-gray-400 text-sm">
                123 AI Innovation Center
                <br />
                Toronto, ON M5V 2K4
                <br />
                Canada
              </address>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("Working Hours")}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("Monday to Friday")}: 9:00 AM - 6:00 PM EST
                <br />
                {t("Saturday and Sunday")}: {t("Closed")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {t("Prefer a direct conversation?")}
          </h4>
          <Button
            onClick={openCalendly}
            className="w-full bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400 dark:border-blue-900/50"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {t("Book a 30-minute consultation")}
          </Button>
        </div>
      </div>
    </div>
  )
}

