"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, LineChart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Advanced Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making.",
    icon: BarChart2,
    link: "/services/advanced-data-analytics",
    buttonText: "Explore Data Analytics Services",
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage cutting-edge AI to automate processes and gain competitive advantages.",
    icon: Brain,
    link: "/services/ai-machine-learning",
    buttonText: "Discover AI & ML Solutions",
  },
  {
    title: "Intelligent Business Intelligence",
    description: "Visualize complex data for better strategic planning and execution.",
    icon: LineChart,
    link: "/services/intelligent-bi",
    buttonText: "Explore BI Services",
  },
  {
    title: "AI Consultation Services",
    description: "Expert guidance to help you navigate the AI landscape and implement tailored solutions.",
    icon: Lightbulb,
    link: "/services/ai-consultation",
    buttonText: "Learn About AI Consultation",
  },
]

const ServicesOverview = ({ className }: { className?: string }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6 text-gray-600">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      {service.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview

