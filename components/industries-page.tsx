"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Truck, Cog, Building, Leaf, Zap, Hotel } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    name: "Retail",
    icon: ShoppingCart,
    link: "/industries/retail",
    description: "Revolutionize retail with AI-powered insights and personalization",
  },
  {
    name: "Supply Chain",
    icon: Truck,
    link: "/industries/supply-chain",
    description: "Optimize logistics and inventory with predictive analytics",
  },
  {
    name: "Manufacturing",
    icon: Cog,
    link: "/industries/manufacturing",
    description: "Enhance production efficiency and quality control",
  },
  {
    name: "Finance",
    icon: Building,
    link: "/industries/finance",
    description: "Improve risk assessment and fraud detection",
  },
  {
    name: "Environmental",
    icon: Leaf,
    link: "/industries/environmental",
    description: "Drive sustainability with AI-enabled monitoring",
  },
  {
    name: "Automobile",
    icon: Zap,
    link: "/industries/automobile",
    description: "Accelerate innovation in design and production",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    link: "/industries/hospitality",
    description: "Elevate guest experiences with personalization",
  },
]

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Industry Solutions
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Densight AI delivers tailored AI and data analytics solutions across diverse industries, helping businesses
        transform operations, enhance decision-making, and drive innovation.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <industry.icon className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link href={industry.link}>
                  <Button variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our AI solutions can address your specific industry challenges and drive innovation.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

