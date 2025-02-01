import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
]

const BlogPreviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-500">
                {post.date} • {post.readTime}
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Link
                href={`/blogs/${post.link.split("/").pop()}`}
                className="inline-flex items-center text-primary hover:underline"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BlogPreviews

