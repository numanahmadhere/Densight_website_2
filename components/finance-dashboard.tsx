"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const financialPerformanceData = [
  { month: "Jan", returns: 5, riskScore: 3, fraudRate: 0.5 },
  { month: "Feb", returns: 5.5, riskScore: 3.2, fraudRate: 0.48 },
  { month: "Mar", returns: 6, riskScore: 3.5, fraudRate: 0.45 },
  { month: "Apr", returns: 6.2, riskScore: 3.3, fraudRate: 0.42 },
  { month: "May", returns: 6.5, riskScore: 3.1, fraudRate: 0.4 },
  { month: "Jun", returns: 7, riskScore: 3, fraudRate: 0.38 },
]

const FinanceDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Financial Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={financialPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="returns" stroke="#8884d8" name="Returns (%)" />
            <Line yAxisId="left" type="monotone" dataKey="riskScore" stroke="#82ca9d" name="Risk Score" />
            <Line yAxisId="right" type="monotone" dataKey="fraudRate" stroke="#ffc658" name="Fraud Rate (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default FinanceDashboard

