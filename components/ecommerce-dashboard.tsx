"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, DollarSign, ShoppingCart, Users, BarChart2 } from "lucide-react"

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
  avgOrderValue: BarChart2,
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

const CustomTooltip = ({ active, payload, label, metric }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <p className="font-medium">{`Year: ${label}`}</p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {`${metric.charAt(0).toUpperCase() + metric.slice(1)}: ${formatValue(payload[0].value, metric)}`}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Analysis by Densight AI's Retail Analytics Team</p>
      </div>
    )
  }
  return null
}

const EcommerceDashboard = () => {
  const [metric, setMetric] = useState("revenue")
  const MetricIcon = metricIcons[metric]

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Retail Client Success Story</CardTitle>
            <CardDescription className="text-emerald-100 mt-1">
              How Densight AI's analytics transformed an e-commerce business
            </CardDescription>
          </div>
          <TrendingUp className="h-8 w-8 text-emerald-100" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Performance Metrics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Results after implementing Densight AI's recommendation engine
              </p>
            </div>
            <Select onValueChange={(value) => setMetric(value)} defaultValue="revenue">
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
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              {metric === "avgOrderValue" ? (
                <BarChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280" }} />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <Tooltip content={<CustomTooltip metric={metric} />} />
                  <Legend wrapperStyle={{ paddingTop: "10px" }} />
                  <Bar dataKey={metric} fill={metricColors[metric]} name="Average Order Value" />
                </BarChart>
              ) : (
                <LineChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280" }} />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <Tooltip content={<CustomTooltip metric={metric} />} />
                  <Legend wrapperStyle={{ paddingTop: "10px" }} />
                  <Line
                    type="monotone"
                    dataKey={metric}
                    stroke={metricColors[metric]}
                    strokeWidth={3}
                    dot={{ r: 6, fill: metricColors[metric], strokeWidth: 2, stroke: "white" }}
                    activeDot={{ r: 8 }}
                    name={metric.charAt(0).toUpperCase() + metric.slice(1)}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.keys(metricIcons).map((key) => {
            const Icon = metricIcons[key]
            const latestValue = yearlyData[yearlyData.length - 1][key]
            const previousValue = yearlyData[yearlyData.length - 2][key]
            const percentChange = ((latestValue - previousValue) / previousValue) * 100

            return (
              <Card key={key} className="border border-gray-200 dark:border-gray-700">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Icon className={`h-8 w-8 ${metricColors[key]} mb-2`} />
                  <p className="text-lg font-semibold">{formatValue(latestValue, key)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {key.charAt(0).toUpperCase() +
                      key
                        .slice(1)
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                  </p>
                  <div
                    className={`flex items-center mt-2 text-xs ${percentChange >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    <TrendingUp className={`h-3 w-3 mr-1 ${percentChange >= 0 ? "" : "transform rotate-180"}`} />
                    <span>{Math.abs(percentChange).toFixed(1)}% vs previous year</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 rounded-full p-1">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-gray-900 dark:text-white">Densight AI's Impact</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300">
                Our AI-powered recommendation engine increased this client's revenue by 120% over 5 years, with a 15%
                improvement in average order value and 100% growth in customer base.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EcommerceDashboard

