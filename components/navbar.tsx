"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown, Leaf, ShoppingCart, Zap, Hotel, Truck, Cog, Building, TrendingUp } from "lucide-react"
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
      },
      // More products can be added here
    ],
  },
  { href: "/services", label: "Services" },
  {
    href: "#",
    label: "Industries",
    dropdown: [
      { href: "/industries/environmental", label: "Environmental", icon: Leaf, header: "Sustainable Solutions" },
      { href: "/industries/retail", label: "Retail", icon: ShoppingCart, header: "Smart Retail" },
      { href: "/industries/automobile", label: "Automobile", icon: Zap, header: "Future Mobility" },
      { href: "/industries/hospitality", label: "Hospitality", icon: Hotel, header: "Guest Experience" },
      { href: "/industries/supply-chain", label: "Supply Chain", icon: Truck, header: "Logistics Optimization" },
      { href: "/industries/manufacturing", label: "Manufacturing", icon: Cog, header: "Smart Manufacturing" },
      { href: "/industries/finance", label: "Finance", icon: Building, header: "Financial Intelligence" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
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
      className={`sticky top-0 z-50 transition-colors duration-300 w-full ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center h-16 relative">
          <div className="absolute left-4 flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Densight AI Home">
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
                alt="Densight AI Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
                priority
              />
              <span className="ml-2 text-lg font-semibold text-primary">Densight AI</span>
            </Link>
          </div>
          <div className="hidden md:flex justify-center space-x-1">
            <div className="flex items-baseline space-x-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative group" ref={dropdownRef}>
                    <button
                      className="text-gray-500 hover:text-primary px-2 py-1 rounded-md text-sm font-medium flex items-center"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {t(item.label.toLowerCase())}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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
                          className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                <div className="flex items-center">
                                  <dropdownItem.icon className="mr-2 h-5 w-5 text-gray-500" />
                                  <div>
                                    <p className="font-medium">{t(dropdownItem.label.toLowerCase())}</p>
                                    <p className="text-xs text-gray-500">{t(dropdownItem.header.toLowerCase())}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-500 hover:text-blue-800 px-2 py-1 rounded-md text-sm font-medium ${
                      pathname === item.href ? "text-blue-800 bg-blue-100" : ""
                    }`}
                  >
                    {t(item.label.toLowerCase())}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="absolute right-4 hidden md:flex items-center space-x-2">
            <LanguageSelector className="w-[90px] bg-gray-100 rounded-md" />
            <BookMeetingButton />
            <ModeToggle />
          </div>
          <div className="absolute right-4 flex md:hidden items-center space-x-2">
            <LanguageSelector className="w-[90px] bg-gray-100 rounded-md" />
            <ModeToggle />
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-2">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-2">
                    <button
                      className="text-gray-500 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {t(item.label.toLowerCase())}
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
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-gray-500 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                              onClick={() => {
                                setActiveDropdown(null)
                                setIsMobileMenuOpen(false)
                              }}
                            >
                              <div className="flex items-center space-x-2">
                                <dropdownItem.icon className="h-5 w-5 text-gray-500" />
                                <div>
                                  <p>{t(dropdownItem.label.toLowerCase())}</p>
                                  <p className="text-xs text-gray-500">{t(dropdownItem.header.toLowerCase())}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-500 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href ? "text-blue-800 bg-blue-100" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label.toLowerCase())}
                  </Link>
                ),
              )}
              <div className="mt-4 px-3">
                <BookMeetingButton className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

