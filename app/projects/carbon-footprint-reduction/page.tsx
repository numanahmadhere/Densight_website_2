import ProjectPage from "@/components/project-page"
import { Leaf } from "lucide-react"

export default function CarbonFootprintReductionPage() {
  return (
    <ProjectPage
      title="Carbon Footprint Reduction for Manufacturing Giant"
      industry="Environmental Industry"
      icon={Leaf}
      impact="Reduced carbon emissions by 30% within 18 months"
      description="Implemented AI-driven energy optimization and waste reduction strategies for a major manufacturing company, resulting in a significant reduction in carbon emissions within a short timeframe."
      challenges={[
        "High energy consumption across manufacturing plants",
        "Inefficient waste management processes",
        "Lack of real-time emissions monitoring",
      ]}
      solution="We developed an AI-powered energy management system that optimizes energy usage, predicts maintenance needs, and provides real-time monitoring of carbon emissions. Additionally, we implemented an intelligent waste sorting and recycling system."
      results={[
        "Reduced carbon emissions by 30% within 18 months",
        "Decreased energy consumption by 25% across all manufacturing plants",
        "Optimized waste management processes, reducing landfill waste by 40%",
        "Implemented a real-time emissions monitoring system for better decision-making",
      ]}
      technologies={["Machine Learning", "IoT Sensors", "Big Data Analytics", "Energy Management Systems"]}
    />
  )
}

