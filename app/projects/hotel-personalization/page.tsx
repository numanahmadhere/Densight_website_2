import ProjectPage from "@/components/project-page"
import { Hotel } from "lucide-react"

export default function HotelPersonalizationPage() {
  return (
    <ProjectPage
      title="AI-Driven Personalization for Global Hotel Chain"
      industry="Hospitality Industry"
      icon={Hotel}
      impact="Increased guest satisfaction by 30% and boosted repeat bookings by 25%"
      description="Implemented an AI system for personalized guest experiences and targeted marketing, significantly increasing guest satisfaction and boosting repeat bookings for a global hotel chain."
      challenges={[
        "Inconsistent guest experiences across different properties",
        "Low repeat booking rates",
        "Ineffective marketing campaigns",
      ]}
      solution="We developed an AI-powered personalization engine that analyzes guest data from various sources to create detailed guest profiles. This system provides personalized recommendations for services, amenities, and experiences, as well as tailored marketing campaigns."
      results={[
        "Increased guest satisfaction by 30%",
        "Boosted repeat bookings by 25%",
        "Improved overall revenue per guest by 20%",
        "Enhanced operational efficiency in service delivery",
      ]}
      technologies={["Machine Learning", "Natural Language Processing", "Predictive Analytics", "CRM Integration"]}
    />
  )
}

