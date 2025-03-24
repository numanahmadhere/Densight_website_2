"use client"
import { motion } from "framer-motion"
import { BookMeetingButton } from "./book-meeting-button"

export default function CallToAction({ className }: { className?: string }) {
  return (
    <section className={`py-12 bg-blue-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Business with AI?
        </motion.h2>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Book a meeting today and discover how Densight AI can drive growth and innovation in your industry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BookMeetingButton />
        </motion.div>
      </div>
    </section>
  )
}

