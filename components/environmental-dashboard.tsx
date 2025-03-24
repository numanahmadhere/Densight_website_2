"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const environmentalPerformanceData = [
  { year: 2018, carbonEmissions: 100, renewableEnergy: 20, wasteReduction: 10 },
  { year: 2019, carbonEmissions: 90, renewableEnergy: 25, wasteReduction: 15 },
  { year: 2020, carbonEmissions: 80, renewableEnergy: 30, wasteReduction: 20 },
  { year: 2021, carbonEmissions: 70, renewableEnergy: 35, wasteReduction: 25 },
  { year: 2022, carbonEmissions: 60, renewableEnergy: 40, wasteReduction: 30 },
]

const EnvironmentalDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Environmental Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={environmentalPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="carbonEmissions" stroke="#ff7300" name="Carbon Emissions (Index)" />
            <Line type="monotone" dataKey="renewableEnergy" stroke="#82ca9d" name="Renewable Energy (%)" />
            <Line type="monotone" dataKey="wasteReduction" stroke="#8884d8" name="Waste Reduction (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default EnvironmentalDashboard

