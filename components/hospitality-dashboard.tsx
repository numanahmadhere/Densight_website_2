"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hospitalityPerformanceData = [
  { month: "Jan", occupancyRate: 65, avgDailyRate: 120, revPAR: 78 },
  { month: "Feb", occupancyRate: 70, avgDailyRate: 125, revPAR: 87.5 },
  { month: "Mar", occupancyRate: 75, avgDailyRate: 130, revPAR: 97.5 },
  { month: "Apr", occupancyRate: 80, avgDailyRate: 135, revPAR: 108 },
  { month: "May", occupancyRate: 85, avgDailyRate: 140, revPAR: 119 },
  { month: "Jun", occupancyRate: 90, avgDailyRate: 145, revPAR: 130.5 },
]

const HospitalityDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Hospitality Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hospitalityPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="occupancyRate" fill="#8884d8" name="Occupancy Rate (%)" />
            <Bar yAxisId="right" dataKey="avgDailyRate" fill="#82ca9d" name="Avg. Daily Rate ($)" />
            <Bar yAxisId="right" dataKey="revPAR" fill="#ffc658" name="RevPAR ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default HospitalityDashboard

