"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import ContactForm from "@/components/contact-form"

export default function ContactClientPage() {
  const { t } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setFormSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("Contact Us")}
      </motion.h1>

      <motion.p
        className="text-lg text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t(
          "Have questions about our AI solutions? Want to learn more about how we can help your business? Get in touch with our team today.",
        )}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("Email Us")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("Send us an email and we'll get back to you within 24 hours.")}
                </p>
                <a
                  href="mailto:info@densight.com"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  info@densight.com
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("Call Us")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("Speak directly with our team during business hours.")}
                </p>
                <a
                  href="tel:+971564468736"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  +971 56 446 8736
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("Visit Us")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("Come by our office for an in-person meeting.")}
                </p>
                <address className="not-italic text-blue-600 dark:text-blue-400">
                  Iris Bay - Office 50 17th floor - Business Bay - Dubai - United Arab Emirates
                </address>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">{t("Send Us a Message")}</h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">{t("Business Hours")}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{t("Monday - Friday")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM GST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{t("Saturday")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">10:00 AM - 2:00 PM GST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{t("Sunday")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t("Closed")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">{t("Our Location")}</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785070651647!2d55.2656!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970e5c9!2sIris%20Bay%2C%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1648226723030!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Densight AI Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

