"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Compass, FileText } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "@/components/book-meeting-button"

export default function AIConsultationService() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Consultation Services
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Expert guidance to help you navigate the AI landscape and implement tailored solutions for your business.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-blue-500" />
              AI Strategy Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Develop a comprehensive AI strategy aligned with your business goals and industry trends.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Compass className="mr-2 h-6 w-6 text-blue-500" />
              Technology Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Evaluate your current technology stack and identify opportunities for AI integration.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-6 w-6 text-blue-500" />
              Implementation Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Create a detailed plan for implementing AI solutions, including timelines and resource allocation.</p>
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Consultation Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Initial Assessment:</strong> We begin by understanding your business objectives, current
                technology landscape, and AI aspirations.
              </li>
              <li>
                <strong>Opportunity Identification:</strong> Our experts identify key areas where AI can drive the most
                value for your organization.
              </li>
              <li>
                <strong>Strategy Formulation:</strong> We develop a tailored AI strategy that aligns with your business
                goals and industry best practices.
              </li>
              <li>
                <strong>Technology Evaluation:</strong> We assess your current technology stack and recommend AI
                solutions that integrate seamlessly.
              </li>
              <li>
                <strong>Implementation Planning:</strong> We create a detailed roadmap for AI implementation, including
                timelines, resource requirements, and key milestones.
              </li>
              <li>
                <strong>Ongoing Support:</strong> Our team provides continuous guidance and support throughout your AI
                journey.
              </li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our AI Consultation Services can help you navigate the complex world of AI and drive
          innovation in your organization.
        </p>
        <div className="flex justify-center space-x-4">
          <BookMeetingButton />
          <Link href="/contact">
            <Button variant="outline">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

