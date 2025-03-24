"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, TrendingUp, Search } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "@/components/book-meeting-button"

export default function AdvancedDataAnalyticsService() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Advanced Data Analytics
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your raw data into actionable insights with our cutting-edge analytics solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-blue-500" />
              Pattern Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Uncover hidden patterns and trends in your data using advanced statistical techniques and machine learning
              algorithms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-blue-500" />
              Predictive Modeling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Forecast future trends and outcomes with high accuracy using our state-of-the-art predictive models.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-6 w-6 text-blue-500" />
              Real-time Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Make data-driven decisions in real-time with our powerful streaming analytics capabilities.</p>
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
            <CardTitle>How We Can Help</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our Advanced Data Analytics services help businesses:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identify new revenue opportunities</li>
              <li>Optimize operational efficiency</li>
              <li>Enhance customer experiences</li>
              <li>Mitigate risks and fraud</li>
              <li>Drive innovation through data-driven insights</li>
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
        <h2 className="text-2xl font-bold mb-4">Ready to unlock the power of your data?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our Advanced Data Analytics solutions can drive growth and innovation for your business.
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

