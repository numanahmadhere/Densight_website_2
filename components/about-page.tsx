"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Globe, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in AI and data science, Sarah founded Densight AI to help businesses leverage the power of artificial intelligence.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael leads our technical team, bringing expertise in machine learning, deep learning, and large-scale data systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Priya Patel",
    role: "Head of AI Research",
    bio: "Priya drives innovation at Densight AI, focusing on developing cutting-edge AI algorithms and solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI and data science.",
    icon: BookOpen,
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality solutions and services to our clients.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to understand their unique challenges and goals.",
    icon: Users,
  },
  {
    title: "Global Impact",
    description: "We aim to make a positive impact on businesses and communities worldwide through AI.",
    icon: Globe,
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Densight AI
      </motion.h1>

      <motion.section
        className="mb-10 md:mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At Densight AI, our mission is to empower businesses with cutting-edge artificial intelligence and data
              science solutions that drive growth, innovation, and competitive advantage.
            </p>
            <p className="text-lg mb-4">
              We believe that AI should be accessible to businesses of all sizes, and we're committed to making that a
              reality through our tailored solutions and expert guidance.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Densight AI Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <value.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="pt-4 md:pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-center">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our AI solutions can help your business thrive in the digital age.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

