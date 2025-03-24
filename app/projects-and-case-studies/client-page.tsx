"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const ProjectsAndCaseStudiesPage = dynamic(() => import("@/components/projects-and-case-studies-page"), {
  loading: () => <LoadingSpinner />,
})

export default function ProjectsAndCaseStudiesClientPage() {
  return <ProjectsAndCaseStudiesPage />
}

