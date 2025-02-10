import dynamic from "next/dynamic"

const BlogsPage = dynamic(() => import("@/components/blogs-page"), { ssr: false })

export default function Blogs() {
  return <BlogsPage />
}

