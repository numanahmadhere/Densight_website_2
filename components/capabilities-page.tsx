"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import RetailDashboard from "./retail-dashboard"
import SupplyChainDashboard from "./supply-chain-dashboard"
import ManufacturingDashboard from "./manufacturing-dashboard"
import FinanceDashboard from "./finance-dashboard"
import EnvironmentalDashboard from "./environmental-dashboard"
import AutomobileDashboard from "./automobile-dashboard"
import HospitalityDashboard from "./hospitality-dashboard"

const industries = [
  {
    name: "Retail",
    component: RetailDashboard,
    impact: "Increased sales by 25% and improved customer retention by 30%",
  },
  {
    name: "Supply Chain",
    component: SupplyChainDashboard,
    impact: "Reduced inventory costs by 20% and improved on-time deliveries by 35%",
  },
  {
    name: "Manufacturing",
    component: ManufacturingDashboard,
    impact: "Increased overall equipment effectiveness (OEE) by 15% and reduced downtime by 25%",
  },
  {
    name: "Finance",
    component: FinanceDashboard,
    impact: "Improved risk assessment accuracy by 40% and increased fraud detection by 60%",
  },
  {
    name: "Environmental",
    component: EnvironmentalDashboard,
    impact: "Reduced carbon emissions by 30% and improved resource efficiency by 25%",
  },
  {
    name: "Automobile",
    component: AutomobileDashboard,
    impact: "Increased production efficiency by 20% and reduced quality control issues by 35%",
  },
  {
    name: "Hospitality",
    component: HospitalityDashboard,
    impact: "Improved guest satisfaction by 30% and increased RevPAR by 25%",
  },
]

export default function CapabilitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Capabilities
      </motion.h1>
      <div className="space-y-16">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{industry.name} Industry Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <industry.component />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Impact:</h3>
                  <p>{industry.impact}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

