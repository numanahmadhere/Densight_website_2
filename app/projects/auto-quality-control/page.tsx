import ProjectPage from "@/components/project-page"
import { Car } from "lucide-react"

export default function AutoQualityControlPage() {
  return (
    <ProjectPage
      title="AI-Powered Quality Control for Major Automaker"
      industry="Automobile Industry"
      icon={Car}
      impact="Reduced defect rates by 40% and improved production efficiency by 25%"
      description="Implemented an advanced computer vision and machine learning system for real-time quality inspection in automotive manufacturing, significantly reducing defect rates and improving production efficiency."
      challenges={[
        "High defect rates in the production line",
        "Time-consuming manual quality control processes",
        "Inconsistent quality across different production shifts",
      ]}
      solution="We developed a state-of-the-art computer vision system powered by deep learning algorithms. This system was integrated into the production line to perform real-time quality inspections, identifying defects with high accuracy and speed."
      results={[
        "Reduced defect rates by 40%",
        "Improved production efficiency by 25%",
        "Decreased quality control labor costs by 30%",
        "Achieved consistent quality across all production shifts",
      ]}
      technologies={["Computer Vision", "Deep Learning", "Real-time Processing", "IoT Sensors"]}
    />
  )
}

