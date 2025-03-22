import type { Metadata } from "next"
import IndustriesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Industries | Densight AI",
  description:
    "Explore how Densight AI's solutions are transforming various industries through advanced analytics and AI.",
}

export default function Industries() {
  return <IndustriesClientPage />
}

