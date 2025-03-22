import type { Metadata } from "next"
import ContactClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Contact Densight AI | Get in Touch with Our Team",
  description:
    "Have questions about our AI solutions? Contact Densight AI today to discuss how we can help transform your business with cutting-edge technology.",
}

export default function ContactPage() {
  return <ContactClientPage />
}

