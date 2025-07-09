"use client"

import { useState } from "react"
import { X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { benefitsData } from './benefits-data'
import { BenefitsCard } from './benefits-card'
import { BenefitsDetails } from './benefits-details'

interface BenefitsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BenefitsModal({ isOpen, onClose }: BenefitsModalProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleCardClick = (roleId: string) => {
    setSelectedRole(roleId)
    setShowDetails(true)
  }

  const handleBackToRoles = () => {
    setShowDetails(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div
          className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-500/20 animate-modalIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h2 className="text-3xl font-light text-white">
              Advizer&apos;s <span className="font-bold text-blue-300">Impact</span> Across the Advertising Industry
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {!showDetails ? (
              <>
                {/* Role Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefitsData.map((role) => (
                    <BenefitsCard key={role.id} role={role} onClick={() => handleCardClick(role.id)} />
                  ))}
                </div>

                {/* Role-based Calculator */}
                <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-medium text-blue-300 mb-4">Role-based Benefit Calculator</h3>
                  <p className="text-slate-300 mb-4">
                    Select your role to see personalized impact metrics and calculate your potential ROI with Advizer.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {benefitsData.map((role) => (
                      <Button
                        key={role.id}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-500"
                        onClick={() => handleCardClick(role.id)}
                      >
                        <span className="mr-2">{role.icon}</span>
                        {role.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Show detailed view for selected role
              <BenefitsDetails role={benefitsData.find((r) => r.id === selectedRole)!} onBack={handleBackToRoles} />
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-gradient-to-r from-blue-900/50 to-slate-800/50 p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">Ready to Transform Your Advertising Strategy?</h3>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-medium shadow-xl shadow-blue-600/20 rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={onClose}
            >
              Start Your Journey
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modalIn {
          animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  )
}
