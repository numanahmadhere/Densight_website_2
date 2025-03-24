import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart2, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AI-Powered Inventory Optimization",
    description: "Reduced stockouts by 30% for a major retail chain using predictive analytics.",
    tags: ["Machine Learning", "Predictive Analytics", "Inventory Management"],
    link: "/projects/predictive-inventory",
    icon: BarChart2,
    stats: { value: "30%", label: "Reduction in stockouts" },
  },
  {
    title: "Customer Segmentation Revolution",
    description: "Boosted customer retention by 25% for a fashion e-commerce platform.",
    tags: ["Data Mining", "Clustering", "Customer Analytics"],
    link: "/projects/customer-segmentation",
    icon: Users,
    stats: { value: "25%", label: "Increase in retention" },
  },
  {
    title: "Precision Sales Forecasting",
    description: "Improved forecast accuracy by 40% for a global electronics retailer.",
    tags: ["Time Series Analysis", "Forecasting", "Big Data"],
    link: "/projects/sales-forecasting",
    icon: TrendingUp,
    stats: { value: "40%", label: "Improvement in accuracy" },
  },
]

const PastProjects = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Our Impact</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 p-6 flex items-center justify-between">
                <project.icon className="h-10 w-10 text-white" />
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{project.stats.value}</p>
                  <p className="text-sm text-blue-100">{project.stats.label}</p>
                </div>
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
                <Link href={project.link} className="inline-flex items-center text-blue-600 hover:underline mt-auto">
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

