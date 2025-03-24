import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// This is a mock function to simulate fetching case study data
function getCaseStudy(slug: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    title: "Revolutionizing Inventory Management for RetailGiant",
    industry: "Retail",
    impact: "Reduced stockouts by 30%",
    challenge:
      "RetailGiant was facing significant challenges with inventory management, including frequent stockouts and excess inventory tying up capital.",
    solution:
      "We developed an AI-driven system that predicts future demand for each product in each store, taking into account various factors such as historical sales data, seasonal trends, and local events.",
    results: [
      "30% reduction in stockouts",
      "20% decrease in excess inventory",
      "15% increase in inventory turnover",
      "10% improvement in gross margin",
    ],
    technologies: ["Python", "TensorFlow", "Apache Spark", "AWS"],
    testimonial: {
      quote:
        "Densight AI's solution has transformed our inventory management. We've seen significant improvements across all our key metrics.",
      author: "Jane Doe",
      position: "CIO, RetailGiant",
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{caseStudy.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
            <Badge variant="secondary">{caseStudy.impact}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Solution</h2>
            <p>{caseStudy.solution}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc pl-5">
              {caseStudy.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </section>
          <section className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Client Testimonial</h2>
            <blockquote className="italic">"{caseStudy.testimonial.quote}"</blockquote>
            <p className="mt-2 font-semibold">{caseStudy.testimonial.author}</p>
            <p className="text-sm text-gray-600">{caseStudy.testimonial.position}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

