import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This is a mock function to simulate fetching project data
function getProject(slug: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    title: "Predictive Inventory Management",
    description: "Developed an AI-driven system to optimize inventory levels for a major retail chain.",
    tags: ["Machine Learning", "Predictive Analytics", "Inventory Management"],
    content: `
      <h2>Project Overview</h2>
      <p>For this project, we partnered with a major retail chain to develop an AI-driven system that optimizes inventory levels across their stores. The goal was to reduce stockouts while minimizing excess inventory.</p>

      <h2>The Challenge</h2>
      <p>The client was facing significant challenges with inventory management:</p>
      <ul>
        <li>Frequent stockouts leading to lost sales</li>
        <li>Excess inventory tying up capital and warehouse space</li>
        <li>Inefficient manual processes for inventory forecasting</li>
      </ul>

      <h2>Our Solution</h2>
      <p>We developed a machine learning model that predicts future demand for each product in each store. The model takes into account various factors, including:</p>
      <ul>
        <li>Historical sales data</li>
        <li>Seasonal trends</li>
        <li>Local events and holidays</li>
        <li>Weather forecasts</li>
        <li>Marketing campaigns</li>
      </ul>

      <p>Based on these predictions, the system recommends optimal inventory levels and reorder points for each product.</p>

      <h2>The Results</h2>
      <p>After implementing our solution, the client saw significant improvements:</p>
      <ul>
        <li>30% reduction in stockouts</li>
        <li>20% decrease in excess inventory</li>
        <li>15% increase in inventory turnover</li>
        <li>10% improvement in gross margin</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li>Python for data processing and model development</li>
        <li>TensorFlow for deep learning models</li>
        <li>Apache Spark for big data processing</li>
        <li>AWS for cloud infrastructure</li>
      </ul>

      <p>This project demonstrates the power of AI and machine learning in solving complex business problems and driving significant improvements in operational efficiency.</p>
    `,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
          <p className="text-gray-500 mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

