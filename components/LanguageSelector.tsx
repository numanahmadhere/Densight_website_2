"use client"

import type React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

interface LanguageSelectorProps {
  className?: string
}

export const LanguageSelector = ({ className = "" }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <select className={`${className} opacity-0`} aria-hidden="true">
        <option>EN</option>
      </select>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "fr" | "es" | "de" | "zh")
  }

  return (
    <div className="relative flex items-center">
      <select
        value={language}
        onChange={handleChange}
        className={`${className} appearance-none focus:outline-none pr-4`}
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="de">DE</option>
        <option value="zh">中</option>
      </select>
      <ChevronDown className="absolute right-0 h-2.5 w-2.5 text-gray-500 dark:text-gray-400 pointer-events-none" />
    </div>
  )
}

