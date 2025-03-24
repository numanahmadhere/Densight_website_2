"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, BarChart, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Sustainability Analytics",
    description: "Leverage data science to measure and improve environmental impact.",
    icon: Leaf,
  },
  {
    title: "Green Supply Chain Optimization",
    description: "Optimize supply chains for sustainability and efficiency.",
    icon: TrendingUp,
  },
  {
    title: "Environmental Impact Forecasting",
    description: "Use predictive modeling to forecast and mitigate environmental risks.",
    icon: BarChart,
  },
]

const projects = [
  {
    id: "carbon-footprint-reduction",
    title: "Carbon Footprint Reduction for Manufacturing Giant",
    impact: "Reduced carbon emissions by 30% within 18 months",
    description: "Implemented AI-driven energy optimization and waste reduction strategies.",
  },
  {
    id: "sustainable-resource-management",
    title: "Sustainable Resource Management for City Council",
    impact: "Improved resource efficiency by 25% and reduced waste by 40%",
    description: "Developed a smart resource management system using IoT and data analytics.",
  },
  {
    id: "renewable-energy-optimization",
    title: "Renewable Energy Optimization for Utility Company",
    impact: "Increased renewable energy utilization by 35%",
    description: "Created an AI model to optimize the integration of renewable energy sources into the power grid.",
  },
]

const dashboardData = [
  { year: 2018, carbonEmissions: 100, renewableEnergy: 20, wasteReduction: 10 },
  { year: 2019, carbonEmissions: 90, renewableEnergy: 25, wasteReduction: 15 },
  { year: 2020, carbonEmissions: 80, renewableEnergy: 30, wasteReduction: 20 },
  { year: 2021, carbonEmissions: 70, renewableEnergy: 35, wasteReduction: 25 },
  { year: 2022, carbonEmissions: 60, renewableEnergy: 40, wasteReduction: 30 },
]

const EnvironmentalDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-800">Environmental Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dashboardData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="carbonEmissions" stroke="#ff7300" name="Carbon Emissions" strokeWidth={3}>
                <motion.circle
                  r={4}
                  fill="#ff7300"
                  strokeWidth={3}
                  stroke="#fff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </Line>
              <Line type="monotone" dataKey="renewableEnergy" stroke="#82ca9d" name="Renewable Energy" strokeWidth={3}>
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
              <Line type="monotone" dataKey="wasteReduction" stroke="#8884d8" name="Waste Reduction" strokeWidth={3}>
                <motion.circle
                  r={4}
                  fill="#8884d8"
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

export default function EnvironmentalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-green-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Empowering Sustainable Futures with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're committed to driving environmental sustainability through innovative AI solutions. Our
          team combines cutting-edge technology with deep environmental expertise to help organizations reduce their
          ecological footprint, optimize resource usage, and build a more sustainable future.
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
                  <service.icon className="h-8 w-8 text-green-500 mb-2" />
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
        <h2 className="text-2xl font-bold mb-4">Environmental Industry Insights</h2>
        <EnvironmentalDashboard />
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
                  <Leaf className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {project.impact}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <Link href={`/projects/${project.id}`}>
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
        <p className="text-lg mb-4">
          Our data-driven solutions have helped environmental organizations and businesses achieve:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>30-50% reduction in carbon emissions</li>
          <li>25-40% improvement in resource efficiency</li>
          <li>20-35% increase in renewable energy adoption</li>
          <li>15-30% cost savings through optimized operations</li>
        </ul>
        <Link href="/contact">
          <Button className="bg-green-600 hover:bg-green-700">
            Get in touch to learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

