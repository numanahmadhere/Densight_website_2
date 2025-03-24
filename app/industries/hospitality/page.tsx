"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Hotel, Utensils, Users, BarChart2 } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Guest Experience Optimization",
    description: "Use AI to personalize and enhance guest experiences.",
    icon: Users,
  },
  {
    title: "Revenue Management",
    description: "Optimize pricing and occupancy with predictive analytics.",
    icon: Hotel,
  },
  {
    title: "F&B Inventory Optimization",
    description: "Reduce waste and improve efficiency in food and beverage operations.",
    icon: Utensils,
  },
]

const projects = [
  {
    title: "AI-Driven Personalization for Global Hotel Chain",
    impact: "Increased guest satisfaction by 30% and boosted repeat bookings by 25%",
    description: "Implemented an AI system for personalized guest experiences and targeted marketing.",
    link: "/projects/hotel-personalization",
    icon: Users,
  },
  {
    title: "Dynamic Pricing Optimization for Resort Group",
    impact: "Improved RevPAR by 20% and overall revenue by 15%",
    description: "Developed a machine learning model for real-time pricing adjustments based on demand forecasting.",
    link: "/projects/resort-dynamic-pricing",
    icon: BarChart2,
  },
  {
    title: "Smart F&B Management for Restaurant Chain",
    impact: "Reduced food waste by 40% and improved inventory turnover by 30%",
    description: "Created an AI-powered system for optimizing food inventory and menu planning.",
    link: "/projects/restaurant-inventory-optimization",
    icon: Utensils,
  },
]

const dashboardData = [
  { month: "Jan", occupancyRate: 65, avgDailyRate: 120, revPAR: 78 },
  { month: "Feb", occupancyRate: 70, avgDailyRate: 125, revPAR: 87.5 },
  { month: "Mar", occupancyRate: 75, avgDailyRate: 130, revPAR: 97.5 },
  { month: "Apr", occupancyRate: 80, avgDailyRate: 135, revPAR: 108 },
  { month: "May", occupancyRate: 85, avgDailyRate: 140, revPAR: 119 },
  { month: "Jun", occupancyRate: 90, avgDailyRate: 145, revPAR: 130.5 },
]

const HospitalityDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-orange-800">Hospitality Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="occupancyRate" fill="#8884d8" name="Occupancy Rate (%)">
                {dashboardData.map((entry, index) => (
                  <motion.rect
                    key={`rect-${index}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Bar>
              <Bar yAxisId="right" dataKey="avgDailyRate" fill="#82ca9d" name="Avg. Daily Rate ($)">
                {dashboardData.map((entry, index) => (
                  <motion.rect
                    key={`rect-${index}`}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Bar>
              <Bar yAxisId="right" dataKey="revPAR" fill="#ffc658" name="RevPAR ($)">
                {dashboardData.map((entry, index) => (
                  <motion.rect
                    key={`rect-${index}`}
                    initial={{ y: 100, opacity: 0 }}
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

export default function HospitalityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-orange-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Revolutionizing Hospitality with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're transforming the hospitality industry through innovative AI solutions. Our team combines
          deep industry knowledge with cutting-edge technology to enhance guest experiences, optimize operations, and
          drive revenue growth across hotels, resorts, and restaurants.
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
                  <service.icon className="h-8 w-8 text-orange-500 mb-2" />
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
        <h2 className="text-2xl font-bold mb-4">Hospitality Industry Insights</h2>
        <HospitalityDashboard />
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
                  <project.icon className="h-8 w-8 text-orange-500 mb-2" />
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
        <p className="text-lg mb-4">Our data-driven solutions have helped hospitality businesses achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>20-35% increase in guest satisfaction scores</li>
          <li>15-25% improvement in RevPAR (Revenue Per Available Room)</li>
          <li>30-50% reduction in food waste</li>
          <li>10-20% increase in overall operational efficiency</li>
        </ul>
        <Link href="/contact">
          <Button className="bg-orange-600 hover:bg-orange-700">
            Get in touch to learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

