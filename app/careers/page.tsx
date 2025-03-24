import type { Metadata } from "next"
import CareersClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Careers | Densight AI",
  description: "Join the Densight AI team and be part of shaping the future of AI and data science solutions.",
}

export default function Careers() {
  return <CareersClientPage />
}

