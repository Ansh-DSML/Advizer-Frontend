"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Eye, EyeOff, Shield, Chrome, Building2, X } from "lucide-react"

interface LoginPageProps {
  onLogin: (user: { name: string; email: string }) => void
  onClose?: () => void
}

export default function LoginPage({ onLogin, onClose }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showTwoFA, setShowTwoFA] = useState(false)
  const [twoFACode, setTwoFACode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false)
      setShowTwoFA(true)
    }, 1000)
  }

  const handleTwoFASubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate 2FA verification
    setTimeout(() => {
      setIsLoading(false)
      onLogin({ name: "John Doe", email: username })
    }, 1000)
  }

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true)
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false)
      onLogin({ name: "John Doe", email: `user@${provider}.com` })
    }, 1500)
  }

  const resendTwoFACode = () => {
    // Simulate resend code
    console.log("2FA code resent")
  }

  if (showTwoFA) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700/50 transition-colors z-10"
            aria-label="Close login"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative z-10">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Advize</h1>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">Two-Factor Authentication</h2>
            <p className="text-gray-600 text-sm mt-2">
              We've sent a verification code to your email. Please enter it below to complete your login.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleTwoFASubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="twofa-code" className="text-gray-700 font-medium">
                  Verification Code
                </Label>
                <Input
                  id="twofa-code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value)}
                  className="text-center text-lg tracking-widest font-mono"
                  maxLength={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading || twoFACode.length !== 6}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  "Verify & Login"
                )}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={resendTwoFACode}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
                >
                  Didn't receive the code? Resend
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700/50 transition-colors z-10"
          aria-label="Close login"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative z-10">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">A</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Advize</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Login</h2>
          <p className="text-gray-600 text-sm">Welcome back to your creative analytics platform</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Username or Email
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
                >
                  Forgot your password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                "Login"
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("google")}
                className="border-gray-300 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <Chrome className="w-4 h-4 mr-2 text-red-500" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("sso")}
                className="border-gray-300 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                SSO
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-600 text-sm">Don't have an account? </span>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
