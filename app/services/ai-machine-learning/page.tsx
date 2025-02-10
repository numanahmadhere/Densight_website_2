import type { Metadata } from "next"
import AIMachineLearningService from "@/components/services/ai-machine-learning"

export const metadata: Metadata = {
  title: "AI & Machine Learning | Densight AI",
  description:
    "Leverage cutting-edge AI and Machine Learning solutions to automate and optimize your processes with Densight AI.",
}

export default function AIMachineLearningPage() {
  return <AIMachineLearningService />
}

