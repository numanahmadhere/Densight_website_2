"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, TrendingUp, LineChart, Database, Zap, BarChart2 } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const capabilities = [
  {
    title: "Predictive Analytics",
    description: "Forecast future trends with 94% accuracy using our advanced ML models",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-700",
    stat: "94%",
    statLabel: "Prediction Accuracy",
  },
  {
    title: "Real-time Data Processing",
    description: "Process millions of data points per second for instant business insights",
    icon: Zap,
    color: "from-purple-500 to-purple-700",
    stat: "10M+",
    statLabel: "Data Points/Second",
  },
  {
    title: "Computer Vision",
    description: "Identify patterns and anomalies in visual data with our deep learning models",
    icon: Brain,
    color: "from-green-500 to-green-700",
    stat: "99.7%",
    statLabel: "Object Recognition",
  },
  {
    title: "Natural Language Processing",
    description: "Understand customer sentiment and extract insights from unstructured text",
    icon: Database,
    color: "from-orange-500 to-orange-700",
    stat: "85%",
    statLabel: "Sentiment Accuracy",
  },
  {
    title: "Anomaly Detection",
    description: "Identify unusual patterns that could indicate fraud or system failures",
    icon: LineChart,
    color: "from-red-500 to-red-700",
    stat: "99.3%",
    statLabel: "Detection Rate",
  },
  {
    title: "Automated Decision Systems",
    description: "Optimize business processes with AI-powered decision-making algorithms",
    icon: BarChart2,
    color: "from-teal-500 to-teal-700",
    stat: "35%",
    statLabel: "Efficiency Gain",
  },
]

export default function AICapabilitiesShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedStats, setAnimatedStats] = useState(capabilities.map(() => "0"))

  useEffect(() => {
    if (inView) {
      capabilities.forEach((capability, index) => {
        const targetStat = capability.stat
        const numericValue = Number.parseInt(targetStat.replace(/[^0-9.]/g, ""))
        const isPercentage = targetStat.includes("%")
        const suffix = isPercentage ? "%" : targetStat.includes("M+") ? "M+" : ""

        const startValue = 0
        const duration = 2000 // 2 seconds
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        let frame = 0

        const timer = setInterval(() => {
          frame++
          const progress = frame / totalFrames
          const currentValue = Math.floor(numericValue * progress)

          setAnimatedStats((prev) => {
            const newStats = [...prev]
            newStats[index] = `${currentValue}${suffix}`
            return newStats
          })

          if (frame === totalFrames) {
            clearInterval(timer)
            setAnimatedStats((prev) => {
              const newStats = [...prev]
              newStats[index] = targetStat
              return newStats
            })
          }
        }, frameDuration)

        return () => clearInterval(timer)
      })
    }
  }, [inView])

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Data Into Intelligence</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI and Machine Learning capabilities unlock the hidden potential in your data, delivering actionable
            insights and competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg">
                <div className={`h-2 bg-gradient-to-r ${capability.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${capability.color} text-white mr-4`}>
                      <capability.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{capability.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{capability.statLabel}</span>
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${capability.color}">
                        {animatedStats[index]}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

