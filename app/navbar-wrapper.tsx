"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import LoadingSpinner from "@/components/loading-spinner"

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
  loading: () => (
    <div className="h-16 w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
})

export default function NavbarWrapper() {
  return (
    <Suspense
      fallback={
        <div className="h-16 w-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <Navbar />
    </Suspense>
  )
}

