import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Enterprise: 2024 and Beyond",
    description: "Explore the transformative impact of AI on businesses and what to expect in the coming years.",
    date: "December 2023",
    readTime: "8 min read",
    category: "AI Trends",
    link: "/blogs/future-of-ai-2024",
  },
  {
    title: "Leveraging Big Data for Supply Chain Optimization",
    description: "Learn how big data analytics can streamline your supply chain and reduce costs.",
    date: "June 2024",
    readTime: "7 min read",
    category: "Industry Solutions",
    link: "/blogs/big-data-supply-chain",
  },
  {
    title: "Predictive Analytics in Manufacturing: A Case Study",
    description: "Discover how a major manufacturer increased efficiency by 30% using predictive analytics.",
    date: "October 2024",
    readTime: "6 min read",
    category: "Technical Insights",
    link: "/blogs/predictive-analytics-case-study",
  },
]

const BlogPreviews = ({ className }: { className?: string }) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <p className="text-sm text-gray-500">{post.readTime}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              </CardContent>
              <CardContent className="pt-0">
                <Link
                  href={post.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read full article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreviews

