"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { HelpCircle, X, ChevronRight, ChevronDown, Search } from "lucide-react"
import { Input } from "../ui/input"
import { popularFaqs, faqData } from "./faq-data"
import Link from "next/link"

export function FaqSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* FAQ Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <HelpCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Sidebar Content */}
          <div className="w-96 bg-slate-800/95 backdrop-blur-md border-l border-slate-600/50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Quick Help</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 backdrop-blur-sm border-slate-600 text-slate-200 placeholder:text-slate-400 focus:border-blue-400 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-medium text-blue-300 uppercase tracking-wide">Popular Questions</h3>
              {popularFaqs.map((index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:border-blue-500/50 cursor-pointer"
                >
                  <h4 className="font-medium text-sm text-slate-200 mb-2">{faqData[index].question}</h4>
                  <p className="text-xs text-slate-400 line-clamp-3">{faqData[index].answer}</p>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs mt-2">
                    Popular
                  </Badge>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-medium text-blue-300 uppercase tracking-wide">All FAQs</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center w-full p-4 text-left text-slate-200 hover:text-blue-300 transition-colors"
                      >
                        <span className="font-medium text-sm">{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openIndex === index ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-4 pt-0 text-slate-300 text-sm">
                          <p 
                            className="whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-300">
                    <p className="text-sm">No FAQs match your search. Try different keywords or</p>
                    <Button
                      variant="link"
                      className="text-blue-400 hover:text-blue-300 mt-2 text-sm"
                      onClick={() => setSearchQuery("")}
                    >
                      view all FAQs
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/faq">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  View All FAQs
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-white/10">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  )
}
