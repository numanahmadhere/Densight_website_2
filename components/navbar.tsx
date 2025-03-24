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
  Brain,
  PieChart,
  Users,
  Globe,
} from "lucide-react"
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
        icon: PieChart,
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
        description: "Harness the power of AI to transform your business",
      },
      {
        href: "/services/intelligent-bi",
        label: "Intelligent BI",
        icon: PieChart,
        description: "Turn data into actionable insights for informed decision-making",
      },
      {
        href: "/services/ai-implementation-consultation",
        label: "AI Implementation Consultation",
        icon: Users,
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
        description: "AI-driven solutions for environmental challenges",
      },
      {
        href: "/industries/retail",
        label: "Retail",
        icon: ShoppingCart,
        description: "Revolutionize retail with AI-powered insights",
      },
      {
        href: "/industries/automobile",
        label: "Automobile",
        icon: Zap,
        description: "Driving innovation in the automotive industry",
      },
      {
        href: "/industries/hospitality",
        label: "Hospitality",
        icon: Hotel,
        description: "Enhance guest satisfaction with AI solutions",
      },
      {
        href: "/industries/supply-chain",
        label: "Supply Chain",
        icon: Truck,
        description: "Streamline operations with AI-driven logistics",
      },
      {
        href: "/industries/manufacturing",
        label: "Manufacturing",
        icon: Cog,
        description: "Boost efficiency with AI in manufacturing",
      },
      {
        href: "/industries/finance",
        label: "Finance",
        icon: Building,
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

  const handleItemClick = (href: string) => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
    window.location.href = href // Use window.location for hard navigation
  }

  return (
    <nav
      aria-label="Main Navigation"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group" aria-label="Densight AI Home">
              <div className="relative overflow-hidden rounded-full bg-blue-50 dark:bg-blue-900/20 p-1 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
                  alt="Densight AI Logo"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="ml-2.5 text-base font-semibold text-primary hidden sm:inline-block capitalize group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
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
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1.5 rounded-md text-sm font-medium flex items-center capitalize transition-colors duration-200"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
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
                          className="absolute left-0 mt-1 w-screen max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
                        >
                          <div className="relative">
                            {/* Decorative gradient top border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                            <div className="p-4">
                              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {t(item.label)}
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {item.dropdown.map((dropdownItem, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                  >
                                    <div
                                      className="group rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 p-3 cursor-pointer"
                                      onClick={() => handleItemClick(dropdownItem.href)}
                                    >
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0 mr-3">
                                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                            <dropdownItem.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            {t(dropdownItem.label)}
                                          </h4>
                                          <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                                            {dropdownItem.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
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
                    className={`px-2 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 capitalize ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {/* Language Selector - Smaller */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md px-1.5 py-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Globe className="h-3 w-3 text-gray-600 dark:text-gray-400 mr-1" />
              <LanguageSelector className="text-xs capitalize font-medium text-gray-700 dark:text-gray-300 bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer w-10 p-0" />
            </div>

            {/* Book Meeting Button - One liner with dark blue, no calendar icon */}
            <button
              onClick={() => window.open("https://calendly.com/numan-ahmad/30min", "_blank", "noopener,noreferrer")}
              className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-all duration-200 
                bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700
                text-white px-3 py-1 h-7 whitespace-nowrap shadow-sm"
            >
              Book Meeting
            </button>

            <ModeToggle />
          </div>

          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="px-4 pt-3 pb-4 space-y-2 sm:px-4 bg-background shadow-lg rounded-b-lg border border-gray-200 dark:border-gray-700">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <button
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center transition-colors duration-200 capitalize"
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
                          className="pl-4 space-y-2 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                              <div
                                className="block px-4 py-3 rounded-md text-sm transition-colors duration-200 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700"
                                onClick={() => handleItemClick(dropdownItem.href)}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full">
                                    <dropdownItem.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900 dark:text-gray-100">
                                      {t(dropdownItem.label)}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
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
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 capitalize ${
                      pathname === item.href ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </Link>
                ),
              )}
              <div className="mt-4 px-3 space-y-3">
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2">
                  <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                  <LanguageSelector className="text-sm capitalize font-medium text-gray-700 dark:text-gray-300 bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer w-full p-0" />
                </div>
                <button
                  onClick={() => window.open("https://calendly.com/numan-ahmad/30min", "_blank", "noopener,noreferrer")}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 
                    bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700
                    text-white px-4 py-2 w-full"
                >
                  Book Meeting
                </button>
                <div className="flex justify-center">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

