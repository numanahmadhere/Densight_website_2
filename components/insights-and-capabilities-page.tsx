"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import RetailDashboard from "./retail-dashboard"
import SupplyChainDashboard from "./supply-chain-dashboard"
import ManufacturingDashboard from "./manufacturing-dashboard"
import FinanceDashboard from "./finance-dashboard"
import EnvironmentalDashboard from "./environmental-dashboard"
import AutomobileDashboard from "./automobile-dashboard"
import HospitalityDashboard from "./hospitality-dashboard"
import RealtimeDataGraph from "./realtime-data-graph"

const industries = [
  {
    name: "Retail",
    component: RetailDashboard,
    impact: "Increased sales by 25% and improved customer retention by 30%",
    link: "/industries/retail",
  },
  {
    name: "Supply Chain",
    component: SupplyChainDashboard,
    impact: "Reduced inventory costs by 20% and improved on-time deliveries by 35%",
    link: "/industries/supply-chain",
  },
  {
    name: "Manufacturing",
    component: ManufacturingDashboard,
    impact: "Increased overall equipment effectiveness (OEE) by 15% and reduced downtime by 25%",
    link: "/industries/manufacturing",
  },
  {
    name: "Finance",
    component: FinanceDashboard,
    impact: "Improved risk assessment accuracy by 40% and increased fraud detection by 60%",
    link: "/industries/finance",
  },
  {
    name: "Environmental",
    component: EnvironmentalDashboard,
    impact: "Reduced carbon emissions by 30% and improved resource efficiency by 25%",
    link: "/industries/environmental",
  },
  {
    name: "Automobile",
    component: AutomobileDashboard,
    impact: "Increased production efficiency by 20% and reduced quality control issues by 35%",
    link: "/industries/automobile",
  },
  {
    name: "Hospitality",
    component: HospitalityDashboard,
    impact: "Improved guest satisfaction by 30% and increased RevPAR by 25%",
    link: "/industries/hospitality",
  },
]

const blogPosts = [
  {
    title: "The Future of Retail: AI-Driven Personalization",
    description: "Explore how AI is revolutionizing the retail industry through personalized shopping experiences.",
    date: "2023-06-15",
    readTime: "5 min read",
    link: "/blogs/ai-driven-personalization",
  },
  {
    title: "Leveraging Big Data for Supply Chain Optimization",
    description: "Learn how big data analytics can streamline your supply chain and reduce costs.",
    date: "2023-05-28",
    readTime: "7 min read",
    link: "/blogs/big-data-supply-chain",
  },
  {
    title: "Predictive Analytics in Manufacturing: A Case Study",
    description: "Discover how a major manufacturer increased efficiency by 30% using predictive analytics.",
    date: "2023-05-10",
    readTime: "6 min read",
    link: "/blogs/predictive-analytics-case-study",
  },
]

export default function InsightsAndCapabilitiesPage() {
  const [activeTab, setActiveTab] = useState("capabilities")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Insights & Capabilities
      </motion.h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="capabilities">Our Capabilities</TabsTrigger>
          <TabsTrigger value="insights">Latest Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="capabilities">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      <Link href={industry.link} className="hover:text-blue-600 transition-colors">
                        {industry.name} Industry Insights
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <industry.component />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Impact:</h3>
                      <p>{industry.impact}</p>
                    </div>
                    <Link href={industry.link} className="mt-4 inline-block text-blue-600 hover:underline">
                      Learn more about our {industry.name} solutions <ArrowRight className="inline-block ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="insights">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500">
                      {post.date} • {post.readTime}
                    </p>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Link href={post.link} className="text-blue-600 hover:underline">
                      Read more <ArrowRight className="inline-block ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Real-time AI Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <RealtimeDataGraph />
        </CardContent>
      </Card>
    </div>
  )
}

