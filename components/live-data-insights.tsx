"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Activity } from "lucide-react"

const generateData = () => {
  const now = new Date()
  return Array.from({ length: 10 }, (_, i) => ({
    time: new Date(now.getTime() - (9 - i) * 1000).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    customerSatisfaction: Math.floor(Math.random() * 20) + 80, // 80-100
    responseTime: Math.floor(Math.random() * 30) + 10, // 10-40 seconds
    conversionRate: Math.random() * 2 + 3, // 3-5%
  }))
}

const LiveDataInsights = () => {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [
          ...prevData.slice(1),
          {
            time: new Date().toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            customerSatisfaction: Math.floor(Math.random() * 20) + 80, // 80-100
            responseTime: Math.floor(Math.random() * 30) + 10, // 10-40 seconds
            conversionRate: Math.random() * 2 + 3, // 3-5%
          },
        ]
        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-blue-500" />
              <CardTitle>Live Customer Engagement Metrics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="customerSatisfaction"
                    stroke="#8884d8"
                    name="Customer Satisfaction (%)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="responseTime"
                    stroke="#82ca9d"
                    name="Response Time (s)"
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="conversionRate"
                    stroke="#ffc658"
                    name="Conversion Rate (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default LiveDataInsights

