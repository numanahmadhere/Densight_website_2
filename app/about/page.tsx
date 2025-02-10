import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BookMeetingButton } from "@/components/book-meeting-button"
import { MapPin, Users, CheckCircle, Globe, Award, Zap, Shield } from "lucide-react"
import type { Metadata } from "next"
import { FAQ } from "@/components/faq"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "About Densight AI - Our Mission and Vision",
  description:
    "Learn about Densight AI's mission, our expert team, and how we're revolutionizing industries with AI-driven solutions.",
  keywords: "Densight AI, About Us, AI Experts, Data Scientists, Industry Specialists",
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <OptimizedImage
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
          alt="Densight AI Logo"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-600">About Densight AI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge AI solutions and data-driven insights to drive innovation and growth.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          At Densight AI, we're on a mission to empower businesses with cutting-edge AI solutions. We believe that the
          future of business lies in data-driven decision making, and we're here to make that future a reality for
          companies of all sizes across various industries.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-6">
          We combine deep industry knowledge with state-of-the-art AI and machine learning techniques to deliver
          tailored solutions that drive real business value. Our team of experts works closely with each client to
          understand their unique challenges and opportunities, ensuring that our AI solutions are perfectly aligned
          with their business goals.
        </p>
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">A Note from Our CEO</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            "At Densight AI, we envision a future where every business, regardless of its size or industry, can harness
            the power of artificial intelligence to drive growth, innovation, and efficiency. Our mission is to
            democratize AI, making it accessible, understandable, and actionable for all.
          </p>
          <p className="text-lg mb-4">
            We're not just building algorithms; we're building partnerships. We're committed to understanding the unique
            challenges of each client and crafting AI solutions that not only solve today's problems but anticipate
            tomorrow's opportunities.
          </p>
          <p className="text-lg">
            As we continue to push the boundaries of what's possible with AI, we remain grounded in our core values of
            innovation, integrity, and impact. We're excited about the future we're building with our clients and
            partners, and we invite you to join us on this transformative journey."
          </p>
          <p className="text-lg font-semibold mt-4">- Numan Ahmad, CEO of Densight AI</p>
        </CardContent>
      </Card>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Impact</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <p className="text-3xl font-bold">100+</p>
            <p className="text-lg">Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <p className="text-3xl font-bold">250+</p>
            <p className="text-lg">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="h-12 w-12 text-purple-500 mb-4" />
            <p className="text-3xl font-bold">20+</p>
            <p className="text-lg">Countries Served</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Core Values</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>Constantly pushing the boundaries of what's possible with AI</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p>Maintaining the highest ethical standards in all our work</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p>Focusing on solutions that deliver measurable business results</p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg mb-6">
          Densight AI is powered by a diverse team of AI experts, data scientists, software engineers, and industry
          specialists. Our team brings together decades of experience in AI research and practical application across
          various sectors. We're united by our passion for innovation and our commitment to delivering exceptional
          results for our clients.
        </p>
        <Card>
          <CardContent className="text-center pt-6">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Numan Ahmad"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Numan Ahmad</h3>
            <p className="text-gray-600">Head of Client Solutions</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "Big Data Processing",
            "AI Strategy Consulting",
          ].map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Why Choose Densight AI?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proven track record of success across multiple industries</li>
            <li>Team of world-class AI experts and data scientists</li>
            <li>Customized solutions tailored to your specific business needs</li>
            <li>Commitment to ethical AI practices and data privacy</li>
            <li>Ongoing support and optimization to ensure long-term success</li>
            <li>Transparent communication and collaborative approach</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { city: "Riyadh", address: "King Fahd Road, Riyadh 12214, Saudi Arabia" },
            { city: "Dubai", address: "Dubai Internet City, Dubai, UAE" },
            { city: "Austin", address: "Congress Avenue, Austin, TX 78701, USA" },
          ].map((office, index) => (
            <Card key={index}>
              <CardContent className="flex items-start pt-6">
                <MapPin className="mr-2 h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">{office.city}</h3>
                  <p className="text-gray-600">{office.address}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <FAQ />

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Business with AI?</h2>
        <p className="text-lg mb-6">
          Book a meeting with Densight AI. Our experts are ready to explore how our tailored AI solutions can address
          your specific challenges and unlock new opportunities for growth.
        </p>
        <div className="flex justify-center">
          <BookMeetingButton />
        </div>
      </div>
    </div>
  )
}

