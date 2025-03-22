import type { Metadata } from "next"
import CaseStudiesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Case Studies | Densight AI",
  description:
    "Explore real-world examples of how Densight AI's solutions have transformed businesses across various industries.",
}

export default function CaseStudies() {
  return <CaseStudiesClientPage />
}

