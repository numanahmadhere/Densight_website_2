"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Menu,
  X,
  ChevronDown,
  Leaf,
  ShoppingCart,
  Zap,
  Hotel,
  Truck,
  Cog,
  Building,
  TrendingUp,
  Brain,
  PieChart,
  Users,
} from "lucide-react"
import { BookMeetingButton } from "./book-meeting-button"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import OptimizedImage from "@/components/optimized-image"
import { LanguageSelector } from "./LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"

const navItems = [
  { href: "/about", label: "About" },
  {
    href: "#",
    label: "Products",
    dropdown: [
      {
        href: "/products/trend-spotter-ai",
        label: "Trend Spotter AI",
        icon: TrendingUp,
        header: "Market Trend Analysis",
        description: "Predict market trends with AI-powered insights",
      },
      // More products can be added here
    ],
  },
  {
    href: "#",
    label: "Services",
    dropdown: [
      {
        href: "/services/ai-machine-learning",
        label: "AI & Machine Learning",
        icon: Brain,
        header: "Intelligent Solutions",
        description: "Harness the power of AI to transform your business",
      },
      {
        href: "/services/intelligent-bi",
        label: "Intelligent BI",
        icon: PieChart,
        header: "Smart Business Insights",
        description: "Turn data into actionable insights for informed decision-making",
      },
      {
        href: "/services/ai-implementation-consultation",
        label: "AI Implementation Consultation",
        icon: Users,
        header: "Expert AI Guidance",
        description: "Navigate the AI landscape with our expert implementation consultation",
      },
    ],
  },
  {
    href: "#",
    label: "Industries",
    dropdown: [
      {
        href: "/industries/environmental",
        label: "Environmental",
        icon: Leaf,
        header: "Sustainable Solutions",
        description: "AI-driven solutions for environmental challenges",
      },
      {
        href: "/industries/retail",
        label: "Retail",
        icon: ShoppingCart,
        header: "Smart Retail",
        description: "Revolutionize retail with AI-powered insights",
      },
      {
        href: "/industries/automobile",
        label: "Automobile",
        icon: Zap,
        header: "Future Mobility",
        description: "Driving innovation in the automotive industry",
      },
      {
        href: "/industries/hospitality",
        label: "Hospitality",
        icon: Hotel,
        header: "Guest Experience",
        description: "Enhance guest satisfaction with AI solutions",
      },
      {
        href: "/industries/supply-chain",
        label: "Supply Chain",
        icon: Truck,
        header: "Logistics Optimization",
        description: "Streamline operations with AI-driven logistics",
      },
      {
        href: "/industries/manufacturing",
        label: "Manufacturing",
        icon: Cog,
        header: "Smart Manufacturing",
        description: "Boost efficiency with AI in manufacturing",
      },
      {
        href: "/industries/finance",
        label: "Finance",
        icon: Building,
        header: "Financial Intelligence",
        description: "Leverage AI for smarter financial decisions",
      },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main Navigation"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Densight AI Home">
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
                alt="Densight AI Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-9 sm:h-9"
                priority
              />
              <span className="ml-2 text-base font-semibold text-primary hidden sm:inline-block capitalize">
                Densight AI
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1 ml-4">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative group" ref={dropdownRef}>
                    <button
                      className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium flex items-center capitalize"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {t(item.label)}
                      <ChevronDown
                        className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        >
                          <div className="p-4">
                            <div
                              className={`grid ${item.label === "Industries" ? "grid-cols-2" : "grid-cols-1"} gap-4`}
                            >
                              {item.dropdown.map((dropdownItem, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                  <Link href={dropdownItem.href} className="block">
                                    <div className="group rounded-md hover:bg-gray-50 transition-colors duration-200 p-3">
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                          <dropdownItem.icon className="h-6 w-6 text-blue-500 group-hover:text-blue-600" />
                                        </div>
                                        <div className="ml-4">
                                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                            {t(dropdownItem.label)}
                                          </p>
                                          <p className="text-xs text-gray-500 group-hover:text-blue-500">
                                            {t(dropdownItem.header)}
                                          </p>
                                        </div>
                                      </div>
                                      <p className="mt-2 text-xs text-gray-500 group-hover:text-gray-600">
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 capitalize ${
                      pathname === item.href ? "text-blue-600 bg-blue-50" : ""
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSelector className="w-20 bg-gray-100 rounded-md text-xs capitalize" />
            <BookMeetingButton className="text-xs px-2 py-1 capitalize" />
            <ModeToggle />
          </div>
          <div className="flex md:hidden items-center">
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-1">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg rounded-b-lg">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <button
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center transition-colors duration-200 capitalize"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {t(item.label)}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                <div className="flex items-center space-x-3">
                                  <dropdownItem.icon className="h-5 w-5 text-blue-500" />
                                  <div>
                                    <p className="font-medium capitalize">{t(dropdownItem.label)}</p>
                                    <p className="text-xs text-gray-500 capitalize">{t(dropdownItem.header)}</p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 capitalize ${
                      pathname === item.href ? "text-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </Link>
                ),
              )}
              <div className="mt-4 px-3 space-y-2">
                <LanguageSelector className="w-full bg-gray-100 rounded-md capitalize" />
                <BookMeetingButton className="w-full capitalize" />
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

