import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Clipboard,
  Map,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Brain,
  BarChart,
  Code,
  PieChart,
  Lightbulb,
  Cog,
  Rocket,
  Target,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI Implementation Consultation | Densight AI",
  description:
    "Expert guidance on AI implementation strategy, technology assessment, and roadmap to ensure successful AI adoption and maximize business value.",
}

const services = [
  {
    title: "AI Readiness Assessment",
    description:
      "Evaluate your organization's current capabilities, data infrastructure, and identify high-impact areas for AI implementation.",
    icon: Clipboard,
  },
  {
    title: "AI Strategy Development",
    description:
      "Create a tailored AI strategy aligned with your business goals, industry trends, and competitive landscape.",
    icon: Brain,
  },
  {
    title: "Implementation Roadmap",
    description:
      "Develop a comprehensive, phased plan for successful AI adoption and implementation, including timelines and resource allocation.",
    icon: Map,
  },
  {
    title: "Technology Stack Evaluation",
    description:
      "Assess and recommend the most suitable AI technologies, platforms, and tools for your specific needs and use cases.",
    icon: Code,
  },
  {
    title: "Data Strategy & Management",
    description:
      "Design and implement robust data strategies to ensure high-quality, accessible data for AI models and applications.",
    icon: BarChart,
  },
  {
    title: "AI Ethics and Governance",
    description:
      "Establish ethical guidelines and governance frameworks to ensure responsible and transparent AI implementation.",
    icon: Shield,
  },
  {
    title: "Change Management",
    description:
      "Guide your organization through the cultural and operational changes required for successful AI adoption.",
    icon: Users,
  },
  {
    title: "ROI Analysis & Monitoring",
    description: "Develop KPIs and monitoring systems to track the impact and ROI of your AI implementations.",
    icon: PieChart,
  },
]

const credibilityPoints = [
  {
    title: "Industry Expertise",
    description: "Our consultants have an average of 15+ years of experience across various industries.",
  },
  {
    title: "Proven Track Record",
    description: "We've successfully implemented AI solutions for over 500 companies worldwide.",
  },
  {
    title: "Cutting-edge Knowledge",
    description: "Our team stays at the forefront of AI advancements through continuous learning and research.",
  },
  {
    title: "Tailored Approach",
    description: "We develop customized strategies that align with your unique business goals and challenges.",
  },
]

const implementationSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Assessment",
    description: "We analyze your current state and identify AI opportunities.",
  },
  {
    icon: Target,
    title: "Strategy Development",
    description: "We create a tailored AI implementation strategy aligned with your goals.",
  },
  {
    icon: Map,
    title: "Roadmap Creation",
    description: "We develop a detailed plan for AI adoption and implementation.",
  },
  {
    icon: Cog,
    title: "Implementation & Integration",
    description: "We execute the plan, integrating AI solutions into your systems.",
  },
  {
    icon: Users,
    title: "Training & Change Management",
    description: "We ensure your team is prepared for the AI-driven transformation.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "We deploy solutions and continuously optimize for maximum impact.",
  },
]

const AIImplementationConsultationPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">AI Implementation Consultation</h1>
      <p className="text-xl text-center mb-12">
        Navigate the complex world of AI implementation with confidence. Our expert consultants provide strategic
        guidance, technology assessment, and implementation roadmaps to ensure successful AI adoption and maximize
        business value.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our AI Implementation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <service.icon className="h-8 w-8 text-blue-500 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Densight AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credibilityPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our AI Implementation Process</h2>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {implementationSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="relative flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add 3 client success story cards here */}
          {/* Example: */}
          <Card>
            <CardHeader>
              <CardTitle>Global Retailer Achieves 30% Efficiency Boost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our AI implementation strategy helped a leading retailer optimize their supply chain, resulting in a 30%
                increase in operational efficiency and significant cost savings.
              </p>
            </CardContent>
          </Card>
          {/* Add two more success stories */}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8">
          Let's discuss how our AI Implementation Consultation can drive innovation and growth for your organization.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  )
}

export default AIImplementationConsultationPage

