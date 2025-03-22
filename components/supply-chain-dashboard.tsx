"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const supplyChainPerformanceData = [
  { month: "Jan", inventoryTurnover: 4, orderFulfillmentRate: 92, transportationCosts: 100, onTimeDelivery: 88 },
  { month: "Feb", inventoryTurnover: 4.2, orderFulfillmentRate: 93, transportationCosts: 98, onTimeDelivery: 89 },
  { month: "Mar", inventoryTurnover: 4.5, orderFulfillmentRate: 94, transportationCosts: 95, onTimeDelivery: 91 },
  { month: "Apr", inventoryTurnover: 4.8, orderFulfillmentRate: 95, transportationCosts: 93, onTimeDelivery: 92 },
  { month: "May", inventoryTurnover: 5, orderFulfillmentRate: 96, transportationCosts: 90, onTimeDelivery: 94 },
  { month: "Jun", inventoryTurnover: 5.2, orderFulfillmentRate: 97, transportationCosts: 88, onTimeDelivery: 95 },
]

const SupplyChainDashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Supply Chain Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={supplyChainPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="inventoryTurnover"
              stroke="#8884d8"
              name="Inventory Turnover"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="orderFulfillmentRate"
              stroke="#82ca9d"
              name="Order Fulfillment Rate (%)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="transportationCosts"
              stroke="#ffc658"
              name="Transportation Costs (Index)"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="onTimeDelivery"
              stroke="#ff7300"
              name="On-Time Delivery (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)

export default SupplyChainDashboard

