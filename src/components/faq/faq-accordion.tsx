"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "./faq-data"

interface FaqAccordionProps {
  className?: string
}

export function FaqAccordion({ className = "" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 w-full hover:bg-gray-800/70 hover:border-gray-600/50"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full p-6 text-left transition-colors bg-gray-800/50 hover:bg-gray-700/50"
            >
              <span className="font-semibold text-xl text-white">{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-150 flex-shrink-0 ml-4 text-blue-400 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-150 ease-in-out ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-4 animate-fadeIn">
                <p 
                  className="whitespace-pre-line text-lg leading-relaxed" 
                  style={{ color: "#AAAAAA" }}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
