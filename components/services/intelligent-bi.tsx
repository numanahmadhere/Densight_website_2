"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PieChart, BarChart, LineChart } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "@/components/book-meeting-button"

export default function IntelligentBIService() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Intelligent Business Intelligence
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Visualize complex data for better strategic planning and execution with our advanced BI solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="mr-2 h-6 w-6 text-blue-500" />
              Interactive Dashboards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Create dynamic, interactive dashboards that provide real-time insights into your business performance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2 h-6 w-6 text-blue-500" />
              Data Warehousing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Implement robust data warehousing solutions for efficient storage and retrieval of your business data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="mr-2 h-6 w-6 text-blue-500" />
              Predictive Analytics Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enhance your BI with predictive analytics to forecast trends and make data-driven decisions.</p>
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Benefits of Intelligent BI</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improved decision-making through data-driven insights</li>
              <li>Enhanced operational efficiency and cost reduction</li>
              <li>Better understanding of customer behavior and preferences</li>
              <li>Identification of new business opportunities and revenue streams</li>
              <li>Increased competitive advantage in your industry</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to transform your data into actionable insights?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our Intelligent Business Intelligence solutions can empower your decision-making process.
        </p>
        <div className="flex justify-center space-x-4">
          <BookMeetingButton />
          <Link href="/contact">
            <Button variant="outline">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

