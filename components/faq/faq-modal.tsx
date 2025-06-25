"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { faqData } from "./faq-data"
import { ChevronRight } from "lucide-react"

export function FaqModal() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-4">
        {faqData.map((faq, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="bg-white/10 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 h-auto text-left justify-between hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300"
                onClick={() => setSelectedFaq(index)}
              >
                <span className="text-white text-lg font-medium">{faq.question}</span>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-medium text-left">{faq.question}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
