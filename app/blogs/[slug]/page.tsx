import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

// This is a mock function to simulate fetching blog post data
function getBlogPost(slug: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    title: "The Future of Retail: AI-Driven Personalization",
    date: "2023-06-15",
    readTime: "5 min read",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the retail industry, particularly in the realm of personalization. As consumers increasingly expect tailored experiences, retailers are turning to AI to deliver customized recommendations, personalized pricing, and individualized marketing campaigns.</p>
      
      <h2>The Power of AI in Retail Personalization</h2>
      <p>AI algorithms can analyze vast amounts of customer data, including purchase history, browsing behavior, and demographic information, to create detailed customer profiles. These profiles enable retailers to:</p>
      <ul>
        <li>Recommend products that align with individual customer preferences</li>
        <li>Personalize email marketing campaigns for higher engagement rates</li>
        <li>Optimize pricing strategies based on individual customer value</li>
        <li>Create personalized loyalty programs that resonate with each customer</li>
      </ul>

      <h2>Real-World Examples</h2>
      <p>Many leading retailers are already leveraging AI for personalization:</p>
      <ul>
        <li>Amazon's recommendation engine, powered by AI, drives 35% of its total sales</li>
        <li>Stitch Fix uses AI to curate personalized clothing selections for its customers</li>
        <li>Sephora's AI-powered app provides personalized skincare and makeup recommendations</li>
      </ul>

      <h2>The Future of AI-Driven Personalization</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated personalization strategies in retail. From AI-powered virtual shopping assistants to personalized in-store experiences driven by facial recognition, the future of retail is undoubtedly personal.</p>

      <p>Retailers who embrace AI-driven personalization will be well-positioned to meet the evolving expectations of consumers and gain a competitive edge in the market.</p>
    `,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
          <div className="flex items-center space-x-4 text-gray-500 mt-2">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

