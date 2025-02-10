import type { Metadata } from "next"
import AIConsultationService from "@/components/services/ai-consultation"

export const metadata: Metadata = {
  title: "AI Consultation Services | Densight AI",
  description:
    "Get expert guidance on AI strategy, technology assessment, and implementation roadmap with Densight AI's consultation services.",
}

export default function AIConsultationPage() {
  return <AIConsultationService />
}

