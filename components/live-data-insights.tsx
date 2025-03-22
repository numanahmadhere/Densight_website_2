"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Activity, RefreshCw, Clock, AlertCircle } from "lucide-react"

// Initial data generation with timestamps
const generateInitialData = () => {
  const now = new Date()
  return Array.from({ length: 10 }, (_, i) => {
    const time = new Date(now.getTime() - (9 - i) * 5000)
    return {
      time: time.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      timestamp: time.getTime(),
      customerSatisfaction: Math.floor(Math.random() * 10) + 85, // 85-95
      responseTime: Math.floor(Math.random() * 20) + 20, // 20-40 seconds
      conversionRate: (Math.random() * 1.5 + 3.5).toFixed(2), // 3.5-5.0%
    }
  })
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <p className="font-medium">{`Time: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-sm">
            {`${entry.name}: ${entry.value}${entry.name.includes("Rate") ? "%" : entry.name.includes("Time") ? "ms" : "%"}`}
          </p>
        ))}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Live data from Densight AI's monitoring system</p>
      </div>
    )
  }
  return null
}

const LiveDataInsights = () => {
  const [data, setData] = useState(generateInitialData())
  const [isPaused, setIsPaused] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setData((prevData) => {
          const now = new Date()
          const newDataPoint = {
            time: now.toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            timestamp: now.getTime(),
            customerSatisfaction: Math.floor(Math.random() * 10) + 85, // 85-95
            responseTime: Math.floor(Math.random() * 20) + 20, // 20-40 seconds
            conversionRate: (Math.random() * 1.5 + 3.5).toFixed(2), // 3.5-5.0%
          }
          setLastUpdate(now)
          return [...prevData.slice(1), newDataPoint]
        })
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const togglePause = () => {
    setIsPaused(!isPaused)
    if (isPaused && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const formatTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - timestamp.getTime()) / 1000)
    if (seconds < 60) return `${seconds} seconds ago`
    const minutes = Math.floor(seconds / 60)
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Densight AI Live Monitoring</CardTitle>
            <CardDescription className="text-purple-100 mt-1">
              Real-time performance metrics from our AI systems
            </CardDescription>
          </div>
          <Activity className="h-8 w-8 text-purple-100" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePause}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium ${
                isPaused
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {isPaused ? (
                <>
                  <RefreshCw className="h-4 w-4" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4" />
                  <span>Pause</span>
                </>
              )}
            </button>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last updated: {formatTimeAgo(lastUpdate)}</span>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Monitoring active AI deployments</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: "#6b7280" }} domain={["dataMin", "dataMax"]} />
              <YAxis yAxisId="left" tick={{ fill: "#6b7280" }} domain={[80, 100]} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: "#6b7280" }} domain={[0, 60]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "10px" }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="customerSatisfaction"
                stroke="#8884d8"
                strokeWidth={2}
                name="Customer Satisfaction"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="responseTime"
                stroke="#82ca9d"
                strokeWidth={2}
                name="Response Time"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="conversionRate"
                stroke="#ffc658"
                strokeWidth={2}
                name="Conversion Rate"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            {
              title: "Customer Satisfaction",
              value: `${data[data.length - 1].customerSatisfaction}%`,
              description: "Average user satisfaction score",
              icon: <Activity className="h-5 w-5 text-purple-600" />,
              color: "bg-purple-100 dark:bg-purple-900/30",
              textColor: "text-purple-700 dark:text-purple-400",
            },
            {
              title: "Response Time",
              value: `${data[data.length - 1].responseTime}ms`,
              description: "Average API response time",
              icon: <Clock className="h-5 w-5 text-green-600" />,
              color: "bg-green-100 dark:bg-green-900/30",
              textColor: "text-green-700 dark:text-green-400",
            },
            {
              title: "Conversion Rate",
              value: `${data[data.length - 1].conversionRate}%`,
              description: "User action completion rate",
              icon: <RefreshCw className="h-5 w-5 text-amber-600" />,
              color: "bg-amber-100 dark:bg-amber-900/30",
              textColor: "text-amber-700 dark:text-amber-400",
            },
          ].map((item, index) => (
            <div key={index} className={`${item.color} p-4 rounded-lg`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.title}</p>
                  <p className={`text-2xl font-bold ${item.textColor}`}>{item.value}</p>
                </div>
                <div className={`${item.color} p-2 rounded-full`}>{item.icon}</div>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg text-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-800 rounded-full p-1">
              <AlertCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-gray-900 dark:text-white">About This Dashboard</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300">
                This live monitoring dashboard displays real-time metrics from Densight AI's production systems. Our
                proprietary algorithms continuously optimize performance to maintain high customer satisfaction and low
                response times.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default LiveDataInsights

