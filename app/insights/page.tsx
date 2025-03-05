import dynamic from "next/dynamic"
import type { Metadata } from "next"

const InsightsPage = dynamic(() => import("@/components/insights-page"), { ssr: false })

export const metadata: Metadata = {
  title: "AI Insights & Industry Trends | Densight AI",
  description:
    "Stay updated with the latest AI trends, industry insights, and expert analysis from Densight AI's team of data scientists and AI specialists.",
}

export default function Insights() {
  return <InsightsPage />
}

