"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const EcommerceDashboard = dynamic(() => import("@/components/ecommerce-dashboard"), { ssr: false })
const HomeProjectsDashboard = dynamic(() => import("@/components/home-projects-dashboard"), { ssr: false })
const LiveDataInsights = dynamic(() => import("@/components/live-data-insights"), { ssr: false })

export default function OurCompetency() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Competency
        </motion.h2>
        <div className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">E-commerce Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <EcommerceDashboard />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Project Distribution by Industry</CardTitle>
            </CardHeader>
            <CardContent>
              <HomeProjectsDashboard />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Real-time Data Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <LiveDataInsights />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

