"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, BarChart2, Box } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const services = [
  {
    title: "Demand Forecasting",
    description: "Use AI to accurately predict demand and optimize inventory levels.",
    icon: BarChart2,
  },
  {
    title: "Route Optimization",
    description: "Improve logistics efficiency with AI-powered route planning.",
    icon: Truck,
  },
  {
    title: "Warehouse Management",
    description: "Optimize warehouse operations with data-driven insights.",
    icon: Box,
  },
]

const projects = [
  {
    title: "AI-Powered Demand Forecasting for Global Retailer",
    impact: "Reduced inventory costs by 20% and improved product availability by 15%",
    description:
      "Implemented a machine learning model for accurate demand prediction across multiple product categories.",
    link: "/projects/retail-demand-forecasting",
    icon: BarChart2,
  },
  {
    title: "Smart Logistics Optimization for E-commerce Giant",
    impact: "Decreased delivery times by 30% and reduced transportation costs by 25%",
    description: "Developed an AI system for real-time route optimization and load balancing.",
    link: "/projects/ecommerce-logistics-optimization",
    icon: Truck,
  },
  {
    title: "Automated Warehouse Management for Distribution Center",
    impact: "Increased warehouse efficiency by 40% and reduced picking errors by 60%",
    description: "Created an AI-driven system for optimal inventory placement and automated picking processes.",
    link: "/projects/warehouse-automation",
    icon: Box,
  },
]

const supplyChainPerformanceData = [
  { month: "Jan", inventoryTurnover: 4, orderFulfillmentRate: 92, transportationCosts: 100, onTimeDelivery: 88 },
  { month: "Feb", inventoryTurnover: 4.2, orderFulfillmentRate: 93, transportationCosts: 98, onTimeDelivery: 89 },
  { month: "Mar", inventoryTurnover: 4.5, orderFulfillmentRate: 94, transportationCosts: 95, onTimeDelivery: 91 },
  { month: "Apr", inventoryTurnover: 4.8, orderFulfillmentRate: 95, transportationCosts: 93, onTimeDelivery: 92 },
  { month: "May", inventoryTurnover: 5, orderFulfillmentRate: 96, transportationCosts: 90, onTimeDelivery: 94 },
  { month: "Jun", inventoryTurnover: 5.2, orderFulfillmentRate: 97, transportationCosts: 88, onTimeDelivery: 95 },
]

const WorldMap = dynamic(() => import("@/components/WorldMap"), { ssr: false })

const SupplyChainDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-blue-50 to-green-50 shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Supply Chain Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Inventory Turnover</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">5.2</div>
              <p className="text-sm text-gray-600">10% increase from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Order Fulfillment Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">97%</div>
              <p className="text-sm text-gray-600">2% increase from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Transportation Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">-12%</div>
              <p className="text-sm text-gray-600">Reduction from baseline</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">On-Time Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">95%</div>
              <p className="text-sm text-gray-600">3% increase from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={supplyChainPerformanceData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="inventoryTurnover"
                stroke="#8884d8"
                name="Inventory Turnover"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="orderFulfillmentRate"
                stroke="#82ca9d"
                name="Order Fulfillment Rate (%)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="transportationCosts"
                stroke="#ffc658"
                name="Transportation Costs (Index)"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="onTimeDelivery"
                stroke="#ff7300"
                name="On-Time Delivery (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-br from-blue-50 to-green-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Global Supply Chain Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px]">
          <WorldMap />
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function SupplyChainPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Revolutionizing Supply Chain with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're transforming supply chain management through innovative AI solutions. Our team combines
          deep industry knowledge with cutting-edge technology to optimize operations, reduce costs, and improve overall
          supply chain performance across industries.
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
        <h2 className="text-2xl font-bold mb-4">Supply Chain Industry Insights</h2>
        <SupplyChainDashboard />
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
        <p className="text-lg mb-4">Our data-driven solutions have helped supply chain businesses achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>15-30% reduction in inventory holding costs</li>
          <li>20-40% improvement in on-time deliveries</li>
          <li>25-50% increase in warehouse efficiency</li>
          <li>10-20% reduction in overall supply chain costs</li>
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

