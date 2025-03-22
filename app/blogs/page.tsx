import type { Metadata } from "next"
import BlogsClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Insights & Blogs | Densight AI",
  description:
    "Explore the latest insights, trends, and thought leadership in AI and data science from Densight AI experts.",
}

export default function Blogs() {
  return <BlogsClientPage />
}

