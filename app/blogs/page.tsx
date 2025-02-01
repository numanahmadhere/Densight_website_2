import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Retail: AI-Driven Personalization",
    description: "Explore how AI is revolutionizing the retail industry through personalized shopping experiences.",
    date: "2023-06-15",
    readTime: "5 min read",
    link: "/blogs/ai-driven-personalization",
  },
  {
    title: "Leveraging Big Data for Supply Chain Optimization",
    description: "Learn how big data analytics can streamline your supply chain and reduce costs.",
    date: "2023-05-28",
    readTime: "7 min read",
    link: "/blogs/big-data-supply-chain",
  },
  {
    title: "Predictive Analytics in Retail: A Case Study",
    description: "Discover how a major retailer increased sales by 20% using predictive analytics.",
    date: "2023-05-10",
    readTime: "6 min read",
    link: "/blogs/predictive-analytics-case-study",
  },
  // Add more blog posts here
]

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-600">{post.title}</CardTitle>
              <CardDescription className="flex items-center space-x-2 text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>{post.readTime}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">{post.description}</p>
              <Link href={post.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

