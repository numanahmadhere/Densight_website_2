import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"
import type { Metadata } from "next"

const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const ClientSatisfaction = dynamic(() => import("@/components/client-satisfaction"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const ServicesOverview = dynamic(() => import("@/components/services-overview"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const AnimatedBackground = dynamic(() => import("@/components/animated-background"), {
  loading: () => null,
  ssr: false,
})

const IndustriesOverview = dynamic(() => import("@/components/industries-overview"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const CallToAction = dynamic(() => import("@/components/call-to-action"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const ImplementationProcess = dynamic(
  () => import("@/components/implementation-process").then((mod) => mod.ImplementationProcess),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  },
)

export const metadata: Metadata = {
  title: "Densight AI - Empowering Businesses with AI-Driven Insights",
  description:
    "Densight AI transforms your data into actionable strategies using cutting-edge machine learning and analytics. Explore our AI solutions for various industries.",
  keywords:
    "AI, Machine Learning, Data Analytics, Business Intelligence, Supply Chain Optimization, Predictive Analytics",
}

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <ClientSatisfaction />
        <ServicesOverview />
        <ImplementationProcess />
        <IndustriesOverview />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  )
}

