"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp, BarChart2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts"

// This is a mock function to simulate fetching blog post data
function getBlogPost(slug: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    title: "The Future of Retail: AI-Driven Personalization",
    date: "2024-06-15", // Updated date
    readTime: "5 min read",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Data Scientist",
    },
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
    tags: ["Artificial Intelligence", "Retail", "Personalization", "Customer Experience"],
    relatedArticles: [
      { title: "How AI is Transforming Supply Chain Management", link: "/blogs/ai-supply-chain" },
      { title: "The Rise of Chatbots in Customer Service", link: "/blogs/chatbots-customer-service" },
    ],
  }
}

const personalizationData = [
  { name: "Product Recommendations", value: 35 },
  { name: "Email Campaigns", value: 25 },
  { name: "Pricing Optimization", value: 20 },
  { name: "Loyalty Programs", value: 15 },
  { name: "Other", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const retailTrends = [
  { year: 2018, personalizedExperience: 20, traditionalRetail: 80 },
  { year: 2019, personalizedExperience: 35, traditionalRetail: 65 },
  { year: 2020, personalizedExperience: 45, traditionalRetail: 55 },
  { year: 2021, personalizedExperience: 60, traditionalRetail: 40 },
  { year: 2022, personalizedExperience: 75, traditionalRetail: 25 },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blogs
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="mb-8">
          <CardHeader className="border-b">
            <motion.h1
              className="text-4xl font-bold mb-4 text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-800">
              <TrendingUp className="mr-2 h-6 w-6 text-blue-500" />
              AI Personalization Impact in Retail
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-700">Personalization Strategies</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RePieChart>
                    <Pie
                      data={personalizationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {personalizationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-700">Personalized vs Traditional Retail</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={retailTrends}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="personalizedExperience"
                      stroke="#8884d8"
                      name="Personalized Experience"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="traditionalRetail"
                      stroke="#82ca9d"
                      name="Traditional Retail"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-800">Related Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {post.relatedArticles.map((article, index) => (
                <li key={index}>
                  <Link href={article.link} className="flex items-center text-blue-600 hover:underline">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-8 pt-8 border-t">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold mb-2 text-blue-700">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2 text-blue-700">Share this article:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Share2 className="h-5 w-5" />
              </a>
              {/* Add more social sharing icons here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

