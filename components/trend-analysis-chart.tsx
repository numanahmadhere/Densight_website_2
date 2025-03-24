"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trendData = [
  { month: "Jan", styleScore: 65, colorScore: 45, patternScore: 30 },
  { month: "Feb", styleScore: 68, colorScore: 52, patternScore: 35 },
  { month: "Mar", styleScore: 75, colorScore: 58, patternScore: 40 },
  { month: "Apr", styleScore: 85, colorScore: 63, patternScore: 48 },
  { month: "May", styleScore: 90, colorScore: 70, patternScore: 55 },
  { month: "Jun", styleScore: 95, colorScore: 75, patternScore: 65 },
]

export default function TrendAnalysisChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Analysis Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="styleScore"
                stroke="#8884d8"
                name="Style Trends"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="colorScore"
                stroke="#82ca9d"
                name="Color Trends"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="patternScore"
                stroke="#ffc658"
                name="Pattern Trends"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

