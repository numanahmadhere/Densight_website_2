"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { TrendingUp, DollarSign, Users, ShoppingCart } from "lucide-react"

const data = [
  { month: "Jan", sales: 4000, customers: 2400, avgOrderValue: 50 },
  { month: "Feb", sales: 3000, customers: 1398, avgOrderValue: 55 },
  { month: "Mar", sales: 2000, customers: 9800, avgOrderValue: 48 },
  { month: "Apr", sales: 2780, customers: 3908, avgOrderValue: 52 },
  { month: "May", sales: 1890, customers: 4800, avgOrderValue: 58 },
  { month: "Jun", sales: 2390, customers: 3800, avgOrderValue: 60 },
  { month: "Jul", sales: 3490, customers: 4300, avgOrderValue: 62 },
]

const metricIcons = {
  sales: DollarSign,
  customers: Users,
  avgOrderValue: ShoppingCart,
}

const metricColors = {
  sales: "#3b82f6",
  customers: "#10b981",
  avgOrderValue: "#f59e0b",
}

const InteractiveDashboard = () => {
  const [metric, setMetric] = useState("sales")
  const MetricIcon = metricIcons[metric]

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-blue-500" />
          <CardTitle>Retail Analytics Dashboard</CardTitle>
        </div>
        <CardDescription>Interactive dashboard showing key retail metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={(value) => setMetric(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="customers">Customers</SelectItem>
              <SelectItem value="avgOrderValue">Avg. Order Value</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
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
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default InteractiveDashboard

