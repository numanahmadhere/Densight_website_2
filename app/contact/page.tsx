"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, TrendingUp, Users, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { BookMeetingButton } from "@/components/book-meeting-button"

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">The Impact of Booking a Meeting</CardTitle>
            <CardDescription className="text-center">See what our clients achieve after a consultation</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-green-500 h-8 w-8" />
              <div>
                <p className="font-semibold">30% Average ROI Increase</p>
                <p className="text-sm text-gray-600">For clients who implemented our AI solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-blue-500 h-8 w-8" />
              <div>
                <p className="font-semibold">95% Client Satisfaction</p>
                <p className="text-sm text-gray-600">Based on post-consultation surveys</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-purple-500 h-8 w-8" />
              <div>
                <p className="font-semibold">2 Weeks Average Time-to-Value</p>
                <p className="text-sm text-gray-600">From consultation to initial implementation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Book a Meeting</CardTitle>
              <CardDescription>
                Schedule a 30-minute call with our AI experts to explore transformative solutions for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <BookMeetingButton />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">In your meeting, you'll:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Explore your specific AI challenges and opportunities</li>
                  <li>Gain expert insights on AI's potential impact on your business</li>
                  <li>Learn about our tailored AI solutions and approach</li>
                  <li>Discover potential ROI and implementation strategies</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>You can also reach us using the following information:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-blue-500" />
                <span>contact@densight.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-500" />
                <span>+971 56 446 8736</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-500" />
                <span>Iris Bay - Office 50 17th floor - Business Bay - Dubai - United Arab Emirates</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

