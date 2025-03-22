import type { Metadata } from "next"
import HomeClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Densight AI - Leading AI Solutions & Data Science Services",
  description:
    "Transform your business with Densight AI's cutting-edge artificial intelligence and data science solutions. Specializing in retail, manufacturing, finance, and more.",
}

export default function Home() {
  return <HomeClientPage />
}

