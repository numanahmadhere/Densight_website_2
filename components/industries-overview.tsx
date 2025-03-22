"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Truck, Cog, Building, Leaf, Zap, Hotel } from "lucide-react"

const industries = [
  { name: "Retail", icon: ShoppingCart, link: "/industries/retail" },
  { name: "Supply Chain", icon: Truck, link: "/industries/supply-chain" },
  { name: "Manufacturing", icon: Cog, link: "/industries/manufacturing" },
  { name: "Finance", icon: Building, link: "/industries/finance" },
  { name: "Environmental", icon: Leaf, link: "/industries/environmental" },
  { name: "Automobile", icon: Zap, link: "/industries/automobile" },
  { name: "Hospitality", icon: Hotel, link: "/industries/hospitality" },
]

export default function IndustriesOverview({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <section className={`py-8 md:py-12 ${compact ? "bg-transparent" : "bg-gray-50"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>
        <div
          className={`grid ${compact ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"} gap-3 md:gap-4 mb-6`}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={industry.link}>
                <Card className="hover:shadow-md transition-shadow duration-300 text-center h-full">
                  <CardContent className="p-3 md:p-4 flex flex-col items-center justify-center h-full">
                    <industry.icon className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-sm font-medium">{industry.name}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        {!compact && (
          <div className="text-center mt-4">
            <Link href="/industries">
              <Button variant="outline">Explore All Industries</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

