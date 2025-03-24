import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Factory, LineChart, BarChart2 } from "lucide-react"

const impactData = [
  {
    metric: "Revenue Increase",
    value: "15%",
    description: "Average revenue growth for our retail clients",
    industry: "Retail",
    insight: "By leveraging AI-driven personalization, we've helped retailers increase customer lifetime value by 25%.",
    icon: ShoppingBag,
  },
  {
    metric: "Cost Reduction",
    value: "20%",
    description: "Average supply chain cost reduction for manufacturing clients",
    industry: "Manufacturing",
    insight: "Our predictive maintenance solutions have reduced unplanned downtime by 35% for manufacturers.",
    icon: Factory,
  },
  {
    metric: "Fraud Reduction",
    value: "60%",
    description: "Reduction in fraudulent transactions for financial clients",
    industry: "Finance",
    insight:
      "Our AI models have improved regulatory compliance accuracy by 40%, reducing potential fines and penalties.",
    icon: LineChart,
  },
  {
    metric: "Efficiency Boost",
    value: "30%",
    description: "Average improvement in operational efficiency across all sectors",
    industry: "Cross-industry",
    insight: "Our process automation solutions have reduced manual data entry errors by 75% across various industries.",
    icon: BarChart2,
  },
]

export default function OurImpact() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactData.map((item, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Badge variant="outline">{item.industry}</Badge>
                <item.icon className="h-6 w-6 text-blue-500" />
              </CardHeader>
              <CardContent className="pt-0">
                <CardTitle className="text-4xl font-bold text-blue-600 mb-2">{item.value}</CardTitle>
                <h3 className="text-lg font-semibold mb-2">{item.metric}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-800 border-t pt-2">{item.insight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

