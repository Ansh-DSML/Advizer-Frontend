"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { FaqAccordion } from "../../components/faq/faq-accordion"
import { FaqModal } from "../../components/faq/faq-modal"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { popularFaqs, faqData } from "../../components/faq/faq-data"
import Link from "next/link"

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("accordion")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Geometric Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blue-400/20 animate-geometric"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-blue-300 hover:bg-blue-900/20">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            Frequently Asked <span className="font-bold text-blue-300">Questions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Find answers to common questions about Advizer's ad analysis and suggestion platform.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Most Popular FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-blue-300 mb-6">Most Popular Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularFaqs.map((index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-slate-600/50 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 cursor-pointer"
                >
                  <h3 className="font-medium text-lg text-slate-200 mb-2">{faqData[index].question}</h3>
                  <p className="text-slate-400 line-clamp-2">{faqData[index].answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interaction Style Tabs */}
          <div className="mb-8">
            <Tabs defaultValue="accordion" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-slate-700/50 backdrop-blur-sm">
                  <TabsTrigger
                    value="accordion"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Accordion Style
                  </TabsTrigger>
                  <TabsTrigger value="modal" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Modal Style
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="accordion" className="animate-fadeIn">
                <FaqAccordion />
              </TabsContent>

              <TabsContent value="modal" className="animate-fadeIn">
                <FaqModal />
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-medium text-white mb-3">Still have questions?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or concerns you might have about Advizer's
              platform.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes geometric {
          0%, 100% { 
            transform: rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: rotate(180deg) scale(1.2); 
            opacity: 0.6; 
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-geometric {
          animation: geometric 8s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
