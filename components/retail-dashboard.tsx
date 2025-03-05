"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dashboardData = [
  { category: "Electronics", inStore: 4000, online: 2400 },
  { category: "Clothing", inStore: 3000, online: 1398 },
  { category: "Home & Garden", inStore: 2000, online: 9800 },
  { category: "Toys", inStore: 2780, online: 3908 },
  { category: "Food & Beverage", inStore: 1890, online: 4800 },
]

const RetailDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Retail Sales Distribution: In-Store vs Online</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="inStore" fill="#8884d8" name="In-Store Sales" />
            <Bar dataKey="online" fill="#82ca9d" name="Online Sales" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default RetailDashboard

