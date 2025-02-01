import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BarChart2, Users, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Predictive Inventory Management",
    description: "Developed an AI-driven system to optimize inventory levels for a major retail chain.",
    tags: ["Machine Learning", "Predictive Analytics", "Inventory Management"],
    link: "/projects/predictive-inventory",
    icon: BarChart2,
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Created a sophisticated customer segmentation model for a fashion e-commerce platform.",
    tags: ["Data Mining", "Clustering", "Customer Analytics"],
    link: "/projects/customer-segmentation",
    icon: Users,
  },
  {
    title: "Sales Forecasting Engine",
    description: "Built a sales forecasting engine for a global consumer electronics retailer.",
    tags: ["Time Series Analysis", "Forecasting", "Big Data"],
    link: "/projects/sales-forecasting",
    icon: TrendingUp,
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Past Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <project.icon className="h-6 w-6 text-blue-500" />
                <CardTitle>{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

