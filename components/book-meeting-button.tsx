"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface BookMeetingButtonProps {
  className?: string
}

export function BookMeetingButton({ className }: BookMeetingButtonProps) {
  return (
    <Button
      className={`bg-blue-900 text-white hover:bg-blue-800 font-semibold shadow-sm hover:shadow transition-all duration-300 ease-in-out ${className}`}
      onClick={() => window.open("https://calendly.com/numan-ahmad-densight/30min", "_blank")}
    >
      <Calendar className="mr-2 h-4 w-4" /> Book Meeting
    </Button>
  )
}

