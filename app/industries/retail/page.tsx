"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Users, TrendingUp, BarChart2 } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Customer Analytics and Personalization",
    description: "Leverage AI to understand customer behavior and deliver personalized experiences.",
    icon: Users,
  },
  {
    title: "Inventory Optimization",
    description: "Use predictive modeling to optimize stock levels and reduce waste.",
    icon: ShoppingCart,
  },
  {
    title: "Demand Forecasting",
    description: "Accurately predict demand to improve supply chain efficiency.",
    icon: TrendingUp,
  },
]

const projects = [
  {
    title: "AI-Driven Personalization for E-commerce Giant",
    impact: "Increased conversion rates by 35% and customer retention by 28%",
    description: "Implemented an AI-powered recommendation engine and personalized marketing campaigns.",
    icon: Users,
    link: "/projects/ecommerce-personalization",
  },
  {
    title: "Inventory Optimization for Retail Chain",
    impact: "Reduced stockouts by 40% and decreased excess inventory by 25%",
    description: "Developed a machine learning model for dynamic inventory management across multiple locations.",
    icon: ShoppingCart,
    link: "/projects/inventory-optimization",
  },
  {
    title: "Demand Forecasting for Fashion Retailer",
    impact: "Improved forecast accuracy by 30% and reduced markdown rates by 20%",
    description: "Created an AI model to predict demand for new fashion items, optimizing stock levels and pricing.",
    icon: BarChart2,
    link: "/projects/fashion-demand-forecasting",
  },
]

const dashboardData = [
  { category: "Electronics", inStore: 4000, online: 2400 },
  { category: "Clothing", inStore: 3000, online: 1398 },
  { category: "Home & Garden", inStore: 2000, online: 9800 },
  { category: "Toys", inStore: 2780, online: 3908 },
  { category: "Food & Beverage", inStore: 1890, online: 4800 },
]

const RetailDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Retail Sales Comparison: In-Store vs Online</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inStore" fill="#8884d8" name="In-Store Sales">
                {dashboardData.map((entry, index) => (
                  <motion.rect
                    key={`rect-${index}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Bar>
              <Bar dataKey="online" fill="#82ca9d" name="Online Sales">
                {dashboardData.map((entry, index) => (
                  <motion.rect
                    key={`rect-${index}`}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function RetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Revolutionizing Retail with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're not just consultants – we're your partners in retail transformation. Our cutting-edge AI
          solutions are designed to tackle the unique challenges of the retail sector, driving growth, optimizing
          operations, and creating unforgettable customer experiences.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Retail Industry Insights</h2>
        <RetailDashboard />
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <project.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {project.impact}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <Link href={project.link}>
                    <Button variant="outline">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <p className="text-lg mb-4">Our data-driven solutions have helped retail businesses achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>20-35% increase in customer retention rates</li>
          <li>15-30% improvement in inventory turnover</li>
          <li>25-40% reduction in marketing costs through targeted campaigns</li>
          <li>10-20% increase in overall revenue</li>
        </ul>
        <Link href="/contact">
          <Button>
            Get in touch to learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

