"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const CapabilitiesDashboard = dynamic(() => import("@/components/capabilities-dashboard"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function CapabilitiesClientPage() {
  return <CapabilitiesDashboard />
}

