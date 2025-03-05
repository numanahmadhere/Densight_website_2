"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Clock, BarChart2, Zap, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Client Satisfaction",
    value: "97%",
    icon: Users,
    description: "High satisfaction",
  },
  {
    title: "Average ROI",
    value: "253%",
    icon: TrendingUp,
    description: "Increased ROI",
  },
  {
    title: "Time-to-Value",
    value: "4 weeks",
    icon: Clock,
    description: "Quick results",
  },
  {
    title: "Work Hours Saved",
    value: "37%",
    icon: Zap,
    description: "Improved productivity",
  },
  {
    title: "Data Insights",
    value: "10x",
    icon: BarChart2,
    description: "More actionable insights",
  },
  {
    title: "Cost Reduction",
    value: "29%",
    icon: DollarSign,
    description: "Lower operational costs",
  },
]

export default function ClientSatisfaction({ className }: { className?: string }) {
  return (
    <section className={`py-12 pb-8 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-duration-300 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-6 w-6 text-blue-500" />
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

