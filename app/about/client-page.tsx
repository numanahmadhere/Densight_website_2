"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutClientPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Ph.D. in Computer Science with 15+ years of experience in AI and machine learning. Previously led AI research teams at Google and Microsoft.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Former VP of Engineering at TechGiant. Expert in scalable AI systems and cloud architecture with 12+ years of industry experience.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Aisha Patel",
      role: "Chief Data Scientist",
      bio: "Pioneering researcher in predictive analytics with publications in top AI conferences. Led data science initiatives at Fortune 500 companies.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product visionary with experience at leading tech companies. Specializes in translating complex AI capabilities into user-friendly solutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-blue-600 dark:bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("About Densight AI")}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            {t("Transforming businesses with cutting-edge artificial intelligence and data science solutions.")}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{t("Our Mission")}</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
              {t(
                "At Densight AI, we're on a mission to democratize artificial intelligence and make it accessible to businesses of all sizes. We believe that AI has the power to transform industries, drive innovation, and solve complex problems.",
              )}
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
              {t(
                "Our team of experts works tirelessly to develop cutting-edge AI solutions that are not only powerful but also practical and easy to implement. We're committed to helping our clients navigate the AI landscape and leverage the full potential of this transformative technology.",
              )}
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t("Get in Touch")}
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t("Our Services")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <OptimizedImage
                src="/placeholder.svg?height=600&width=800"
                alt="Team collaboration"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{t("Our Values")}</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {t("The principles that guide everything we do at Densight AI.")}
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-6 py-8">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{t("Innovation")}</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {t(
                  "We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancements.",
                )}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-6 py-8">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{t("Collaboration")}</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {t(
                  "We work closely with our clients, understanding their unique challenges and co-creating solutions that deliver real value.",
                )}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-6 py-8">
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{t("Impact")}</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {t(
                  "We measure our success by the tangible results we deliver for our clients and the positive change we create in the world.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("Meet Our Leadership Team")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            {t("Experts in AI, data science, and business transformation.")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <OptimizedImage
                  className="h-48 w-48 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-700 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t("Ready to transform your business?")}</span>
            <span className="block text-blue-300">{t("Let's start the conversation today.")}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  {t("Contact Us")}
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-800">
                  {t("Learn More")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

