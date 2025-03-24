"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"

// Sample data for the dashboard
const trendData = [
  { month: "Jan", socialMedia: 65, newsOutlets: 45, industryReports: 30, overall: 48 },
  { month: "Feb", socialMedia: 59, newsOutlets: 49, industryReports: 35, overall: 51 },
  { month: "Mar", socialMedia: 80, newsOutlets: 52, industryReports: 40, overall: 57 },
  { month: "Apr", socialMedia: 81, newsOutlets: 58, industryReports: 45, overall: 62 },
  { month: "May", socialMedia: 76, newsOutlets: 63, industryReports: 48, overall: 65 },
  { month: "Jun", socialMedia: 85, newsOutlets: 69, industryReports: 52, overall: 71 },
  { month: "Jul", socialMedia: 90, newsOutlets: 75, industryReports: 58, overall: 78 },
  { month: "Aug", socialMedia: 95, newsOutlets: 81, industryReports: 64, overall: 83 },
]

const industryData = [
  { name: "Retail", value: 85 },
  { name: "Tech", value: 92 },
  { name: "Finance", value: 78 },
  { name: "Healthcare", value: 65 },
  { name: "Fashion", value: 88 },
  { name: "Food", value: 72 },
  { name: "Travel", value: 68 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <p className="font-medium">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }

  return null
}

export default function TrendSpotterDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-96 flex items-center justify-center">Loading dashboard...</div>
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <h2 className="text-2xl font-bold text-white mb-2">Trend Spotter AI Dashboard</h2>
        <p className="text-blue-100">Real-time market trend analysis and predictions</p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="p-6">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="industries">Industry Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Trend Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">83%</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +12% from last month
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Prediction Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">91%</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +5% from last month
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Data Sources Analyzed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">1,250+</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +150 from last month
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Trend Strength Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorOverall" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="overall"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorOverall)"
                      name="Overall Trend Strength"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trend Sources Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="socialMedia"
                      stroke="#3b82f6"
                      activeDot={{ r: 8 }}
                      name="Social Media"
                    />
                    <Line type="monotone" dataKey="newsOutlets" stroke="#10b981" name="News Outlets" />
                    <Line type="monotone" dataKey="industryReports" stroke="#8b5cf6" name="Industry Reports" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Emerging Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sustainable AI Solutions</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tech Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 font-medium mr-2">+68%</span>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Personalized Shopping Experience</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Retail Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 font-medium mr-2">+52%</span>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Decentralized Finance</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Finance Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 font-medium mr-2">+45%</span>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Declining Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Traditional Advertising</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 font-medium mr-2">-32%</span>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">In-Person Only Services</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Service Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 font-medium mr-2">-28%</span>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Single-Use Plastics</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Manufacturing Industry</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 font-medium mr-2">-25%</span>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="industries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Industry Trend Adoption</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={industryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#3b82f6" name="Trend Adoption Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Leading the way in trend adoption with a focus on AI integration, cloud solutions, and sustainable
                    tech practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Retail</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Rapidly embracing omnichannel experiences, personalization, and AI-powered inventory management.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Finance</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Transforming through blockchain technology, automated advisory services, and enhanced cybersecurity
                    measures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This interactive dashboard provides a glimpse of Trend Spotter AI's capabilities. Contact us for a full demo
          with your industry-specific data.
        </p>
      </div>
    </div>
  )
}

