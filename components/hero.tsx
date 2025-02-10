import { Suspense } from "react"
import dynamic from "next/dynamic"
import LoadingSpinner from "./loading-spinner"

const DynamicHeroContent = dynamic(() => import("@/components/hero-content"), {
  suspense: true,
  loading: () => <LoadingSpinner />,
})

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 sm:py-12 md:py-16 lg:py-20 min-h-[300px] sm:min-h-[400px]">
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicHeroContent />
      </Suspense>
    </section>
  )
}

export default Hero

