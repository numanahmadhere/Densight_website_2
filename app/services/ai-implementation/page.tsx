import type { Metadata } from "next"
import { Code, Cog, Zap, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import OptimizedImage from "@/components/optimized-image"
import { BookMeetingButton } from "@/components/book-meeting-button"

export const metadata: Metadata = {
  title: "AI Implementation | Densight AI",
  description:
    "Turn AI strategies into reality with our expert implementation services. Custom AI solutions, system integration, process automation, and continuous optimization.",
}

const AIImplementationPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">AI Implementation</h1>
      <p className="text-xl mb-8">Turn AI strategies into reality with our expert implementation services.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Bringing AI to Life in Your Business</h2>
          <p className="mb-4">
            At Densight AI, we don't just strategize about AI - we make it happen. Our AI Implementation service is
            designed to seamlessly integrate cutting-edge AI technologies into your existing business processes, driving
            innovation and efficiency across your organization.
          </p>
          <p>
            Whether you're looking to automate complex tasks, enhance decision-making with predictive analytics, or
            create entirely new AI-powered products, our team of expert engineers and data scientists will guide you
            every step of the way.
          </p>
        </div>
        <OptimizedImage
          src="/images/ai-implementation.jpg"
          alt="AI Implementation"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6">Our AI Implementation Capabilities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: Code,
            title: "Custom AI Solution Development",
            description: "Tailor-made AI solutions designed to address your unique business challenges.",
          },
          {
            icon: Cog,
            title: "AI Integration with Existing Systems",
            description: "Seamlessly integrate AI capabilities into your current technology stack.",
          },
          {
            icon: Zap,
            title: "AI-Powered Process Automation",
            description: "Streamline operations and boost efficiency with intelligent automation.",
          },
          {
            icon: TrendingUp,
            title: "Continuous AI Optimization",
            description: "Ongoing refinement and improvement of AI models for peak performance.",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <item.icon className="h-6 w-6 mr-2 text-blue-500" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Our AI Implementation Process</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            step: 1,
            title: "Assessment & Planning",
            description:
              "We start by thoroughly assessing your current systems and processes, and develop a comprehensive implementation plan.",
          },
          {
            step: 2,
            title: "Solution Design",
            description: "Our experts design a custom AI solution tailored to your specific needs and objectives.",
          },
          {
            step: 3,
            title: "Development & Integration",
            description: "We develop the AI solution and seamlessly integrate it with your existing systems.",
          },
          {
            step: 4,
            title: "Testing & Refinement",
            description:
              "Rigorous testing ensures the solution performs optimally, followed by refinements based on real-world data.",
          },
          {
            step: 5,
            title: "Deployment & Training",
            description:
              "We deploy the solution and provide comprehensive training to your team to ensure smooth adoption.",
          },
          {
            step: 6,
            title: "Ongoing Support & Optimization",
            description:
              "Our commitment doesn't end at deployment. We provide ongoing support and continuously optimize the solution.",
          },
        ].map((item) => (
          <div key={item.step} className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
              {item.step}
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Densight AI for AI Implementation?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Proven track record of successful AI implementations across various industries</li>
          <li>Team of experienced AI engineers, data scientists, and domain experts</li>
          <li>Customized solutions tailored to your specific business needs</li>
          <li>Seamless integration with existing systems and processes</li>
          <li>Ongoing support and optimization to ensure long-term success</li>
          <li>Commitment to ethical AI practices and data security</li>
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Implement AI in Your Business?</h2>
        <p className="mb-6">Let's discuss how we can bring the power of AI to your organization.</p>
        <div className="flex justify-center space-x-4">
          <BookMeetingButton className="text-lg px-6 py-3" />
          <Button variant="outline" className="text-lg px-6 py-3">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AIImplementationPage

