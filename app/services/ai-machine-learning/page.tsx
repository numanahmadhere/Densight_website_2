import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Eye, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI & Machine Learning Services | Densight AI",
  description:
    "Leverage cutting-edge AI and Machine Learning solutions to automate processes, gain insights, and create competitive advantages for your business.",
}

const capabilities = [
  {
    title: "Deep Learning",
    description:
      "Harness the power of advanced neural networks for complex pattern recognition, decision-making, and problem-solving across various domains.",
    icon: Brain,
  },
  {
    title: "Natural Language Processing",
    description:
      "Implement AI-powered language understanding and generation for chatbots, sentiment analysis, and automated content creation.",
    icon: MessageSquare,
  },
  {
    title: "Computer Vision",
    description:
      "Utilize state-of-the-art image and video analysis for object detection, facial recognition, and automated visual inspections.",
    icon: Eye,
  },
  {
    title: "Predictive Modeling",
    description:
      "Leverage data-driven forecasting and prediction to anticipate market trends, customer behavior, and operational outcomes.",
    icon: TrendingUp,
  },
]

const benefits = [
  "Automate repetitive tasks and increase operational efficiency",
  "Gain deeper insights from your data for better decision-making",
  "Enhance customer experiences through personalization",
  "Identify new business opportunities and revenue streams",
  "Stay ahead of the competition with cutting-edge AI technologies",
]

const caseStudies = [
  {
    title: "E-commerce Giant Boosts Sales by 35%",
    description: "Our AI-powered recommendation engine increased cross-selling and upselling opportunities.",
  },
  {
    title: "Manufacturing Firm Reduces Downtime by 50%",
    description: "Predictive maintenance algorithms helped anticipate equipment failures before they occurred.",
  },
]

const AIMachineLearningPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">AI & Machine Learning Services</h1>
      <p className="text-xl text-center mb-12">
        Unlock the full potential of your data and transform your business with our cutting-edge AI and Machine Learning
        solutions. At Densight AI, we combine advanced algorithms, industry expertise, and a deep understanding of your
        unique challenges to deliver tailored AI solutions that drive real business value.
      </p>

      <h2 className="text-3xl font-bold mb-6">Our AI & ML Capabilities</h2>
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

      <h2 className="text-3xl font-bold mb-6">Why Choose Densight AI for Your AI & ML Needs?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Benefits of Our AI & ML Solutions</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
          <p className="mb-4">
            We don't just implement AI; we partner with you to understand your business goals, challenges, and data
            landscape. Our team of experienced data scientists and AI engineers work closely with you to:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Assess your AI readiness and identify high-impact opportunities</li>
            <li>Develop custom AI models tailored to your specific needs</li>
            <li>Integrate AI solutions seamlessly into your existing workflows</li>
            <li>Provide ongoing support and optimization to ensure long-term success</li>
          </ol>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{study.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-6">
          Let's discuss how our AI & Machine Learning solutions can address your specific challenges and drive
          innovation in your organization.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mr-4">
            Schedule a Consultation
          </Button>
        </Link>
        <Link href="/case-studies">
          <Button variant="outline" size="lg">
            View More Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AIMachineLearningPage

