"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Building,
  ShoppingBag,
  Cpu,
  BarChart2,
  Box,
  Car,
  Cog,
  DollarSign,
  Hotel,
  Truck,
  Utensils,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: "auto-quality-control",
    title: "AI-Powered Quality Control for Major Automaker",
    industry: "Automobile",
    impact: "Reduced defect rates by 40% and improved production efficiency by 25%",
    summary: "Implemented computer vision and machine learning for real-time quality inspection.",
    icon: Car,
  },
  {
    id: "fleet-predictive-maintenance",
    title: "Predictive Maintenance System for Fleet Management",
    industry: "Automobile",
    impact: "Decreased vehicle downtime by 35% and maintenance costs by 20%",
    summary: "Developed an IoT-based system to predict vehicle maintenance needs accurately.",
    icon: Cog,
  },
  {
    id: "ev-battery-optimization",
    title: "EV Battery Life Optimization",
    industry: "Automobile",
    impact: "Extended average battery life by 15% and improved charging efficiency by 30%",
    summary: "Created an AI model to optimize EV battery usage and charging patterns.",
    icon: Zap,
  },
  {
    id: "hotel-personalization",
    title: "AI-Driven Personalization for Global Hotel Chain",
    industry: "Hospitality",
    impact: "Increased guest satisfaction by 30% and boosted repeat bookings by 25%",
    summary: "Implemented an AI system for personalized guest experiences and targeted marketing.",
    icon: Hotel,
  },
  {
    id: "resort-dynamic-pricing",
    title: "Dynamic Pricing Optimization for Resort Group",
    industry: "Hospitality",
    impact: "Improved RevPAR by 20% and overall revenue by 15%",
    summary: "Developed a machine learning model for real-time pricing adjustments based on demand forecasting.",
    icon: DollarSign,
  },
  {
    id: "restaurant-inventory-optimization",
    title: "Smart F&B Management for Restaurant Chain",
    industry: "Hospitality",
    impact: "Reduced food waste by 40% and improved inventory turnover by 30%",
    summary: "Created an AI-powered system for optimizing food inventory and menu planning.",
    icon: Utensils,
  },
  {
    id: "retail-demand-forecasting",
    title: "AI-Powered Demand Forecasting for Global Retailer",
    industry: "Supply Chain",
    impact: "Reduced inventory costs by 20% and improved product availability by 15%",
    summary: "Implemented a machine learning model for accurate demand prediction across multiple product categories.",
    icon: BarChart2,
  },
  {
    id: "ecommerce-logistics-optimization",
    title: "Smart Logistics Optimization for E-commerce Giant",
    industry: "Supply Chain",
    impact: "Decreased delivery times by 30% and reduced transportation costs by 25%",
    summary: "Developed an AI system for real-time route optimization and load balancing.",
    icon: Truck,
  },
  {
    id: "warehouse-automation",
    title: "Automated Warehouse Management for Distribution Center",
    industry: "Supply Chain",
    impact: "Increased warehouse efficiency by 40% and reduced picking errors by 60%",
    summary: "Created an AI-driven system for optimal inventory placement and automated picking processes.",
    icon: Box,
  },
]

const caseStudies = [
  {
    title: "Revolutionizing Inventory Management for RetailGiant",
    description: "How we helped a major retail chain reduce stockouts by 30% and increase profit margins.",
    industry: "Retail",
    impact: "Reduced stockouts by 30%",
    link: "/case-studies/retailgiant-inventory",
    icon: ShoppingBag,
  },
  {
    title: "Boosting Customer Engagement for FashionForward",
    description: "Our customer segmentation model helped increase customer retention rates by 25%.",
    industry: "Fashion E-commerce",
    impact: "Increased retention by 25%",
    link: "/case-studies/fashionforward-engagement",
    icon: Building,
  },
  {
    title: "Optimizing Supply Chain for ElectroWorld",
    description:
      "How our sales forecasting engine reduced supply chain costs by 15% for a global electronics retailer.",
    industry: "Consumer Electronics",
    impact: "Reduced costs by 15%",
    link: "/case-studies/electroworld-supply-chain",
    icon: Cpu,
  },
]

export default function ProjectsAndCaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Case Studies
      </motion.h1>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <project.icon className="h-8 w-8 text-blue-500" />
                    <Badge variant="secondary">{project.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm font-semibold text-blue-600 mb-2">
                    {project.impact}
                  </CardDescription>
                  <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <study.icon className="h-6 w-6 text-blue-500" />
                    <CardTitle>{study.title}</CardTitle>
                  </div>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="secondary">{study.impact}</Badge>
                  </div>
                  <Link href={study.link}>
                    <Button variant="outline" className="w-full">
                      Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

