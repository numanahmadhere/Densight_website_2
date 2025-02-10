"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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
    title: "How Generative AI is Revolutionizing Business Operations",
    description:
      "Discover the ways generative AI is reshaping various aspects of business operations and decision-making.",
    date: "March 2024",
    readTime: "6 min read",
    category: "AI Trends",
    link: "/blogs/generative-ai-business-operations",
  },
  {
    title: "AI in Retail: Transforming Customer Experience",
    description:
      "Learn how AI is being used to create personalized and seamless shopping experiences in the retail sector.",
    date: "June 2024",
    readTime: "7 min read",
    category: "Industry Solutions",
    link: "/blogs/ai-retail-customer-experience",
  },
  {
    title: "Manufacturing Excellence Through AI",
    description:
      "Explore real-world applications of AI in manufacturing, from predictive maintenance to quality control.",
    date: "October 2024",
    readTime: "9 min read",
    category: "Industry Solutions",
    link: "/blogs/manufacturing-excellence-ai",
  },
  {
    title: "Deep Learning vs Machine Learning: A Comprehensive Guide",
    description:
      "Understand the key differences between deep learning and machine learning, and when to use each approach.",
    date: "November 2024",
    readTime: "10 min read",
    category: "Technical Insights",
    link: "/blogs/deep-learning-vs-machine-learning",
  },
  {
    title: "Implementing Computer Vision in Quality Control",
    description:
      "A step-by-step guide to implementing computer vision solutions for automated quality control in manufacturing.",
    date: "December 2024",
    readTime: "8 min read",
    category: "Technical Insights",
    link: "/blogs/computer-vision-quality-control",
  },
]

const categories = ["All", "AI Trends", "Industry Solutions", "Technical Insights"]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Insights & Industry Trends
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Stay updated with the latest AI trends, industry insights, and expert analysis from our team of data scientists
        and AI specialists.
      </motion.p>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.date} • {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.description}</p>
                <Badge className="mb-4">{post.category}</Badge>
                <Link href={post.link}>
                  <Button variant="outline">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

