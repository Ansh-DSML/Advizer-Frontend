"use client"

import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BenefitRole } from './benefits-data'

interface BenefitsDetailsProps {
  role: BenefitRole
  onBack: () => void
}

export function BenefitsDetails({ role, onBack }: BenefitsDetailsProps) {
  return (
    <div className="animate-fadeIn">
      <Button
        variant="ghost"
        className="mb-6 text-slate-300 hover:text-blue-300 hover:bg-slate-800/50 -ml-2"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to all roles
      </Button>

      <div className="flex items-center mb-6">
        <div className="text-5xl mr-4">{role.icon}</div>
        <h2 className="text-3xl font-medium text-white">{role.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-medium text-blue-300 mb-4">Key Benefits</h3>
            <div className="space-y-4">
              {role.detailedBenefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-2.5"></div>
                  <div>
                    <p className="text-white font-medium">{benefit.title}</p>
                    <p className="text-slate-300 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-medium text-blue-300 mb-4">{role.caseStudyTitle}</h3>
            <p className="text-slate-300 mb-4">{role.caseStudyDescription}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-500"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Case Study
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-500"
              >
                <Share2 className="mr-2 w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-medium text-blue-300 mb-4">Impact Metrics</h3>
            <div className="space-y-4">
              {role.metrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-300">{metric.label}</span>
                  <span className="text-white font-medium text-lg">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-medium text-blue-300 mb-4">ROI Calculator</h3>
            <p className="text-slate-300 mb-4">
              Input your current metrics to see how Advizer can improve your results.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Calculate Your ROI</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
