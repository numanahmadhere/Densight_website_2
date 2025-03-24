"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Zap,
  Cog,
  ShoppingCart,
  Truck,
  Building,
  Leaf,
  Hotel,
  TrendingUp,
  BarChart2,
  Globe,
  Database,
} from "lucide-react"
import dynamic from "next/dynamic"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { BookMeetingButton } from "./book-meeting-button"

const RetailDashboard = dynamic(() => import("./retail-dashboard"), { ssr: false })
const SupplyChainDashboard = dynamic(() => import("./supply-chain-dashboard"), { ssr: false })
const ManufacturingDashboard = dynamic(() => import("./manufacturing-dashboard"), { ssr: false })
const FinanceDashboard = dynamic(() => import("./finance-dashboard"), { ssr: false })
const EnvironmentalDashboard = dynamic(() => import("./environmental-dashboard"), { ssr: false })
const AutomobileDashboard = dynamic(() => import("./automobile-dashboard"), { ssr: false })
const HospitalityDashboard = dynamic(() => import("./hospitality-dashboard"), { ssr: false })

const industries = [
  {
    name: "Retail",
    component: RetailDashboard,
    icon: ShoppingCart,
    impact: "Increased sales by 25% and improved customer retention by 30% using AI-driven personalization",
    link: "/industries/retail",
    description: "Revolutionize retail with AI-powered inventory management and customer insights.",
    useCases: ["Demand Forecasting", "Personalized Recommendations", "Dynamic Pricing"],
  },
  {
    name: "Supply Chain",
    component: SupplyChainDashboard,
    icon: Truck,
    impact: "Reduced inventory costs by 20% and improved on-time deliveries by 35% with AI optimization",
    link: "/industries/supply-chain",
    description: "Optimize supply chains with AI-driven predictive analytics and real-time tracking.",
    useCases: ["Predictive Maintenance", "Route Optimization", "Inventory Management"],
  },
  {
    name: "Manufacturing",
    component: ManufacturingDashboard,
    icon: Cog,
    impact: "Increased overall equipment effectiveness (OEE) by 15% and reduced downtime by 25% using AI",
    link: "/industries/manufacturing",
    description: "Enhance manufacturing processes with AI-powered predictive maintenance and quality control.",
    useCases: ["Predictive Maintenance", "Quality Control", "Process Optimization"],
  },
  {
    name: "Finance",
    component: FinanceDashboard,
    icon: Building,
    impact: "Improved risk assessment accuracy by 40% and increased fraud detection by 60% with AI models",
    link: "/industries/finance",
    description: "Transform financial services with AI-driven risk analysis and fraud detection.",
    useCases: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading"],
  },
  {
    name: "Environmental",
    component: EnvironmentalDashboard,
    icon: Leaf,
    impact: "Reduced carbon emissions by 30% and improved resource efficiency by 25% using AI analytics",
    link: "/industries/environmental",
    description: "Drive sustainability with AI-enabled environmental monitoring and optimization.",
    useCases: ["Energy Optimization", "Waste Reduction", "Climate Risk Assessment"],
  },
  {
    name: "Automobile",
    component: AutomobileDashboard,
    icon: Zap,
    impact: "Increased production efficiency by 20% and reduced quality control issues by 35% with AI",
    link: "/industries/automobile",
    description: "Accelerate automotive innovation with AI in design, production, and autonomous driving.",
    useCases: ["Autonomous Driving", "Predictive Maintenance", "Supply Chain Optimization"],
  },
  {
    name: "Hospitality",
    component: HospitalityDashboard,
    icon: Hotel,
    impact: "Improved guest satisfaction by 30% and increased RevPAR by 25% using AI-driven insights",
    link: "/industries/hospitality",
    description: "Elevate guest experiences with AI-powered personalization and operational efficiency.",
    useCases: ["Personalized Recommendations", "Dynamic Pricing", "Chatbots for Customer Service"],
  },
]

const technologies = [
  {
    name: "AI Implementation",
    icon: Zap,
    description: "Expert integration of AI solutions into existing business processes and systems",
    proficiency: 95,
  },
  {
    name: "Advanced Analytics",
    icon: BarChart2,
    description: "In-depth data analysis and predictive modeling for actionable insights",
    proficiency: 93,
  },
  {
    name: "AI Consulting",
    icon: Brain,
    description: "Strategic guidance on AI adoption and digital transformation",
    proficiency: 90,
  },
  {
    name: "Natural Language Processing",
    icon: Globe,
    description: "Cutting-edge NLP for text analysis, chatbots, and language understanding",
    proficiency: 92,
  },
  {
    name: "Machine Learning",
    icon: TrendingUp,
    description: "Development and deployment of custom machine learning models",
    proficiency: 94,
  },
  {
    name: "Data Engineering",
    icon: Database,
    description: "Building robust data pipelines and infrastructure for AI systems",
    proficiency: 91,
  },
]

