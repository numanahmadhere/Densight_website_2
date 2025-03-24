import ProjectsClientPage from "./client-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Densight AI",
  description: "Explore our successful AI projects and case studies across various industries.",
}

export default function Projects() {
  return <ProjectsClientPage />
}

