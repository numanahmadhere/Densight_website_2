import type { Metadata } from "next"
import CapabilitiesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Capabilities & Expertise | Densight AI",
  description:
    "Explore Densight AI's cutting-edge capabilities across various industries. Discover how our AI-driven solutions can transform your business with real-world case studies and interactive dashboards.",
  keywords: [
    "AI Capabilities",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Industry 4.0",
    "Digital Transformation",
  ],
}

export default function Capabilities() {
  return <CapabilitiesClientPage />
}

