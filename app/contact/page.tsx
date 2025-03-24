import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us | Densight AI",
  description:
    "Get in touch with Densight AI for AI and data science solutions. We're here to help your business leverage the power of artificial intelligence.",
}

export default function ContactPage() {
  return <ContactClientPage />
}

