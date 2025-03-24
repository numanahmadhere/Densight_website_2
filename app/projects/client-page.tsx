"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const ProjectsPage = dynamic(() => import("@/components/projects-page"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function ProjectsClientPage() {
  return <ProjectsPage />
}

