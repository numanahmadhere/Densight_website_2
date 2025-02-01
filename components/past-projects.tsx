import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Predictive Inventory Management",
    description: "Developed an AI-driven system to optimize inventory levels for a major retail chain.",
    tags: ["Machine Learning", "Predictive Analytics", "Inventory Management"],
    link: "/projects/predictive-inventory",
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Created a sophisticated customer segmentation model for a fashion e-commerce platform.",
    tags: ["Data Mining", "Clustering", "Customer Analytics"],
    link: "/projects/customer-segmentation",
  },
  {
    title: "Sales Forecasting Engine",
    description: "Built a sales forecasting engine for a global consumer electronics retailer.",
    tags: ["Time Series Analysis", "Forecasting", "Big Data"],
    link: "/projects/sales-forecasting",
  },
]

const PastProjects = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">Our Past Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-6">
                <span className="text-4xl font-bold text-blue-600">#{index + 1}</span>
              </div>
              <CardContent className="flex-1 p-6">
                <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link} className="inline-flex items-center text-blue-600 hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PastProjects

