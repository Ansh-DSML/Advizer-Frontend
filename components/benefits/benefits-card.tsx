"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import type { BenefitRole } from "./benefits-data"

interface BenefitsCardProps {
  role: BenefitRole
  onClick: () => void
}

export function BenefitsCard({ role, onClick }: BenefitsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-500 cursor-pointer group ${
        isHovered ? "transform scale-[1.02] shadow-xl shadow-blue-900/30 border-blue-500/50" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="text-4xl mr-3">{role.icon}</div>
            <h3 className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">{role.title}</h3>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-slate-400 group-hover:text-blue-300 transition-all duration-300 ${
              isHovered ? "transform translate-x-1" : ""
            }`}
          />
        </div>

        <div className="space-y-3 mb-6">
          {role.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
              <p className="text-slate-300">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="h-20 flex items-center justify-center bg-white/5 rounded-lg p-2">{role.visualComponent}</div>

        <div
          className={`mt-4 text-sm text-blue-400 flex items-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        >
          <span>View {role.interactivityLabel}</span>
          <ChevronRight className="ml-1 w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
