import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What industries does Densight AI specialize in?",
    answer:
      "Densight AI specializes in a wide range of industries including Retail, Manufacturing, Finance, Supply Chain, Environmental, Automobile, and Hospitality sectors.",
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer:
      "The implementation time varies depending on the complexity of the project. However, our average time-to-value is about 2 weeks from initial consultation to implementation.",
  },
  {
    question: "What kind of ROI can I expect from implementing AI solutions?",
    answer:
      "While results can vary, our clients have seen an average ROI increase of 30% after implementing our AI solutions.",
  },
  {
    question: "How does Densight AI ensure data privacy and security?",
    answer:
      "We adhere to strict data protection protocols and comply with international data privacy regulations. All client data is encrypted and securely stored.",
  },
]

export default function FAQ() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8 dark:text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

