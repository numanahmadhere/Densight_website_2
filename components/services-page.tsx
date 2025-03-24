"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, LineChart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "./book-meeting-button"
import IndustriesOverview from "./industries-overview"

const services = [
  {
    title: "Advanced Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making.",
    icon: BarChart2,
    link: "/services/advanced-data-analytics",
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage cutting-edge AI to automate processes and gain competitive advantages.",
    icon: Brain,
    link: "/services/ai-machine-learning",
  },
  {
    title: "Intelligent Business Intelligence",
    description: "Visualize complex data for better strategic planning and execution.",
    icon: LineChart,
    link: "/services/intelligent-bi",
  },
  {
    title: "AI Consultation Services",
    description: "Expert guidance to help you navigate the AI landscape and implement tailored solutions.",
    icon: Lightbulb,
    link: "/services/ai-consultation",
  },
]

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Average Efficiency Increase" },
  { value: "250+", label: "AI Projects Completed" },
  { value: "30+", label: "Industries Served" },
]

const testimonials = [
  {
    quote: "Densight AI's advanced analytics solution helped us increase our revenue by 30% in just six months.",
    author: "Jane Doe",
    position: "CTO, TechCorp",
  },
  {
    quote:
      "The AI consultation services provided by Densight AI were instrumental in shaping our digital transformation strategy.",
    author: "John Smith",
    position: "CEO, InnovateNow",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Services
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how Densight AI's cutting-edge services can transform your business and drive innovation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="text-center p-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="mt-16">
            <IndustriesOverview compact />
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI-powered services can address your specific challenges and unlock new opportunities
            for growth.
          </p>
          <div className="flex justify-center space-x-4">
            <BookMeetingButton />
            <Link href="/contact">
              <Button variant="outline">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

