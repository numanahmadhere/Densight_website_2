"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  BarChart2,
  Brain,
  LineChart,
  Zap,
  Cog,
  ShoppingCart,
  Truck,
  Building,
  Leaf,
  Hotel,
} from "lucide-react"

const services = [
  {
    id: "data-analytics",
    title: "Advanced Data Analytics",
    description: "Transform your raw data into actionable insights.",
    icon: BarChart2,
    content:
      "Our advanced data analytics services help you uncover hidden patterns and trends in your data. We use cutting-edge statistical techniques and machine learning algorithms to analyze large datasets and provide meaningful insights that drive business decisions.",
    features: ["Pattern Recognition", "Predictive Modeling", "Data Visualization", "Real-time Analytics"],
    caseStudy: {
      title: "Global Retailer Boosts Sales by 25%",
      description:
        "Learn how our advanced analytics solution helped a major retailer increase sales and optimize inventory.",
      link: "/case-studies/retail-analytics",
    },
  },
  {
    id: "machine-learning",
    title: "AI & Machine Learning",
    description: "Leverage AI to automate and optimize your processes.",
    icon: Brain,
    content:
      "Our AI and machine learning solutions enable you to build predictive models and automate complex decision-making processes. From customer churn prediction to product recommendation systems, we help you harness the power of AI to gain a competitive edge.",
    features: ["Neural Networks", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
    caseStudy: {
      title: "AI-Driven Personalization Increases Customer Retention by 40%",
      description: "Discover how our AI solution transformed customer engagement for a leading e-commerce platform.",
      link: "/case-studies/ai-personalization",
    },
  },
  {
    id: "business-intelligence",
    title: "Intelligent BI",
    description: "Visualize your data for better decision making.",
    icon: LineChart,
    content:
      "Our intelligent business intelligence services provide you with intuitive dashboards and reports that make it easy to understand and act on your data. We help you set up data warehouses, create ETL pipelines, and design interactive visualizations that bring your data to life.",
    features: ["Interactive Dashboards", "Real-time Reporting", "KPI Tracking", "Predictive Analytics Integration"],
    caseStudy: {
      title: "Manufacturing Firm Reduces Costs by 30% with Smart BI",
      description: "See how our BI solution helped a manufacturing company optimize operations and cut costs.",
      link: "/case-studies/manufacturing-bi",
    },
  },
]

const industries = [
  { name: "Retail", icon: ShoppingCart, link: "/industries/retail" },
  { name: "Supply Chain", icon: Truck, link: "/industries/supply-chain" },
  { name: "Manufacturing", icon: Cog, link: "/industries/manufacturing" },
  { name: "Finance", icon: Building, link: "/industries/finance" },
  { name: "Environmental", icon: Leaf, link: "/industries/environmental" },
  { name: "Automobile", icon: Zap, link: "/industries/automobile" },
  { name: "Hospitality", icon: Hotel, link: "/industries/hospitality" },
]

export default function ServicesDashboard() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Transforming Businesses with AI-Powered Solutions
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At Densight AI, we deliver cutting-edge AI and data science solutions tailored to your specific business needs.
        Our expert team combines deep industry knowledge with advanced analytics to drive growth, optimize operations,
        and create lasting competitive advantages.
      </motion.p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
        <TabsList className="flex flex-col sm:flex-row w-full">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="flex-1 text-left flex items-center justify-start p-2 text-sm sm:text-base"
            >
              <service.icon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="truncate">{service.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.id} value={service.id}>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <service.icon className="h-6 w-6 text-blue-500" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>{service.content}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Featured Case Study</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold mb-2">{service.caseStudy.title}</h5>
                    <p className="mb-4">{service.caseStudy.description}</p>
                    <Link href={service.caseStudy.link}>
                      <Button variant="outline">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.link}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <industry.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">
          Let's discuss how Densight AI can help you leverage the power of AI and data science to drive growth and
          innovation in your industry.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

