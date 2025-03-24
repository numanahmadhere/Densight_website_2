import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, PieChart, LineChart } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, RetailTech",
    content: "Densight AI has transformed our decision-making process. Their insights have been invaluable.",
    avatar: "/placeholder.svg?height=40&width=40",
    icon: BarChart,
  },
  {
    name: "Jane Smith",
    role: "CTO, FashionForward",
    content:
      "The data-driven strategies provided by Densight AI have significantly boosted our sales and customer engagement.",
    avatar: "/placeholder.svg?height=40&width=40",
    icon: PieChart,
  },
  {
    name: "Mike Johnson",
    role: "COO, GroceryGiant",
    content: "Densight AI's predictive analytics have helped us optimize our supply chain and reduce waste.",
    avatar: "/placeholder.svg?height=40&width=40",
    icon: LineChart,
  },
]

const Testimonials = ({ className }: { className?: string }) => {
  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-grow">
                    <CardTitle className="flex items-center">
                      {testimonial.name}
                      <testimonial.icon className="ml-2 h-4 w-4 text-blue-500" />
                    </CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

