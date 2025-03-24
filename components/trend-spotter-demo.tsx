"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

const trends = [
  {
    category: "Style",
    trends: [
      { name: "Minimalist Design", score: 85, change: 12, direction: "up" },
      { name: "Sustainable Materials", score: 78, change: 15, direction: "up" },
      { name: "Vintage Aesthetics", score: 72, change: 8, direction: "up" },
    ],
  },
  {
    category: "Color",
    trends: [
      { name: "Earth Tones", score: 92, change: 18, direction: "up" },
      { name: "Pastel Combinations", score: 88, change: 14, direction: "up" },
      { name: "Metallic Accents", score: 76, change: 10, direction: "up" },
    ],
  },
  {
    category: "Pattern",
    trends: [
      { name: "Geometric Shapes", score: 89, change: 16, direction: "up" },
      { name: "Abstract Designs", score: 82, change: 12, direction: "up" },
      { name: "Nature-Inspired", score: 79, change: 9, direction: "up" },
    ],
  },
]

export default function TrendSpotterDemo() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % trends.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trends.map((category, index) => (
          <AnimatePresence key={category.category} mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={index === activeIndex ? "border-blue-500 border-2" : ""}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">{category.category} Trends</h3>
                  <div className="space-y-4">
                    {category.trends.map((trend) => (
                      <div key={trend.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{trend.name}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant={trend.direction === "up" ? "default" : "destructive"}>
                              {trend.direction === "up" ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {trend.change}%
                            </Badge>
                            <span className="text-sm text-gray-500">Score: {trend.score}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        Live demo showing real-time trend analysis across different categories. Data updates every 3 seconds.
      </p>
    </div>
  )
}

