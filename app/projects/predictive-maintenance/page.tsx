import ProjectPage from "@/components/project-page"
import { PenToolIcon as Tool } from "lucide-react"

export default function PredictiveMaintenancePage() {
  return (
    <ProjectPage
      title="Predictive Maintenance System for Manufacturing Plant"
      industry="Manufacturing Industry"
      icon={Tool}
      impact="Reduced unplanned downtime by 35% and maintenance costs by 20%"
      description="Developed an IoT-based system to predict equipment failures and optimize maintenance schedules, significantly reducing unplanned downtime and maintenance costs for a large manufacturing plant."
      challenges={[
        "Frequent unplanned equipment breakdowns",
        "High maintenance costs due to reactive maintenance",
        "Inefficient maintenance scheduling",
      ]}
      solution="We implemented an advanced predictive maintenance system using IoT sensors and machine learning algorithms. This system continuously monitors equipment health, predicts potential failures, and recommends optimal maintenance schedules."
      results={[
        "Reduced unplanned downtime by 35%",
        "Decreased maintenance costs by 20%",
        "Increased overall equipment effectiveness (OEE) by 15%",
        "Extended equipment lifespan by an average of 25%",
      ]}
      technologies={["IoT", "Machine Learning", "Predictive Analytics", "Sensor Networks", "Cloud Computing"]}
    />
  )
}

