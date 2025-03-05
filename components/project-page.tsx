import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react" // Import React

interface ProjectPageProps {
  title: string
  industry: string
  icon: React.ElementType
  impact: string
  description: string
  challenges: string[]
  solution: string
  results: string[]
  technologies: string[]
}

export default function ProjectPage({
  title,
  industry,
  icon: Icon,
  impact,
  description,
  challenges,
  solution,
  results,
  technologies,
}: ProjectPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/projects" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
            <Icon className="h-10 w-10 text-blue-500" />
          </div>
          <Badge variant="secondary" className="mt-2">
            {industry}
          </Badge>
        </CardHeader>
        <CardContent className="pt-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p>{description}</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Impact</h2>
            <p className="font-bold text-blue-600">{impact}</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Challenges</h2>
            <ul className="list-disc pl-6 space-y-2">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Our Solution</h2>
            <p>{solution}</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc pl-6 space-y-2">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Ready to transform your business?</h2>
            <p className="mb-4">
              Let's discuss how we can apply similar AI solutions to drive growth and innovation in your industry.
            </p>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

