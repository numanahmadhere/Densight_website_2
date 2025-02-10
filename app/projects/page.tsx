import dynamic from "next/dynamic"
import type { Metadata } from "next"

const ProjectsPage = dynamic(() => import("@/components/projects-page"), { ssr: false })

export const metadata: Metadata = {
  title: "Projects | Densight AI",
  description: "Explore our successful AI projects and case studies across various industries.",
}

export default function Projects() {
  return <ProjectsPage />
}