const caseStudies = [
  {
    title: "Retail Giant Achieves 40% Sales Boost",
    description:
      "Learn how our AI-powered recommendation engine revolutionized the shopping experience for a major e-commerce platform.",
    link: "/case-studies/retail-sales-boost",
  },
  {
    title: "Manufacturing Efficiency Increased by 35%",
    description:
      "Discover how our predictive maintenance solution dramatically reduced downtime for a global manufacturing company.",
    link: "/case-studies/manufacturing-efficiency",
  },
  {
    title: "Financial Fraud Detection Improved by 60%",
    description:
      "Explore how our advanced machine learning models enhanced security measures for a leading financial institution.",
    link: "/case-studies/financial-fraud-detection",
  },
]

export default function CapabilitiesDashboard() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].name)
  const [animatedProficiency, setAnimatedProficiency] = useState(Array(technologies.length).fill(0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProficiency(technologies.map((tech) => tech.proficiency))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cutting-Edge AI Capabilities
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Densight AI leverages state-of-the-art artificial intelligence to deliver transformative solutions across
        industries. Our advanced capabilities drive innovation, efficiency, and growth for businesses worldwide.
      </motion.p>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Our AI Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <tech.icon className="h-6 w-6 text-blue-500" />
                  <CardTitle>{tech.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span>{animatedProficiency[index]}%</span>
                  </div>
                  <Progress value={animatedProficiency[index]} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Industry-Specific Solutions</h2>
        <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
          <TabsList className="flex flex-wrap justify-start gap-2 mb-8 max-w-full overflow-x-auto pb-2">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.name}
                value={industry.name}
                className="px-3 py-1 text-sm whitespace-nowrap rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <industry.icon className="w-4 h-4 mr-1 inline-block" />
                <span>{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {industries.map((industry) => (
            <TabsContent key={industry.name} value={industry.name}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{industry.name} Industry Solutions</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Impacts</h3>
                      <p className="text-base sm:text-lg font-medium text-blue-600 mb-4">{industry.impact}</p>
                      <h4 className="text-base sm:text-lg font-semibold mb-2">Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {industry.useCases.map((useCase, index) => (
                          <li key={index}>{useCase}</li>
                        ))}
                      </ul>
                      <Link href={industry.link} className="mt-4 inline-block">
                        <Button>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center">
                      <div className="w-full h-full">
                        {industry.component ? (
                          <industry.component />
                        ) : (
                          <p className="text-gray-500 text-center">Loading visualization...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{study.description}</p>
              </CardContent>
              <CardContent className="pt-0">
                <Link href={study.link}>
                  <Button variant="outline" className="w-full">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does Densight AI ensure data privacy and security?</AccordionTrigger>
            <AccordionContent>
              Densight AI prioritizes data privacy and security. We employ state-of-the-art encryption, secure cloud
              infrastructure, and adhere to international data protection regulations. Our AI models are designed with
              privacy-preserving techniques, and we offer on-premises deployment options for sensitive data handling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can Densight AI's solutions be customized for specific business needs?</AccordionTrigger>
            <AccordionContent>
              Densight AI specializes in tailoring our AI solutions to meet the unique challenges and requirements of
              each client. Our team of experts works closely with your business to understand your specific needs and
              develop customized AI models and applications that seamlessly integrate with your existing systems and
              processes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What kind of ROI can businesses expect from implementing Densight AI solutions?
            </AccordionTrigger>
            <AccordionContent>
              While ROI can vary depending on the specific application and industry, our clients typically see
              significant returns on their investment. On average, businesses implementing our AI solutions have
              reported 20-40% increases in operational efficiency, 15-30% reductions in costs, and 25-50% improvements
              in decision-making accuracy. We work closely with each client to establish clear KPIs and measure the
              tangible impact of our solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8">
          Discover how Densight AI can help you leverage cutting-edge AI solutions to drive growth, optimize operations,
          and gain a competitive edge in your industry.
        </p>
        <div className="flex justify-center space-x-4">
          <BookMeetingButton />
          <Link href="/contact">
            <Button variant="outline">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

