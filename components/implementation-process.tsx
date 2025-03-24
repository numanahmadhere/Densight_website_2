import { Lightbulb, Search, Code, BarChart, Rocket } from "lucide-react"

const steps = [
  { icon: Lightbulb, title: "Ideation" },
  { icon: Search, title: "Analysis" },
  { icon: Code, title: "Development" },
  { icon: BarChart, title: "Testing" },
  { icon: Rocket, title: "Deployment" },
]

export function ImplementationProcess() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our AI Implementation Process</h2>
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2" />

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-800">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

