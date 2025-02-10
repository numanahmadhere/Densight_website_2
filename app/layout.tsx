import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import dynamic from "next/dynamic"
import type React from "react"
import Analytics from "@/components/analytics"
import { preloadFont } from "@/utils/font-preload"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.densightai.com"),
  title: {
    default: "Densight AI - Leading AI Solutions & Data Science Services",
    template: "%s | Densight AI",
  },
  description:
    "Transform your business with Densight AI's cutting-edge artificial intelligence and data science solutions. Specializing in retail, manufacturing, finance, and more.",
  keywords: [
    "AI Solutions",
    "Data Science",
    "Machine Learning",
    "Business Intelligence",
    "Predictive Analytics",
    "AI Consulting",
    "Digital Transformation",
    "Enterprise AI",
    "Data Analytics",
    "Business Analytics",
  ],
  authors: [{ name: "Densight AI" }],
  creator: "Densight AI",
  publisher: "Densight AI",
  alternates: {
    canonical: "https://www.densightai.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.densightai.com/",
    siteName: "Densight AI",
    title: "Densight AI - Leading AI Solutions & Data Science Services",
    description:
      "Transform your business with Densight AI's cutting-edge artificial intelligence and data science solutions. Specializing in retail, manufacturing, finance, and more.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp",
        width: 112,
        height: 112,
        alt: "Densight AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Densight AI - Leading AI Solutions & Data Science Services",
    description:
      "Transform your business with Densight AI's cutting-edge artificial intelligence and data science solutions.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp",
    ],
    creator: "@densightai",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
}

// Enhanced Schema.org markup for rich snippets and AI identification
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.densightai.com/#organization",
  name: "Densight AI",
  url: "https://www.densightai.com",
  logo: {
    "@type": "ImageObject",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp",
    width: 112,
    height: 112,
  },
  description:
    "Densight AI provides cutting-edge artificial intelligence and data science solutions to transform businesses across various industries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dubai Internet City",
    addressLocality: "Dubai",
    addressCountry: "UAE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-56-446-8736",
    contactType: "sales",
    email: "contact@densight.io",
  },
  sameAs: [
    "https://www.linkedin.com/company/densight/",
    "https://twitter.com/densightai",
    "https://www.facebook.com/densightAI",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Business Intelligence",
    "Predictive Analytics",
    "Natural Language Processing",
    "Computer Vision",
  ],
  offers: {
    "@type": "Offer",
    itemOffered: [
      {
        "@type": "Service",
        name: "Advanced Data Analytics",
        description: "Transform raw data into actionable insights for informed decision-making.",
      },
      {
        "@type": "Service",
        name: "AI & Machine Learning Solutions",
        description: "Leverage cutting-edge AI to automate processes and gain competitive advantages.",
      },
      {
        "@type": "Service",
        name: "Intelligent Business Intelligence",
        description: "Visualize complex data for better strategic planning and execution.",
      },
      {
        "@type": "Service",
        name: "AI Consultation Services",
        description: "Expert guidance to help navigate the AI landscape and implement tailored solutions.",
      },
    ],
  },
}

const trendSpotterJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trend Spotter AI",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "USD",
  },
  description: "Advanced AI-powered market trend analysis tool for identifying and capitalizing on emerging trends.",
  operatingSystem: "Web-based",
  author: {
    "@type": "Organization",
    name: "Densight AI",
    url: "https://www.densightai.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Preload the Inter font
  preloadFont("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap")

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.densightai.com" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
          sizes="any"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          as="style"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

