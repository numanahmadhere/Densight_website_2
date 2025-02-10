"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const generateData = () => {
  const now = new Date()
  return Array.from({ length: 10 }, (_, i) => ({
    time: new Date(now.getTime() - (9 - i) * 1000).toLocaleTimeString(),
    accuracy: Math.random() * 10 + 90,
    latency: Math.random() * 50 + 50,
    throughput: Math.random() * 500 + 500,
  }))
}

const LiveDataGraph = () => {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [
          ...prevData.slice(1),
          {
            time: new Date().toLocaleTimeString(),
            accuracy: Math.random() * 10 + 90,
            latency: Math.random() * 50 + 50,
            throughput: Math.random() * 500 + 500,
          },
        ]
        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#8884d8" name="Accuracy (%)" />
          <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#82ca9d" name="Latency (ms)" />
          <Line yAxisId="left" type="monotone" dataKey="throughput" stroke="#ffc658" name="Throughput (req/s)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LiveDataGraph

