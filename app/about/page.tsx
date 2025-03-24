import type { Metadata } from "next"
import AboutClientPage from "./client-page"

export const metadata: Metadata = {
  title: "About Densight AI | Our Mission & Team",
  description:
    "Learn about Densight AI's mission to transform businesses with cutting-edge artificial intelligence and data science solutions.",
}

export default function AboutPage() {
  return <AboutClientPage />
}

