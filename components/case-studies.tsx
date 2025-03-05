"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Market Expansion Strategy for Global Pharmaceutical Company",
    client: "PharmaCorp International",
    description:
      "Developed a comprehensive market entry strategy for a Fortune 500 pharmaceutical company expanding into emerging markets in Southeast Asia.",
    result:
      "Achieved 25% market share in target countries within 2 years, resulting in $500M additional annual revenue",
    link: "/case-studies/pharmacorp-market-expansion",
  },
  {
    title: "Digital Transformation for Leading Financial Services Provider",
    client: "Global Finance Group",
    description:
      "Led end-to-end digital transformation initiative for a top-tier financial services firm, including core banking systems modernization and customer experience enhancement.",
    result: "Reduced operational costs by 30% and increased customer satisfaction scores by 40%",
    link: "/case-studies/global-finance-digital-transformation",
  },
  {
    title: "Supply Chain Optimization for Multinational Retailer",
    client: "MegaRetail Corporation",
    description:
      "Redesigned global supply chain network and implemented advanced analytics for demand forecasting and inventory optimization.",
    result: "Improved inventory turnover by 35% and reduced logistics costs by 20%, saving $100M annually",
    link: "/case-studies/megaretail-supply-chain-optimization",
  },
]

const CaseStudies = ({ className }: { className?: string }) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">Client: {study.client}</p>
                  <p className="mb-4 text-gray-700">{study.description}</p>
                  <p className="font-semibold text-blue-800 mb-4">Result: {study.result}</p>
                  <Link href={study.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/case-studies">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold">
              View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

