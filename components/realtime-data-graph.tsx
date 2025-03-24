"use client"

import { useState, useEffect } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const initialData = [
  { time: "00:00", accuracy: 95, latency: 50, throughput: 1000 },
  { time: "00:05", accuracy: 96, latency: 48, throughput: 1050 },
  { time: "00:10", accuracy: 97, latency: 52, throughput: 980 },
  { time: "00:15", accuracy: 95, latency: 55, throughput: 1020 },
  { time: "00:20", accuracy: 98, latency: 47, throughput: 1100 },
]

const RealtimeDataGraph = () => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        time: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        accuracy: Math.floor(Math.random() * 5) + 95, // 95-99
        latency: Math.floor(Math.random() * 20) + 40, // 40-59
        throughput: Math.floor(Math.random() * 200) + 900, // 900-1099
      }
      setData((prevData) => [...prevData.slice(1), newDataPoint])
    }, 5000) // Update every 5 seconds

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

export default RealtimeDataGraph

