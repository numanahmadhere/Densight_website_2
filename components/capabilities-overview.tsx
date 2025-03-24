"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Zap, BarChart2, Globe } from "lucide-react"

const capabilities = [
  {
    title: "AI Implementation",
    description: "Expert integration of AI solutions into existing business processes and systems",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "In-depth data analysis and predictive modeling for actionable insights",
    icon: BarChart2,
  },
  {
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption and digital transformation",
    icon: Brain,
  },
  {
    title: "Natural Language Processing",
    description: "Cutting-edge NLP for text analysis, chatbots, and language understanding",
    icon: Globe,
  },
]

export default function CapabilitiesOverview({ className }: { className?: string }) {
  return (
    <section className={`py-8 md:py-12 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-duration-300">
                <CardHeader>
                  <capability.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-4">
                  <p className="text-sm text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/capabilities">
            <Button>
              Explore Our Full Capabilities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

