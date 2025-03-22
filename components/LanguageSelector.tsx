"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Globe } from "lucide-react"

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "ar" | "fr" | "es")}>
      <SelectTrigger
        className={`bg-transparent border-none focus:ring-0 hover:bg-gray-200 transition-colors duration-200 ${className}`}
      >
        <Globe className="mr-2 h-4 w-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </SelectTrigger>
      <SelectContent className="min-w-[90px] bg-white shadow-md rounded-md border border-gray-200">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="es">Español</SelectItem>
      </SelectContent>
    </Select>
  )
}

