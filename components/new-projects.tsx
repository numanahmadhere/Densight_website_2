import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, ShieldCheck } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "predictive-maintenance",
    title: "AI-Powered Predictive Maintenance",
    industry: "Manufacturing",
    impact: "Reduced downtime by 40% and maintenance costs by 25%",
    summary:
      "Implemented an AI model that predicts equipment failures, allowing for proactive maintenance and significantly reducing downtime for a major manufacturing client.",
    icon: Brain,
    date: "December 2023",
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    industry: "Telecommunications",
    impact: "Improved customer retention by 30% and increased revenue by 15%",
    summary:
      "Developed a machine learning model to predict customer churn, enabling targeted retention strategies and personalized offers for at-risk customers.",
    icon: TrendingUp,
    date: "June 2024",
  },
  {
    id: "fraud-detection-system",
    title: "Real-time Fraud Detection System",
    industry: "Finance",
    impact: "Reduced fraudulent transactions by 75% while minimizing false positives",
    summary:
      "Created an advanced AI-powered fraud detection system that analyzes transactions in real-time, significantly reducing financial losses for a major bank.",
    icon: ShieldCheck,
    date: "October 2024",
  },
]

export default function NewProjects({ className }: { className?: string }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-12">Our Latest AI Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-sm font-medium">
                    {project.industry}
                  </Badge>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <project.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm font-semibold text-blue-600 mb-2">{project.impact}</CardDescription>
                <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
              </CardContent>
              <CardContent className="pt-0">
                <Link href={`/projects#${project.id}`}>
                  {project.id === "predictive-maintenance" ? (
                    <Button variant="outline" className="w-full">
                      Explore Predictive Maintenance Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : project.id === "customer-churn-prediction" ? (
                    <Button variant="outline" className="w-full">
                      View Churn Prediction Project Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : project.id === "fraud-detection-system" ? (
                    <Button variant="outline" className="w-full">
                      Discover Fraud Detection Solution <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

