"use client"

import { useState, useEffect } from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const generateData = () => {
  const data = []
  for (let i = 0; i < 7; i++) {
    data.push({
      name: `Day ${i + 1}`,
      sales: Math.floor(Math.random() * 1000) + 500,
      customers: Math.floor(Math.random() * 100) + 50,
    })
  }
  return data
}

export default function DataVisualization() {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="customers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

