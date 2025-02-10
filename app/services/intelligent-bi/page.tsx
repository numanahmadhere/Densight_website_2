import type { Metadata } from "next"
import IntelligentBIService from "@/components/services/intelligent-bi"

export const metadata: Metadata = {
  title: "Intelligent Business Intelligence | Densight AI",
  description:
    "Visualize your data for better decision making with Densight AI's Intelligent Business Intelligence solutions.",
}

export default function IntelligentBIPage() {
  return <IntelligentBIService />
}

