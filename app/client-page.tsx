"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import HomeProjectsDashboard from "@/components/home-projects-dashboard"
import ClientSatisfaction from "@/components/client-satisfaction"
import OurImpact from "@/components/our-impact"
import CallToAction from "@/components/call-to-action"

export default function HomeClientPage() {
  useEffect(() => {
    // Any client-side effects can go here
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <ServicesOverview />

        {/* Growth and Projects Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Growth & Impact
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                Densight AI has delivered exceptional results across industries
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">127+</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Projects Completed</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">94%</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Client Retention</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">43%</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">YoY Growth</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">17</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Industries Served</p>
              </div>
            </div>

            {/* Project Dashboard */}
            <HomeProjectsDashboard />
          </div>
        </section>

        <OurImpact />
        <ClientSatisfaction />
        <CallToAction />
      </div>
    </main>
  )
}

