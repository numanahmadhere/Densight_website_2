"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const ServicesPage = dynamic(() => import("@/components/services-page"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function ServicesClientPage() {
  return <ServicesPage />
}

