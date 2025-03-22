"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, MessageSquare, Eye } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "@/components/book-meeting-button"

export default function AIMachineLearningService() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI & Machine Learning
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Leverage the power of AI and Machine Learning to automate processes and gain a competitive edge.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-6 w-6 text-blue-500" />
              Deep Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Utilize neural networks for complex data processing and decision-making in various domains.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-blue-500" />
              Natural Language Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enhance communication and understanding between humans and machines with our NLP solutions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="mr-2 h-6 w-6 text-blue-500" />
              Computer Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Implement advanced image and video processing for object detection, recognition, and analysis.</p>
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
            <CardTitle>AI & ML Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our AI & Machine Learning solutions can be applied to various industries and use cases:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Predictive maintenance in manufacturing</li>
              <li>Fraud detection in finance</li>
              <li>Personalized recommendations in e-commerce</li>
              <li>Autonomous vehicles in transportation</li>
              <li>Drug discovery in healthcare</li>
              <li>Energy consumption optimization in smart cities</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to revolutionize your business with AI?</h2>
        <p className="text-lg mb-8">
          Discover how our AI & Machine Learning solutions can transform your operations and drive innovation.
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

