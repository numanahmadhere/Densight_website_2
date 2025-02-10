import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://densight.io"

  // Main pages
  const mainPages = ["", "about", "services", "projects", "capabilities", "insights", "contact"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Industry pages
  const industryPages = [
    "environmental",
    "retail",
    "automobile",
    "hospitality",
    "supply-chain",
    "manufacturing",
    "finance",
  ].map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Project pages
  const projectPages = [
    "auto-quality-control",
    "predictive-maintenance",
    "hotel-personalization",
    "carbon-footprint-reduction",
  ].map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Blog/Insight pages
  const blogPages = [
    "ai-driven-personalization",
    "big-data-supply-chain",
    "predictive-analytics-case-study",
    "future-of-ai-2024",
    "generative-ai-business-operations",
  ].map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Legal pages
  const legalPages = ["privacy-policy", "terms-of-service"].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  return [...mainPages, ...industryPages, ...projectPages, ...blogPages, ...legalPages]
}

