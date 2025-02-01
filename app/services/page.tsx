"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, Brain, LineChart } from "lucide-react"

const services = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights.",
    icon: BarChart2,
    content:
      "Our data analytics services help you uncover hidden patterns and trends in your data. We use advanced statistical techniques and machine learning algorithms to analyze large datasets and provide meaningful insights that drive business decisions.",
    features: ["Pattern Recognition", "Predictive Modeling", "Data Visualization"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Leverage AI to automate and optimize your processes.",
    icon: Brain,
    content:
      "Our machine learning solutions enable you to build predictive models and automate complex decision-making processes. From customer churn prediction to product recommendation systems, we help you harness the power of AI to gain a competitive edge.",
    features: ["Neural Networks", "Natural Language Processing", "Computer Vision"],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Visualize your data for better decision making.",
    icon: LineChart,
    content:
      "Our business intelligence services provide you with intuitive dashboards and reports that make it easy to understand and act on your data. We help you set up data warehouses, create ETL pipelines, and design interactive visualizations that bring your data to life.",
    features: ["Interactive Dashboards", "Real-time Reporting", "KPI Tracking"],
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("data-analytics")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Our Services</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {services.map((service) => (
            <TabsTrigger key={service.id} value={service.id} className="text-left">
              <service.icon className="h-5 w-5 mr-2" />
              {service.title}
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
              <CardContent>
                <p className="mb-4">{service.content}</p>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

