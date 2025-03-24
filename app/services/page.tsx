import type { Metadata } from "next"
import ServicesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AI-Powered Services | Densight AI",
  description:
    "Explore Densight AI's comprehensive range of AI-driven services designed to transform your business. From advanced analytics to custom AI solutions and expert consultation, we deliver cutting-edge technology with measurable results.",
}

export default function Services() {
  return <ServicesClientPage />
}

