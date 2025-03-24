import type { Metadata } from "next"
import AdvancedDataAnalyticsService from "@/components/services/advanced-data-analytics"

export const metadata: Metadata = {
  title: "Advanced Data Analytics | Densight AI",
  description: "Transform raw data into actionable insights with Densight AI's Advanced Data Analytics services.",
}

export default function AdvancedDataAnalyticsPage() {
  return <AdvancedDataAnalyticsService />
}

