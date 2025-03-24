"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, Globe } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AI-Powered Quality Control for Major Automaker",
    industry: "Automobile",
    impact: "Reduced defect rates by 40% and improved production efficiency by 25%",
    description: "Implemented computer vision and machine learning for real-time quality inspection.",
    link: "/projects/auto-quality-control",
    date: "March 2023",
  },
  {
    title: "Smart Logistics Optimization for E-commerce Giant",
    industry: "Supply Chain",
    impact: "Decreased delivery times by 30% and reduced transportation costs by 25%",
    link: "/projects/ecommerce-logistics-optimization",
    date: "June 2023",
  },
  {
    title: "AI-Driven Personalization for Global Hotel Chain",
    industry: "Hospitality",
    impact: "Increased guest satisfaction by 30% and boosted repeat bookings by 25%",
    link: "/projects/hotel-personalization",
    date: "November 2023",
  },
  {
    title: "Predictive Maintenance System for Manufacturing Plant",
    industry: "Manufacturing",
    impact: "Reduced unplanned downtime by 35% and maintenance costs by 20%",
    description: "Developed an IoT-based system to predict equipment failures and optimize maintenance schedules.",
    link: "/projects/predictive-maintenance-manufacturing",
    date: "March 2024",
  },
  {
    title: "AI-Powered Fraud Detection for Financial Institution",
    industry: "Finance",
    impact: "Improved fraud detection rate by 60% while reducing false positives by 40%",
    description: "Implemented a machine learning model to detect fraudulent transactions in real-time.",
    link: "/projects/fraud-detection-finance",
    date: "June 2024",
  },
  {
    title: "Sustainable Energy Management for Smart City",
    industry: "Environmental",
    impact: "Reduced energy consumption by 25% and carbon emissions by 30%",
    description: "Created an AI-driven energy management system for optimizing resource usage across the city.",
    link: "/projects/smart-city-energy-management",
    date: "December 2024",
  },
]

const caseStudies = [
  {
    title: "Revolutionizing Inventory Management for RetailGiant",
    description: "How we helped a major retail chain reduce stockouts by 30% and increase profit margins.",
    industry: "Retail",
    impact: "Reduced stockouts by 30%",
    link: "/case-studies/retailgiant-inventory",
    date: "October 2023",
  },
  {
    title: "Boosting Customer Engagement for FashionForward",
    description: "Our customer segmentation model helped increase customer retention rates by 25%.",
    industry: "Fashion E-commerce",
    impact: "Increased retention by 25%",
    link: "/case-studies/fashionforward-engagement",
    date: "November 2024",
  },
  {
    title: "Optimizing Supply Chain for ElectroWorld",
    description:
      "How our sales forecasting engine reduced supply chain costs by 15% for a global electronics retailer.",
    industry: "Consumer Electronics",
    impact: "Reduced costs by 15%",
    link: "/case-studies/electroworld-supply-chain",
    date: "December 2024",
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Case Studies
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Our Commitment to Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At Densight AI, we're dedicated to delivering cutting-edge AI solutions that drive real business value.
              Our team of experts works tirelessly to ensure that every project we undertake is executed with precision,
              innovation, and a deep understanding of our clients' needs.
            </p>
            <p className="mb-4">
              We believe in fostering long-term partnerships with our clients, providing ongoing support and
              continuously optimizing our solutions to adapt to changing business landscapes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 text-blue-500 mb-4" />
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-lg text-center">Satisfied Clients</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <p className="text-3xl font-bold">250+</p>
                  <p className="text-lg text-center">Projects Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Globe className="h-12 w-12 text-purple-500 mb-4" />
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-lg text-center">Countries Served</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="caseStudies">Case Studies</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.industry}</CardDescription>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 font-semibold text-blue-600">{project.impact}</p>
                    <p className="mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.date}</p>
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
        </TabsContent>
        <TabsContent value="caseStudies">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.industry}</CardDescription>
                    <p className="text-sm text-gray-500">{study.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 font-semibold text-blue-600">{study.impact}</p>
                    <p className="mb-4">{study.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{study.date}</p>
                    <Link href={study.link}>
                      <Button variant="outline">
                        Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6">
          Let's discuss how Densight AI can help you leverage cutting-edge AI solutions to drive growth and innovation
          in your industry.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

