"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, LineChart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const headlines = [
    "Transform Your Business with AI-Powered Insights",
    "Unlock Hidden Patterns in Your Data",
    "Make Smarter Decisions with Predictive Analytics",
    "Stay Ahead with Real-Time Business Intelligence",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Densight AI
                </span>
              </h1>
              <div className="h-20 md:h-24 mt-4">
                <motion.h2
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-100"
                >
                  {headlines[currentIndex]}
                </motion.h2>
              </div>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                We help businesses leverage the power of artificial intelligence and data science to gain competitive
                advantages, optimize operations, and drive growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book Meeting</Link>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Densight Analytics Dashboard
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">+24%</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold">$1.2M</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Revenue</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <Brain className="h-5 w-5 text-purple-600" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">+12%</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold">94.3%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <BarChart2 className="h-5 w-5 text-green-600" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">+18%</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold">42.5K</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Predictions</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-48 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LineChart className="h-12 w-12 text-blue-600/50" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1/2">
                        <div className="relative h-full">
                          <div className="absolute bottom-0 left-0 w-1/6 h-3/5 bg-blue-600/70 rounded-t"></div>
                          <div className="absolute bottom-0 left-[calc(100%/6)] w-1/6 h-2/5 bg-blue-600/70 rounded-t"></div>
                          <div className="absolute bottom-0 left-[calc(200%/6)] w-1/6 h-4/5 bg-blue-600/70 rounded-t"></div>
                          <div className="absolute bottom-0 left-[calc(300%/6)] w-1/6 h-3/5 bg-blue-600/70 rounded-t"></div>
                          <div className="absolute bottom-0 left-[calc(400%/6)] w-1/6 h-4/5 bg-blue-600/70 rounded-t"></div>
                          <div className="absolute bottom-0 left-[calc(500%/6)] w-1/6 h-full bg-blue-600/70 rounded-t"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

