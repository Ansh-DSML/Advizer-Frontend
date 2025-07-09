"use client"

import { useState } from "react"
import SteelBlueTemplate from "../components/steel-blue-template"
import LoginPage from "../components/login-page"

export default function AdvizeApp() {
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData)
    setShowLogin(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleLoginClick = () => {
    setShowLogin(true)
  }

  return (
    <div className="min-h-screen relative">
      {/* User Info - Only show when logged in */}
      {user && (
        <div className="fixed top-4 right-4 z-50">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg px-4 py-2 border border-gray-200/50">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg px-3 py-2 border border-gray-200/50 hover:bg-red-50 hover:border-red-200 hover:text-red-600 text-gray-600 text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Steel Blue Template - Always visible */}
      <SteelBlueTemplate onLoginClick={handleLoginClick} />

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50">
          <LoginPage onLogin={handleLogin} onClose={() => setShowLogin(false)} />
        </div>
      )}
    </div>
  )
}
