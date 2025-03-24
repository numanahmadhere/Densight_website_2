"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const automobilePerformanceData = [
  { year: 2018, electricVehicles: 2000, hybridVehicles: 5000, traditionalVehicles: 20000 },
  { year: 2019, electricVehicles: 3500, hybridVehicles: 7000, traditionalVehicles: 18000 },
  { year: 2020, electricVehicles: 5000, hybridVehicles: 9000, traditionalVehicles: 16000 },
  { year: 2021, electricVehicles: 8000, hybridVehicles: 11000, traditionalVehicles: 14000 },
  { year: 2022, electricVehicles: 12000, hybridVehicles: 13000, traditionalVehicles: 12000 },
]

const AutomobileDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Automobile Industry Trends</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={automobilePerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="electricVehicles" stroke="#8884d8" name="Electric Vehicles" />
            <Line type="monotone" dataKey="hybridVehicles" stroke="#82ca9d" name="Hybrid Vehicles" />
            <Line type="monotone" dataKey="traditionalVehicles" stroke="#ffc658" name="Traditional Vehicles" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default AutomobileDashboard

