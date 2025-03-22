"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  MousePointer,
  ShoppingCart,
  Share2,
  Palette,
  Scissors,
  Grid3X3,
  TrendingUp,
  BarChart2,
  Users,
  Globe,
} from "lucide-react"
import Link from "next/link"
import TrendAnalysisChart from "./trend-analysis-chart"
import TrendSpotterDemo from "./trend-spotter-demo"
import { BookMeetingButton } from "./book-meeting-button"

const dataSources = [
  {
    icon: Search,
    title: "App Searches",
    description: "Analyze user search patterns and queries",
    metrics: { accuracy: 95, coverage: 85 },
  },
  {
    icon: MousePointer,
    title: "Browsing Patterns",
    description: "Track user navigation and interaction behavior",
    metrics: { accuracy: 92, coverage: 90 },
  },
  {
    icon: ShoppingCart,
    title: "Purchasing History",
    description: "Study transaction patterns and preferences",
    metrics: { accuracy: 97, coverage: 88 },
  },
  {
    icon: Share2,
    title: "Social Media Trends",
    description: "Monitor social media engagement and sentiment",
    metrics: { accuracy: 94, coverage: 92 },
  },
]

const analysisCategories = [
  {
    icon: Scissors,
    title: "Style Analysis",
    description: "Identify emerging style trends and preferences",
    insights: [
      "Minimalist designs gaining traction",
      "Sustainable materials trending up",
      "Rise in vintage aesthetics",
    ],
  },
  {
    icon: Palette,
    title: "Color Analysis",
    description: "Track color palette trends and combinations",
    insights: ["Earth tones dominating", "Pastel combinations rising", "Metallic accents emerging"],
  },
  {
    icon: Grid3X3,
    title: "Pattern Recognition",
    description: "Detect pattern trends and motif preferences",
    insights: ["Geometric patterns trending", "Abstract designs increasing", "Nature-inspired motifs popular"],
  },
]

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Trend Detection",
    description: "Identify emerging trends as they happen with our advanced AI algorithms.",
  },
  {
    icon: BarChart2,
    title: "Predictive Analytics",
    description: "Forecast future trends with high accuracy using historical and real-time data.",
  },
  {
    icon: Users,
    title: "Consumer Insights",
    description: "Understand customer preferences and behavior patterns in detail.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Track trends across different regions and markets worldwide.",
  },
]

export default function TrendSpotterDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4">
          Trend Spotter AI: Advanced Market Trend Analysis
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead of the market with our cutting-edge AI-powered trend analysis platform. Identify and capitalize on
          emerging trends before they go mainstream.
        </p>
      </motion.div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">How Trend Spotter AI Works</CardTitle>
              <CardDescription>
                Our AI analyzes multiple data sources to identify and predict emerging market trends with unparalleled
                accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {dataSources.map((source, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <source.icon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold">{source.title}</h4>
                                <p className="text-sm text-gray-600">{source.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <Badge variant="secondary">Accuracy: {source.metrics.accuracy}%</Badge>
                                  <Badge variant="outline">Coverage: {source.metrics.coverage}%</Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Analysis Categories</h3>
                  <div className="space-y-4">
                    {analysisCategories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <category.icon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold">{category.title}</h4>
                                <p className="text-sm text-gray-600">{category.description}</p>
                                <div className="mt-2">
                                  <h5 className="text-sm font-medium mb-1">Latest Insights:</h5>
                                  <ul className="list-disc list-inside text-sm text-gray-600">
                                    {category.insights.map((insight, i) => (
                                      <li key={i}>{insight}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <TrendAnalysisChart />
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Why Choose Trend Spotter AI?</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unrivaled accuracy in trend prediction</li>
                  <li>Real-time data analysis from multiple sources</li>
                  <li>Customizable dashboards and reports</li>
                  <li>Integration with your existing business intelligence tools</li>
                  <li>Expert support from our team of data scientists and market analysts</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <feature.icon className="h-8 w-8 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="demo">
          <Card>
            <CardHeader>
              <CardTitle>Live Trend Analysis Demo</CardTitle>
              <CardDescription>See our Trend Spotter AI in action with real-time data analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendSpotterDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>Current Market Insights</CardTitle>
              <CardDescription>Latest trends and predictions from our AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {analysisCategories.map((category, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <category.icon className="h-6 w-6 text-blue-500 mr-2" />
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {category.insights.map((insight, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <p className="text-sm">{insight}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-blue-50">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Revolutionize Your Market Strategy?</h2>
          <p className="text-lg mb-6">
            Discover how Trend Spotter AI can help your business identify and capitalize on emerging trends. Join
            industry leaders who trust our AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <BookMeetingButton />
            <Link href="/contact">
              <Button variant="outline">Contact Sales</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What is Trend Spotter AI?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Trend Spotter AI is an advanced market trend analysis tool that uses artificial intelligence to
                identify, analyze, and predict emerging trends across various industries. It processes data from
                multiple sources to provide real-time insights and forecasts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How accurate is Trend Spotter AI?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Trend Spotter AI boasts an industry-leading accuracy rate, consistently outperforming traditional market
                analysis methods. Our AI models are continuously trained on the latest data, ensuring the highest level
                of precision in trend prediction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can Trend Spotter AI be customized for my industry?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, Trend Spotter AI is highly customizable. Our team works closely with you to tailor the tool to your
                specific industry, target markets, and business needs, ensuring you receive the most relevant and
                actionable insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

