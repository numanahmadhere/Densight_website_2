"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const IndustriesPage = dynamic(() => import("@/components/industries-page"), {
  loading: () => <LoadingSpinner />,
})

export default function IndustriesClientPage() {
  return <IndustriesPage />
}

