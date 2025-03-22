"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const InsightsPage = dynamic(() => import("@/components/insights-page"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function InsightsClientPage() {
  return <InsightsPage />
}

