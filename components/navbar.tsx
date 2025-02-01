import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Densight AI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Careers
              </Link>
              <Link href="/blogs" className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Blogs
              </Link>
              <Link
                href="/projects"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Past Projects
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Case Studies
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/contact">
              <Button variant="outline" className="mr-2">
                Contact Us
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

