"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { motion } from "framer-motion"

const services = [
  {
    title: "Risk Assessment and Management",
    description: "Use AI to analyze and predict financial risks more accurately.",
    icon: Shield,
  },
  {
    title: "Fraud Detection",
    description: "Implement machine learning models to detect and prevent fraudulent activities.",
    icon: DollarSign,
  },
  {
    title: "Algorithmic Trading",
    description: "Develop AI-powered trading strategies for improved market performance.",
    icon: TrendingUp,
  },
]

const projects = [
  {
    title: "AI-Driven Risk Assessment for Global Bank",
    impact: "Improved risk prediction accuracy by 30% and reduced loan defaults by 25%",
    description:
      "Implemented a machine learning model for more accurate credit risk assessment and loan approval processes.",
    link: "/projects/bank-risk-assessment",
  },
  {
    title: "Real-time Fraud Detection System for Payment Processor",
    impact: "Reduced fraudulent transactions by 40% and false positives by 60%",
    description: "Developed an AI-powered fraud detection system that analyzes transactions in real-time.",
    link: "/projects/payment-fraud-detection",
  },
  {
    title: "Algorithmic Trading Platform for Hedge Fund",
    impact: "Increased annual returns by 15% and reduced trading costs by 20%",
    description: "Created an AI-driven algorithmic trading platform that adapts to market conditions in real-time.",
    link: "/projects/algo-trading-platform",
  },
]

const financialPerformanceData = [
  { month: "Jan", returns: 5, riskScore: 3, fraudRate: 0.5 },
  { month: "Feb", returns: 5.5, riskScore: 3.2, fraudRate: 0.48 },
  { month: "Mar", returns: 6, riskScore: 3.5, fraudRate: 0.45 },
  { month: "Apr", returns: 6.2, riskScore: 3.3, fraudRate: 0.42 },
  { month: "May", returns: 6.5, riskScore: 3.1, fraudRate: 0.4 },
  { month: "Jun", returns: 7, riskScore: 3, fraudRate: 0.38 },
]

const FinanceDashboard = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Card className="bg-gradient-to-br from-blue-50 to-green-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-800">Financial Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={financialPerformanceData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="returns" stroke="#8884d8" name="Returns (%)" />
              <Line yAxisId="left" type="monotone" dataKey="riskScore" stroke="#82ca9d" name="Risk Score" />
              <Line yAxisId="right" type="monotone" dataKey="fraudRate" stroke="#ffc658" name="Fraud Rate (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function FinancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Transforming Finance with AI
      </motion.h1>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At Densight AI, we're revolutionizing the finance industry through innovative AI solutions. Our team combines
          deep financial expertise with cutting-edge technology to enhance risk management, detect fraud, and optimize
          trading strategies for financial institutions of all sizes.
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
        <h2 className="text-2xl font-bold mb-4">Finance Industry Insights</h2>
        <FinanceDashboard />
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
        <p className="text-lg mb-4">Our data-driven solutions have helped financial institutions achieve:</p>
        <ul className="list-disc list-inside mb-4">
          <li>25-40% improvement in risk assessment accuracy</li>
          <li>30-50% reduction in fraudulent transactions</li>
          <li>15-25% increase in trading returns</li>
          <li>20-35% reduction in operational costs</li>
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

