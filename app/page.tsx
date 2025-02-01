import Hero from "@/components/hero"
import InteractiveDashboard from "@/components/interactive-dashboard"
import Testimonials from "@/components/testimonials"
import PastProjects from "@/components/past-projects"
import BlogPreviews from "@/components/blog-previews"

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <InteractiveDashboard />
      <Testimonials />
      <PastProjects />
      <BlogPreviews />
    </div>
  )
}

