"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Briefcase, Code, BarChartIcon as ChartBar } from "lucide-react"

const jobs = [
  {
    title: "Data Scientist",
    description:
      "We are looking for a talented Data Scientist to join our team and help solve complex business problems using advanced analytics and machine learning techniques.",
    icon: ChartBar,
  },
  {
    title: "Machine Learning Engineer",
    description:
      "We are seeking a skilled Machine Learning Engineer to develop and deploy cutting-edge AI models that drive business value for our clients.",
    icon: Code,
  },
  {
    title: "Business Intelligence Analyst",
    description:
      "We are hiring a Business Intelligence Analyst to help our clients make data-driven decisions through insightful dashboards and reports.",
    icon: Briefcase,
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Join Our Team</h1>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="flex items-center mb-4 md:mb-0">
                <job.icon className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="mt-1">{job.description}</CardDescription>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setSelectedJob(job)}>
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
                    <DialogDescription>Fill out the form below to apply for this position.</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="resume">Resume</Label>
                      <Input id="resume" type="file" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cover-letter">Cover Letter</Label>
                      <Textarea id="cover-letter" placeholder="Why do you want to join our team?" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Application
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

