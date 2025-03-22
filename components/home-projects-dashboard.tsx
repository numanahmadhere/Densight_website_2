"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { PieChartIcon, BarChart3, TrendingUp } from "lucide-react"

const projectData = [
  { name: "Retail", value: 35, color: "#0088FE" },
  { name: "Manufacturing", value: 30, color: "#00C49F" },
  { name: "Finance", value: 25, color: "#FFBB28" },
  { name: "Healthcare", value: 10, color: "#FF8042" },
]

const projectGrowthData = [
  { year: 2019, projects: 12 },
  { year: 2020, projects: 19 },
  { year: 2021, projects: 27 },
  { year: 2022, projects: 36 },
  { year: 2023, projects: 48 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Based on Densight AI's completed projects</p>
      </div>
    )
  }
  return null
}

export default function HomeProjectsDashboard() {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Densight AI Project Portfolio</CardTitle>
            <CardDescription className="text-blue-100 mt-1">
              Distribution of our successful AI implementations by industry
            </CardDescription>
          </div>
          <PieChartIcon className="h-8 w-8 text-blue-100" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              Based on 120+ successful AI implementations across industries
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Project Growth Trajectory
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Year-over-year growth in Densight AI's successful implementations
              </p>
            </div>
            <div className="mt-4 space-y-3">
              {projectGrowthData.map((item) => (
                <div key={item.year} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.year}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.projects} projects
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(item.projects / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                <span>300% growth in project implementation since 2019</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

