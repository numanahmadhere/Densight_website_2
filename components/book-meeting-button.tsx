"use client"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

interface BookMeetingButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
  text?: string
  calendlyLink?: string
}

export const BookMeetingButton = ({
  className = "",
  variant = "default",
  size = "default",
  fullWidth = false,
  text,
  calendlyLink = "https://calendly.com/numan-ahmad/30min",
}: BookMeetingButtonProps) => {
  const { t } = useLanguage()

  const handleClick = () => {
    window.open(calendlyLink, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`${
        fullWidth ? "w-full" : ""
      } inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 
      bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700
      text-white ${className}`}
    >
      {text || t("Schedule Meeting")}
    </Button>
  )
}

