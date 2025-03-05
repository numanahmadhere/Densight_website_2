"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIDemo() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate AI processing
    setOutput(`AI processed: "${input}"`)
    setInput("")
  }

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>AI Demo: Text Processing</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Enter text to process..." value={input} onChange={(e) => setInput(e.target.value)} />
          <Button type="submit">Process</Button>
        </form>
        {output && (
          <div className="mt-4">
            <h3 className="font-semibold">Output:</h3>
            <p>{output}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

