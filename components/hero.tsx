import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, Lightbulb } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          <span className="block">Empowering Businesses with</span>
          <span className="block text-blue-200">Data-Driven Insights</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
          Densight AI helps retail companies make smarter decisions through advanced data science and machine learning
          solutions.
        </p>
        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
          <div className="rounded-md shadow">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border-blue-100 text-blue-100 bg-transparent hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <BarChart2 className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Data Analytics</h3>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Machine Learning</h3>
          </div>
          <div className="flex flex-col items-center">
            <Lightbulb className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Business Intelligence</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

