import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Building, ShoppingBag, Cpu } from "lucide-react"

const caseStudies = [
  {
    title: "Revolutionizing Inventory Management for RetailGiant",
    description: "How we helped a major retail chain reduce stockouts by 30% and increase profit margins.",
    industry: "Retail",
    impact: "Reduced stockouts by 30%",
    link: "/case-studies/retailgiant-inventory",
    icon: ShoppingBag,
  },
  {
    title: "Boosting Customer Engagement for FashionForward",
    description: "Our customer segmentation model helped increase customer retention rates by 25%.",
    industry: "Fashion E-commerce",
    impact: "Increased retention by 25%",
    link: "/case-studies/fashionforward-engagement",
    icon: Building,
  },
  {
    title: "Optimizing Supply Chain for ElectroWorld",
    description:
      "How our sales forecasting engine reduced supply chain costs by 15% for a global electronics retailer.",
    industry: "Consumer Electronics",
    impact: "Reduced costs by 15%",
    link: "/case-studies/electroworld-supply-chain",
    icon: Cpu,
  },
  // Add more case studies here
]

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <study.icon className="h-6 w-6 text-blue-500" />
                <CardTitle>{study.title}</CardTitle>
              </div>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{study.industry}</Badge>
                <Badge variant="secondary">{study.impact}</Badge>
              </div>
              <Link
                href={study.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Read full case study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

