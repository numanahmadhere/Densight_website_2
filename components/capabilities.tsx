import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Database, LineChart, Network, Shield } from "lucide-react"

const capabilities = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms for predictive modeling and pattern recognition.",
    icon: Brain,
  },
  {
    title: "Deep Learning",
    description: "Neural networks for complex data analysis and decision-making.",
    icon: Network,
  },
  {
    title: "Natural Language Processing",
    description: "AI-powered language understanding and generation.",
    icon: Cpu,
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis for object detection and recognition.",
    icon: Shield,
  },
  {
    title: "Big Data Analytics",
    description: "Processing and analyzing large-scale datasets for insights.",
    icon: Database,
  },
  {
    title: "Predictive Analytics",
    description: "Forecasting future trends and behaviors based on historical data.",
    icon: LineChart,
  },
]

const Capabilities = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our AI Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Leveraging cutting-edge AI technologies to drive innovation and solve complex business challenges.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Card key={capability.title}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <capability.icon className="h-6 w-6 text-indigo-600 mr-2" />
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capabilities

