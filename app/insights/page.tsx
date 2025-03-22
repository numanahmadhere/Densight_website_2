import type { Metadata } from "next"
import InsightsClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Insights & Industry Trends | Densight AI",
  description:
    "Stay updated with the latest AI trends, industry insights, and expert analysis from Densight AI's team of data scientists and AI specialists.",
}

export default function Insights() {
  return <InsightsClientPage />
}

