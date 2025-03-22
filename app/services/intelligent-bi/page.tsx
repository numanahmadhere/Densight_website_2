import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Activity, Database, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Intelligent Business Intelligence | Densight AI",
  description:
    "Transform your data into actionable insights with our advanced Business Intelligence solutions, empowering data-driven decision-making across your organization.",
}

const capabilities = [
  {
    title: "Interactive Data Visualization",
    description:
      "Create intuitive and interactive dashboards that bring your data to life, enabling quick insights and informed decision-making.",
    icon: BarChart2,
  },
  {
    title: "Real-time Analytics",
    description:
      "Process and analyze data in real-time, providing immediate insights for time-sensitive decisions and rapid response to market changes.",
    icon: Activity,
  },
  {
    title: "Big Data Processing",
    description:
      "Efficiently handle and analyze large volumes of structured and unstructured data, uncovering hidden patterns and opportunities.",
    icon: Database,
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage advanced algorithms to forecast future trends, customer behavior, and business outcomes based on historical data.",
    icon: TrendingUp,
  },
]

const benefits = [
  "Make data-driven decisions with confidence",
  "Identify new revenue opportunities and optimize operations",
  "Improve customer satisfaction through data-backed insights",
  "Streamline reporting and reduce manual data analysis",
  "Gain a competitive edge with real-time market insights",
]

const features = [
  "Customizable dashboards tailored to your specific KPIs",
  "Integration with multiple data sources for a unified view",
  "Advanced data security and governance features",
  "Mobile-friendly design for insights on-the-go",
  "Automated reporting and alert systems",
]

const IntelligentBIPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Intelligent Business Intelligence</h1>
      <p className="text-xl text-center mb-12">
        Transform your raw data into actionable insights with our advanced Business Intelligence solutions. Empower your
        entire organization to make data-driven decisions, uncover new opportunities, and stay ahead of the competition.
      </p>

      <h2 className="text-3xl font-bold mb-6">Our Intelligent BI Capabilities</h2>
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

      <h2 className="text-3xl font-bold mb-6">Why Choose Densight AI for Business Intelligence?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Benefits of Our BI Solutions</h3>
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
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our BI Implementation Process</h2>
      <div className="mb-12">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Assessment:</strong> We analyze your current data infrastructure, business goals, and reporting
            needs.
          </li>
          <li>
            <strong>Strategy:</strong> Our experts develop a tailored BI strategy aligned with your objectives.
          </li>
          <li>
            <strong>Data Integration:</strong> We connect and clean your data sources to create a unified data
            warehouse.
          </li>
          <li>
            <strong>Dashboard Design:</strong> We create intuitive, customized dashboards that bring your KPIs to life.
          </li>
          <li>
            <strong>Implementation:</strong> Our team deploys the BI solution and integrates it with your existing
            systems.
          </li>
          <li>
            <strong>Training:</strong> We provide comprehensive training to ensure your team can leverage the full power
            of the BI tools.
          </li>
          <li>
            <strong>Ongoing Support:</strong> Our support team is always available to help you optimize and expand your
            BI capabilities.
          </li>
        </ol>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Unlock the Power of Your Data?</h2>
        <p className="text-xl mb-6">
          Let's discuss how our Intelligent Business Intelligence solutions can transform your decision-making process
          and drive growth for your organization.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mr-4">
            Request a Demo
          </Button>
        </Link>
        <Link href="/case-studies">
          <Button variant="outline" size="lg">
            Explore BI Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default IntelligentBIPage

