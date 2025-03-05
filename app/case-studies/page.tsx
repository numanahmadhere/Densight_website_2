import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "AI-Driven Inventory Optimization for Global Retailer",
    description: "How we helped a major retail chain reduce stockouts by 30% and increase profit margins.",
    industry: "Retail",
    impact: "30% reduction in stockouts",
    link: "/case-studies/retail-inventory-optimization",
  },
  {
    title: "Predictive Maintenance Solution for Manufacturing Giant",
    description: "Implementing AI to predict equipment failures, reducing downtime by 40%.",
    industry: "Manufacturing",
    impact: "40% reduction in downtime",
    link: "/case-studies/manufacturing-predictive-maintenance",
  },
  {
    title: "AI-Powered Fraud Detection for Financial Institution",
    description: "How our machine learning models improved fraud detection rates by 60%.",
    industry: "Finance",
    impact: "60% improvement in fraud detection",
    link: "/case-studies/finance-fraud-detection",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{study.industry}</Badge>
                <Badge variant="secondary">{study.impact}</Badge>
              </div>
              <Link href={study.link} className="text-blue-600 hover:underline inline-flex items-center">
                Read full case study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

