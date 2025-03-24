"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import { TrendingUp, DollarSign, Users, ShoppingCart, PieChart } from "lucide-react"

const yearlyData = [
  { year: 2018, revenue: 5000000, orders: 100000, customers: 50000, avgOrderValue: 50 },
  { year: 2019, revenue: 7000000, orders: 130000, customers: 70000, avgOrderValue: 54 },
  { year: 2020, revenue: 6500000, orders: 120000, customers: 65000, avgOrderValue: 54 },
  { year: 2021, revenue: 9000000, orders: 160000, customers: 85000, avgOrderValue: 56 },
  { year: 2022, revenue: 11000000, orders: 190000, customers: 100000, avgOrderValue: 58 },
]

const metricIcons = {
  revenue: DollarSign,
  orders: ShoppingCart,
  customers: Users,
  avgOrderValue: PieChart,
}

const metricColors = {
  revenue: "#3b82f6",
  orders: "#10b981",
  customers: "#f59e0b",
  avgOrderValue: "#8b5cf6",
}

const formatValue = (value: number, metric: string) => {
  if (metric === "revenue") {
    return `$${(value / 1000000).toFixed(1)}M`
  } else if (metric === "avgOrderValue") {
    return `$${value}`
  } else {
    return value.toLocaleString()
  }
}

const InteractiveDashboard = () => {
  const [metric, setMetric] = useState("revenue")
  const MetricIcon = metricIcons[metric]

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-blue-500" />
          <CardTitle>Yearly E-commerce Trends</CardTitle>
        </div>
        <CardDescription>Interactive dashboard showing key e-commerce metrics over the years</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={(value) => setMetric(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="orders">Orders</SelectItem>
              <SelectItem value="customers">Customers</SelectItem>
              <SelectItem value="avgOrderValue">Avg. Order Value</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          {metric === "avgOrderValue" ? (
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => formatValue(value as number, metric)} />
              <Legend />
              <Bar dataKey={metric} fill={metricColors[metric]} />
            </BarChart>
          ) : (
            <LineChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => formatValue(value as number, metric)} />
              <Legend />
              <Line
                type="monotone"
                dataKey={metric}
                stroke={metricColors[metric]}
                strokeWidth={2}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {Object.keys(metricIcons).map((key) => {
            const Icon = metricIcons[key]
            const latestValue = yearlyData[yearlyData.length - 1][key]
            return (
              <Card key={key}>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Icon className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-lg font-semibold">{formatValue(latestValue, key)}</p>
                  <p className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default InteractiveDashboard

