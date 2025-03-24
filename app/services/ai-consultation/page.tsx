import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clipboard, Map, Shield, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI Strategy & Consultation | Densight AI",
  description:
    "Get expert guidance on AI strategy, technology assessment, and implementation roadmap to ensure successful AI adoption in your organization.",
}

const capabilities = [
  {
    title: "AI Readiness Assessment",
    description:
      "Evaluate your organization's current capabilities, data infrastructure, and identify high-impact areas for AI integration.",
    icon: Clipboard,
  },
  {
    title: "AI Implementation Roadmap",
    description:
      "Develop a comprehensive, phased plan for successful AI adoption, aligned with your business goals and industry best practices.",
    icon: Map,
  },
  {
    title: "AI Ethics and Governance",
    description:
      "Establish robust ethical guidelines and governance frameworks to ensure responsible and transparent AI use in your organization.",
    icon: Shield,
  },
  {
    title: "AI Training and Workshops",
    description:
      "Empower your team with tailored training programs and workshops to build AI literacy and foster a culture of innovation.",
    icon: Users,
  },
]

const benefits = [
  "Align AI initiatives with your business objectives",
  "Minimize risks and maximize ROI in AI investments",
  "Accelerate AI adoption and digital transformation",
  "Build internal AI capabilities and foster innovation",
  "Ensure ethical and responsible AI implementation",
]

const consultationProcess = [
  {
    title: "Initial Discovery",
    description: "We start by understanding your business goals, challenges, and current technological landscape.",
  },
  {
    title: "AI Readiness Assessment",
    description: "Our experts evaluate your organization's data infrastructure, processes, and AI potential.",
  },
  {
    title: "Strategy Development",
    description: "We create a tailored AI strategy that aligns with your business objectives and industry trends.",
  },
  {
    title: "Implementation Planning",
    description: "We develop a detailed roadmap for AI adoption, including timelines, resources, and milestones.",
  },
  {
    title: "Ongoing Support and Optimization",
    description: "Our team provides continuous guidance, monitoring, and optimization of your AI initiatives.",
  },
]

const AIConsultationPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">AI Strategy & Consultation</h1>
      <p className="text-xl text-center mb-12">
        Navigate the complex world of AI with confidence. Our expert consultants provide strategic guidance, technology
        assessment, and implementation roadmaps to ensure successful AI adoption and maximize business value.
      </p>

      <h2 className="text-3xl font-bold mb-6">Our AI Consultation Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {capabilities.map((capability, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <capability.icon className="h-6 w-6 text-blue-500 mr-2" />
                {capability.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{capability.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Why Choose Densight AI for AI Consultation?</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Benefits of Our AI Consultation Services</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our AI Consultation Process</h2>
      <div className="mb-12">
        {consultationProcess.map((step, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{`${index + 1}. ${step.title}`}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
      <div className="mb-12">
        <p className="mb-4">
          At Densight AI, our consultation team brings together a diverse group of experts with deep knowledge in:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Data Science and Analytics</li>
          <li>Cloud Computing and Big Data Technologies</li>
          <li>Industry-specific AI applications</li>
          <li>AI Ethics and Governance</li>
          <li>Change Management and Digital Transformation</li>
        </ul>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
        <p className="text-xl mb-6">
          Let's discuss how our AI Strategy & Consultation services can help you navigate the complex world of AI and
          drive innovation in your organization.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mr-4">
            Schedule a Free Consultation
          </Button>
        </Link>
        <Link href="/case-studies">
          <Button variant="outline" size="lg">
            View AI Success Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AIConsultationPage

