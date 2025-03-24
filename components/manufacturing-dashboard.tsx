"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const manufacturingPerformanceData = [
  { month: "Jan", oee: 65, qualityRate: 92, energyEfficiency: 80 },
  { month: "Feb", oee: 68, qualityRate: 93, energyEfficiency: 82 },
  { month: "Mar", oee: 72, qualityRate: 94, energyEfficiency: 85 },
  { month: "Apr", oee: 75, qualityRate: 95, energyEfficiency: 87 },
  { month: "May", oee: 78, qualityRate: 96, energyEfficiency: 89 },
  { month: "Jun", oee: 80, qualityRate: 97, energyEfficiency: 90 },
]

const ManufacturingDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Manufacturing Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={manufacturingPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="oee" stroke="#8884d8" name="Overall Equipment Effectiveness (%)" />
            <Line type="monotone" dataKey="qualityRate" stroke="#82ca9d" name="Quality Rate (%)" />
            <Line type="monotone" dataKey="energyEfficiency" stroke="#ffc658" name="Energy Efficiency (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default ManufacturingDashboard

