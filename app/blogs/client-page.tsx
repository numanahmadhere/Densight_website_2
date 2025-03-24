"use client"

import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/loading-spinner"

const BlogsPage = dynamic(() => import("@/components/blogs-page"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function BlogsClientPage() {
  return <BlogsPage />
}

