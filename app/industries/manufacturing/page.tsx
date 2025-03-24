"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cog, BarChart2, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Predictive Maintenance",
    description: "Use AI to predict equipment failures and optimize maintenance schedules.",
    icon: Cog,
  },
  {
    title: "Quality Control Automation",
    description: "Implement computer vision and machine learning for automated quality inspection.",
    icon: BarChart2,
  },
  {
    title: "Production Optimization",
    description: "Leverage AI to optimize production processes and reduce waste.",
    icon: TrendingUp,
  },
]

const projects = [
  {
    title: "AI-Powered Predictive Maintenance for Automotive Manufacturer",
    impact: "Reduced unplanned downtime by 35% and maintenance costs by 25%",
    description:
      "Implemented an IoT and machine learning solution to predict equipment failures and optimize maintenance schedules.",
    link: "/projects/automotive-predictive-maintenance",
  },
  {
    title: "Computer Vision Quality Control for Electronics Assembly",
    impact: "Improved defect detection rate by 40% and reduced manual inspection time by 60%",
    description: "Developed a computer vision system for automated quality control in electronics manufacturing.",
    link: "/projects/electronics-quality-control",
  },
  {
    title: "Production Optimization for Pharmaceutical Company",
    impact: "Increased overall equipment effectiveness (OEE) by 20% and reduced waste by 15%",
    description:
      "Created an AI-driven system to optimize production processes and resource allocation in pharmaceutical manufacturing.",
    link: "/projects/pharma-production-optimization",
  },
]

const manufacturingPerformanceData = [
  { month: "Jan", oee: 65, qualityRate: 92, energyEfficiency: 80 },
  { month: "Feb", oee: 68, qualityRate: 93, energyEfficiency: 82 },
  { month: "Mar", oee: 72, qualityRate: 94, energyEfficiency: 85 },
  { month: "Apr", oee: 75, qualityRate: 95, energyEfficiency: 87 },
  { month: "May", oee: 78, qualityRate: 96, energyEfficiency: 89 },
  { month: "Jun", oee: 80, qualityRate: 97, energyEfficiency: 90 },
]

const ManufacturingDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-blue-50 to-green-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Manufacturing Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={manufacturingPerformanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="oee" stroke="#8884d8" name="Overall Equipment Effectiveness (%)" />
              <Line type="monotone" dataKey="qualityRate" stroke="#82ca9d" name="Quality Rate (%)" />
              <Line type="monotone" dataKey="energyEfficiency" stroke="#ffc658" name="Energy Efficiency (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function ManufacturingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Revolutionizing Manufacturing with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're transforming the manufacturing industry through innovative AI solutions. Our team
          combines deep industry knowledge with cutting-edge technology to optimize operations, improve quality, and
          drive efficiency across the entire manufacturing process.
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
        <h2 className="text-2xl font-bold mb-4">Manufacturing Industry Insights</h2>
        <ManufacturingDashboard />
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
        <p className="text-lg mb-4">Our data-driven solutions have helped manufacturing businesses achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>20-35% reduction in unplanned downtime</li>
          <li>15-30% improvement in overall equipment effectiveness (OEE)</li>
          <li>25-40% increase in quality control accuracy</li>
          <li>10-20% reduction in energy consumption</li>
        </ul>
        <Link href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get in touch to learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

