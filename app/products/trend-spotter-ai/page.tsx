import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookMeetingButton } from "@/components/book-meeting-button"
import TrendSpotterDashboard from "@/components/trend-spotter-dashboard"

export const metadata: Metadata = {
  title: "Trend Spotter AI | Advanced Market Trend Analysis Tool | Densight AI",
  description:
    "Discover and capitalize on emerging market trends with Trend Spotter AI. Our advanced AI-powered tool analyzes multiple data sources to predict and visualize upcoming trends in real-time.",
  keywords: [
    "Trend Spotter",
    "Market Trend Analysis",
    "AI-Powered Trend Detection",
    "Real-time Trend Forecasting",
    "Data-driven Market Insights",
    "Predictive Analytics",
    "Business Intelligence",
    "Densight AI",
  ],
  openGraph: {
    title: "Trend Spotter AI | Advanced Market Trend Analysis Tool",
    description:
      "Discover and capitalize on emerging market trends with Trend Spotter AI. Our advanced AI-powered tool analyzes multiple data sources to predict and visualize upcoming trends in real-time.",
    url: "https://www.densightai.com/products/trend-spotter-ai",
    type: "website",
    images: [
      {
        url: "https://www.densightai.com/images/trend-spotter-ai-og.jpg",
        width: 1200,
        height: 630,
        alt: "Trend Spotter AI Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trend Spotter AI | Advanced Market Trend Analysis Tool",
    description:
      "Discover and capitalize on emerging market trends with Trend Spotter AI. Our advanced AI-powered tool analyzes multiple data sources to predict and visualize upcoming trends in real-time.",
    images: ["https://www.densightai.com/images/trend-spotter-ai-og.jpg"],
  },
}

export default function TrendSpotterAIPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">
        Trend Spotter AI: Revolutionizing Market Trend Analysis
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What is Trend Spotter AI?</h2>
        <p className="text-lg mb-4">
          Trend Spotter AI is a cutting-edge, AI-powered market trend analysis tool designed to help businesses stay
          ahead of the curve. By leveraging advanced machine learning algorithms and real-time data analysis, Trend
          Spotter AI identifies emerging trends, predicts market shifts, and provides actionable insights to drive your
          business strategy.
        </p>
      </section>

      <TrendSpotterDashboard />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Key Features of Trend Spotter AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Trend Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Identify emerging trends as they happen with our advanced AI algorithms, processing data from multiple
                sources including social media, news outlets, and industry reports.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Forecast future trends with high accuracy using historical and real-time data, allowing you to make
                proactive business decisions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customizable Dashboards</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tailor your trend analysis dashboard to focus on the metrics and industries that matter most to your
                business.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Integration Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Seamlessly integrate Trend Spotter AI with your existing business intelligence tools and data sources
                for a comprehensive market view.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Trend Spotter AI?</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Unrivaled accuracy in trend prediction</li>
          <li>Real-time data analysis from multiple sources</li>
          <li>Customizable dashboards and reports</li>
          <li>Integration with existing business intelligence tools</li>
          <li>Expert support from our team of data scientists and market analysts</li>
          <li>Continuous learning and improvement of AI models</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Industries Benefiting from Trend Spotter AI</h2>
        <p className="text-lg mb-4">
          Trend Spotter AI is versatile and can be applied to various industries, including but not limited to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Retail and E-commerce</li>
          <li>Fashion and Apparel</li>
          <li>Technology and Consumer Electronics</li>
          <li>Financial Services</li>
          <li>Healthcare and Pharmaceuticals</li>
          <li>Food and Beverage</li>
          <li>Travel and Hospitality</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Get Started with Trend Spotter AI</h2>
        <p className="text-lg mb-6">
          Ready to revolutionize your market strategy? Discover how Trend Spotter AI can help your business identify and
          capitalize on emerging trends. Join industry leaders who trust our AI-powered insights.
        </p>
        <div className="flex justify-center space-x-4">
          <BookMeetingButton />
          <Link href="/contact">
            <Button variant="outline">Contact Sales</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

