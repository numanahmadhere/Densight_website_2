"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// This would typically come from your CMS or database
const blogCategories = [
  {
    name: "AI Trends",
    posts: [
      {
        title: "The Future of AI in Enterprise: 2024 and Beyond",
        keywords: ["Enterprise AI", "Digital Transformation", "AI Trends"],
        readTime: "8 min",
      },
      {
        title: "How Generative AI is Revolutionizing Business Operations",
        keywords: ["Generative AI", "Business Operations", "AI Innovation"],
        readTime: "6 min",
      },
    ],
  },
  {
    name: "Industry Solutions",
    posts: [
      {
        title: "AI in Retail: Transforming Customer Experience",
        keywords: ["Retail AI", "Customer Experience", "Personalization"],
        readTime: "7 min",
      },
      {
        title: "Manufacturing Excellence Through AI",
        keywords: ["Manufacturing AI", "Industry 4.0", "Smart Manufacturing"],
        readTime: "9 min",
      },
    ],
  },
  {
    name: "Technical Insights",
    posts: [
      {
        title: "Deep Learning vs Machine Learning: A Comprehensive Guide",
        keywords: ["Deep Learning", "Machine Learning", "AI Technology"],
        readTime: "10 min",
      },
      {
        title: "Implementing Computer Vision in Quality Control",
        keywords: ["Computer Vision", "Quality Control", "AI Implementation"],
        readTime: "8 min",
      },
    ],
  },
]

export default function BlogStrategy() {
  const [activeTab, setActiveTab] = useState(blogCategories[0].name)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Industry Insights & Expertise
      </motion.h2>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full">
          {blogCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {blogCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.keywords.map((keyword) => (
                          <span key={keyword} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{post.readTime} read</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

