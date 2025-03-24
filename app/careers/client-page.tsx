"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersClientPage() {
  const openPositions = [
    {
      title: "Senior Data Scientist",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "We're looking for an experienced Data Scientist to join our team and help develop cutting-edge AI solutions for our clients.",
    },
    {
      title: "AI Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build and deploy machine learning models that solve real-world business problems.",
    },
    {
      title: "Business Intelligence Analyst",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Help our clients transform their data into actionable insights through advanced analytics and visualization.",
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and responsive user interfaces for our AI-powered applications and dashboards.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        At Densight AI, we're building the future of AI-powered business intelligence. Join our team of innovators and
        problem-solvers.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
        {openPositions.map((position, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{position.title}</h3>
            <div className="flex gap-4 mb-4 text-sm">
              <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">{position.location}</span>
              <span className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">{position.type}</span>
            </div>
            <p className="mb-4">{position.description}</p>
            <Button asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
        <p className="mb-6">
          We're always looking for talented individuals to join our team. Send us your resume and let us know how you
          can contribute.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

