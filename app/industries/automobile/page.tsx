"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Cog, Zap, BarChart2 } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Predictive Maintenance",
    description: "Use AI to predict and prevent vehicle breakdowns.",
    icon: Cog,
  },
  {
    title: "Supply Chain Optimization",
    description: "Streamline automotive supply chains with data-driven insights.",
    icon: Car,
  },
  {
    title: "Electric Vehicle Analytics",
    description: "Optimize EV performance and charging infrastructure.",
    icon: Zap,
  },
]

const projects = [
  {
    title: "AI-Powered Quality Control for Major Automaker",
    impact: "Reduced defect rates by 40% and improved production efficiency by 25%",
    description: "Implemented computer vision and machine learning for real-time quality inspection.",
    link: "/projects/auto-quality-control",
    icon: BarChart2,
  },
  {
    title: "Predictive Maintenance System for Fleet Management",
    impact: "Decreased vehicle downtime by 35% and maintenance costs by 20%",
    description: "Developed an IoT-based system to predict vehicle maintenance needs accurately.",
    link: "/projects/fleet-predictive-maintenance",
    icon: Cog,
  },
  {
    title: "EV Battery Life Optimization",
    impact: "Extended average battery life by 15% and improved charging efficiency by 30%",
    description: "Created an AI model to optimize EV battery usage and charging patterns.",
    link: "/projects/ev-battery-optimization",
    icon: Zap,
  },
]

const dashboardData = [
  { year: 2018, electricVehicles: 2000, hybridVehicles: 5000, traditionalVehicles: 20000 },
  { year: 2019, electricVehicles: 3500, hybridVehicles: 7000, traditionalVehicles: 18000 },
  { year: 2020, electricVehicles: 5000, hybridVehicles: 9000, traditionalVehicles: 16000 },
  { year: 2021, electricVehicles: 8000, hybridVehicles: 11000, traditionalVehicles: 14000 },
  { year: 2022, electricVehicles: 12000, hybridVehicles: 13000, traditionalVehicles: 12000 },
]

const AutomobileDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Vehicle Sales Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dashboardData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="electricVehicles"
                stroke="#8884d8"
                name="Electric Vehicles"
                strokeWidth={3}
              >
                <motion.circle
                  r={4}
                  fill="#8884d8"
                  strokeWidth={3}
                  stroke="#fff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </Line>
              <Line type="monotone" dataKey="hybridVehicles" stroke="#82ca9d" name="Hybrid Vehicles" strokeWidth={3}>
                <motion.circle
                  r={4}
                  fill="#82ca9d"
                  strokeWidth={3}
                  stroke="#fff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
              </Line>
              <Line
                type="monotone"
                dataKey="traditionalVehicles"
                stroke="#ffc658"
                name="Traditional Vehicles"
                strokeWidth={3}
              >
                <motion.circle
                  r={4}
                  fill="#ffc658"
                  strokeWidth={3}
                  stroke="#fff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function AutomobilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Driving the Future of Automotive with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're revolutionizing the automotive industry with cutting-edge AI solutions. Our team of
          experts combines deep industry knowledge with advanced analytics to drive innovation, improve efficiency, and
          enhance vehicle performance across the entire automotive value chain.
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
        <h2 className="text-2xl font-bold mb-4">Automotive Industry Insights</h2>
        <AutomobileDashboard />
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
        <p className="text-lg mb-4">Our data-driven solutions have helped automobile businesses achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>25-40% reduction in manufacturing defects</li>
          <li>20-35% improvement in supply chain efficiency</li>
          <li>15-30% increase in electric vehicle range and performance</li>
          <li>10-25% reduction in overall operational costs</li>
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

