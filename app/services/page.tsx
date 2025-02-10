import type { Metadata } from "next"
import dynamic from "next/dynamic"

const ServicesPage = dynamic(() => import("@/components/services-page"), { ssr: false })

export const metadata: Metadata = {
  title: "AI-Powered Services | Densight AI",
  description:
    "Explore Densight AI's comprehensive range of AI-driven services designed to transform your business. From advanced analytics to custom AI solutions and expert consultation, we deliver cutting-edge technology with measurable results.",
}

export default function Services() {
  return <ServicesPage />
}

