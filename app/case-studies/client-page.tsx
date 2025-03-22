"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const CaseStudiesPage = dynamic(() => import("@/components/case-studies"), {
  loading: () => <LoadingSpinner />,
})

export default function CaseStudiesClientPage() {
  return <CaseStudiesPage />
}

