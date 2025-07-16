"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ArrowRight, Play, Users, Tag, BarChart3, Monitor, Layers, Brain, TrendingUp } from "lucide-react"
import { FaqAccordion } from "./faq/faq-accordion"
import SeeItInActionMobile from "./see-it-in-action-mobile"
import { useSupportedDeviceSize, useSeeItInActionLaptopSize } from "./ui/use-mobile"


interface SteelBlueTemplateProps {
  onLoginClick?: () => void
}

export default function SteelBlueTemplate({ onLoginClick }: SteelBlueTemplateProps) {
  const [typewriterText, setTypewriterText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const lastScrollY = useRef(0)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const verticalLineRef = useRef(null)
  const [verticalLineGlowed, setVerticalLineGlowed] = useState(false)
  const horizontalLineRef = useRef(null)
  const [horizontalLineGlowed, setHorizontalLineGlowed] = useState(false)
  const verticalLine2Ref = useRef(null)
  const [verticalLine2Glowed, setVerticalLine2Glowed] = useState(false)
  const verticalLine3Ref = useRef(null)
  const [verticalLine3Glowed, setVerticalLine3Glowed] = useState(false)
  const horizontalLine3Ref = useRef(null)
  const [horizontalLine3Glowed, setHorizontalLine3Glowed] = useState(false)
  const verticalLine4Ref = useRef(null)
  const [verticalLine4Glowed, setVerticalLine4Glowed] = useState(false)
  const device = useSupportedDeviceSize()
  const isSeeItInActionLaptop = useSeeItInActionLaptopSize(); 



  const clientLogos = [
    "Metro Shoes",
    "Mochi Shoes",
    "Armaf India",
    "NueGo Bus",
    "GRT Jewellers",
    "Simpolo"
  ]

  const features = [
    {
      icon: Tag,
      title: "Tagging Pipeline",
      description: "50 + visual and messaging taxonomies auto-tag every image, video and carousel within hours.",
    },
    {
      icon: BarChart3,
      title: "Creative Analytics",
      description: " Slice results by objective, timeline or demographic to surface performance drivers.",
    },
    {
      icon: Monitor,
      title: "Media Dashboard",
      description: " Track spend & KPIs across campaigns, ad sets and ads with platform, region, age, device and gender breakdowns.",
    },
    {
      icon: Layers,
      title: "Creative Mix Analysis",
      description: " Identify winning formats for each objective and audience, then scale what works and cut waste.",
    },
    {
      icon: Brain,
      title: "Creative Brief",
      description: " AI summarises which creative elements win by demographic, guiding your next production sprint.",
    },
    {
      icon: TrendingUp,
      title: "Competitor Insights",
      description: " Analyse rival creatives to uncover whitespace in formats, messages and visual styles.",
      badge: "Coming Soon",
    },
  ]

  const targetText = "Advize"

  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      setIsPageLoaded(true)
    }

    if (document.readyState === "complete") {
      setIsPageLoaded(true)
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  useEffect(() => {
    if (!isPageLoaded) return

    const startTypewriter = () => {
      setTypewriterText("")
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex < targetText.length) {
          setTypewriterText(targetText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 500)
        }
      }, 200)

      return () => clearInterval(typeInterval)
    }

    // Start immediately when page loads
    setShowCursor(true)
    startTypewriter()

    // Repeat every 10 seconds
    const repeatInterval = setInterval(() => {
      setShowCursor(true)
      startTypewriter()
    }, 10000)

    return () => {
      clearInterval(repeatInterval)
    }
  }, [isPageLoaded])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setVerticalLineGlowed(true)
        } else if (!entry.isIntersecting) {
          setVerticalLineGlowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (verticalLineRef.current) {
      observer.observe(verticalLineRef.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setHorizontalLineGlowed(true)
        } else if (!entry.isIntersecting) {
          setHorizontalLineGlowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (horizontalLineRef.current) {
      observer.observe(horizontalLineRef.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setVerticalLine2Glowed(true)
        } else if (!entry.isIntersecting) {
          setVerticalLine2Glowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (verticalLine2Ref.current) {
      observer.observe(verticalLine2Ref.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setVerticalLine3Glowed(true)
        } else if (!entry.isIntersecting) {
          setVerticalLine3Glowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (verticalLine3Ref.current) {
      observer.observe(verticalLine3Ref.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setHorizontalLine3Glowed(true)
        } else if (!entry.isIntersecting) {
          setHorizontalLine3Glowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (horizontalLine3Ref.current) {
      observer.observe(horizontalLine3Ref.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          setVerticalLine4Glowed(true)
        } else if (!entry.isIntersecting) {
          setVerticalLine4Glowed(false)
        }
      },
      { threshold: [0, 1] }
    )
    if (verticalLine4Ref.current) {
      observer.observe(verticalLine4Ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="text-center mb-8">
            <span className="font-medium gradient-text">AI-Powered Creative Intelligence</span>
          </div>

          <h1 className="text-8xl md:text-9xl font-light mb-8 tracking-tight font-clash">
            <span className="font-bold gradient-text">
              {typewriterText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </h1>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-16">
          <b>Advize turns Meta ad data into daily creative insights. Auto-tag every asset, analyse performance drivers and spot winning formats, messages and visuals—no spreadsheets required. </b>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 border border-gray-600"
              onClick={onLoginClick}
            >
              Login
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            {/* <Button
              size="lg"
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 border border-gray-600"
            >
              <Play className="mr-3 w-5 h-5" />
              Demo
            </Button> */}
          </div>

          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white mb-4 bg-[#2563eb] hover:bg-blue-700 px-6 py-3 rounded-full inline-block border border-gray-600 transform hover:scale-105 transition-all duration-300">
              <Users className="inline mr-2 w-5 h-5" />
              Companies we worked with
            </h3>
          </div>
        </div>

        <div className="-mt-2 overflow-hidden rounded-3xl py-3 bg-black">
          <div className="client-logos-container" style={{ background: 'black', padding: '16px 0' }}>
            {device.isSupportedDevice && device.isPortrait ? (
              <div className="flex flex-col items-center gap-2">
                {clientLogos.map((company, idx) => (
                  <div
                    key={company}
                    className="text-white font-bold text-3xl"
                    style={{ fontFamily: 'Times New Roman', letterSpacing: '0.02em' }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-8">
                {clientLogos.map((company, idx) => (
                  <div
                    key={company}
                    className="text-white font-bold text-3xl"
                    style={{ fontFamily: 'Times New Roman', letterSpacing: '0.02em' }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section - Six Lenses */}
      <div className="pt-5 pb-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 font-clash">
              <span className="sentence-gradient">One Platform, Six Lenses</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              From granular creative tags to high-level media trends, Advize shows every angle of your Meta advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-1000 hover:-translate-y-4 bg-white/10 backdrop-blur-sm border border-gray-700/30 shadow-md rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-10 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-all duration-700 bg-gradient-to-br from-blue-600/10 to-blue-400/5"></div>

                    <div className="relative mb-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-white flex-shrink-0" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      {feature.badge && (
                        <span className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {feature.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 leading-relaxed font-light text-lg" style={{ color: "#AAAAAA" }}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Who Benefits Section */}
      <div className="pt-5 pb-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6 font-clash">
              <span className="sentence-gradient">
              Built for Every Data-Driven Marketing Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              <b>  Advize converts creative data into revenue-lifting decisions for performance
              marketers, brand leaders and design squads alike. </b> 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* CMOs & Brand Managers Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20 border border-gray-700/30">
              <div className="p-8 border-l-4 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 mr-4 text-blue-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Growth & Performance Marketers</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                      Identify <span className="text-blue-400 font-semibold"> high-ROI asset–audience–objective</span>  combinations across your Meta ads in minutes.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Re-allocate spend daily with fresh creative-lift signals by region, placement and device.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">Measure ROAS impact of every visual, hook and copy variation.</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Spot wasted spend fast with demographic-level performance heat-maps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Teams Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20 border border-gray-700/30">
              <div className="p-8 border-l-4 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 mr-4 text-blue-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white"> Creative Strategists & Designers</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Shorten concept-ing cycles by up to <span className="text-blue-400 font-semibold">30% </span> using proven hooks, colours and story arcs.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Auto-generate data-backed creative briefs for any demographic, region or device.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Compare layouts, text and palettes to see exactly what drives engagement in Meta feeds.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Tap a daily leaderboard of top-performing formats and messaging to inspire your next
                    campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Teams Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20 border border-gray-700/30">
              <div className="p-8 border-l-4 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 mr-4 text-blue-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Brand & Analytics Leaders</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">Connect creative-performance scores to revenue KPIs for crystal-clear ROI storytelling.</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Replace clunky Meta dashboards with a single, <span className="text-blue-400 font-semibold"> daily refreshed</span>{" "}
                    cockpit of spend and results.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Share concise, executive-ready insights with leadership and agency partners in one click.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <p className="text-white leading-relaxed">
                    Benchmark long-term creative trends and spending efficiency to guide quarterly planning and
                    OKRs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Transform Section */}
          <div className="text-center mt-16" style={{ marginBottom: '125px' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-medium text-white mb-4">Ready to power smarter creative decisions?</h3>
              <p className="text-white mb-6 leading-relaxed">
              Join marketers who use Advize to convert data into higher-performing Meta ads. 
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-[#2563eb] hover:bg-blue-700 text-white border border-gray-600 px-6 py-6 text-lg font-medium shadow-xl rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Start Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See It in Action Section - Demo Video & Feature Highlights */}
      {device.isSupportedDevice ? (
        <SeeItInActionMobile />
      ) : (
        <div style={{ marginTop: '-100px' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light mb-6 font-clash">
                <span className="sentence-gradient">
                  See It in <span className="animate-gentle-pulse">Action</span>
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-full mx-auto leading-relaxed font-light px-4">
                A quick tour of the features designed to give you a decisive advantage on Meta.
              </p>
            </div>
            {/* Feature Highlights Section */}
            <div className="max-w-7xl mx-auto space-y-0">
              {/* Analyze Card - Digital Collage Layout */}
              <div className="bg-black min-h-[400px] py-0 pb-0 mb-0 relative" style={{ zIndex: 1 }}>
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px]">
                    {/* Analyze Text Content - Left */}
                    <div className="flex flex-col justify-center h-full space-y-8 pl-0 -ml-10 text-left items-center -mt-32">
                      <div className="space-y-6 w-full flex flex-col items-start">
                        <button className="text-[#A3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none">
                          Analyze
                        </button>
                        <h3 id="analyze-subheading" className="text-3xl lg:text-4xl font-bold text-white leading-tight font-sans relative">
                          AI Tagging
                        </h3>
                        <p id="analyze-insight-text" className="text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg mb-8 whitespace-nowrap overflow-hidden text-ellipsis">
                          Instantly tag every creative insight.
                        </p>
                      </div>
                    </div>
                    {/* Analyze-Last image - Right */} 
                    <div className="flex justify-center items-center -ml-10">
                      <img
                        src="/images/Analyze-Final-3.png"
                        alt="analyze final"
                        className="h-[600px] rounded-xl shadow-2xl object-contain"
                        style={isSeeItInActionLaptop 
                          ? { marginLeft: '-80px', width: '600px', minWidth: '600px' }
                          : { width: '900px', minWidth: '900px' }}
                      />
                    </div>
                  </div>
                  {/* Vertical line from below Analyze subheading to above Visualize image */}
                  <span
                    ref={verticalLineRef}
                    className={`hidden lg:block travelling-vertical-glow-line${verticalLineGlowed ? " glow-animate" : ""}`}
                    style={{
                      position: 'absolute',
                      left: '6.5%',
                      top: '54%',
                      width: '2px',
                      height: '43.7%',
                      background: 'white',
                      opacity: 0.8,
                      borderRadius: '1px',
                      zIndex: 2,
                    }}
                  />
                  {/* Horizontal line extending right from the bottom of the vertical line to the right edge */}
                  <span
                    ref={horizontalLineRef}
                    className={`hidden lg:block travelling-horizontal-glow-line${horizontalLineGlowed ? " glow-animate" : ""}`}
                    style={{
                      position: 'absolute',
                      left: '6.5%',
                      top:'97.5%',
                      width: '78%',
                      height: '2px',
                      background: 'white',
                      opacity: 0.8,
                      borderRadius: '1px',
                      zIndex: 2,
                    }}
                  />
                  {/* Short vertical line at the end of the horizontal line (90 degree turn down) */}
                  <span
                    ref={verticalLine2Ref}
                    className={`hidden lg:block travelling-vertical-glow-line-2${verticalLine2Glowed ? " glow-animate" : ""}`}
                    style={{
                      position: 'absolute',
                      left: '84.4%',
                      top: '97.5%',
                      width: '2px',
                      height: '29%',
                      background: 'white',
                      opacity: 0.8,
                      borderRadius: '2px',
                      zIndex: 2,
                    }}
                  />
                </div>
              </div>

              {/* Visualize Card - Modern Minimal Design (STATIC, NO ANIMATION) */}
              <div className="bg-black min-h-[300px] py-0 mt-0 pt-0">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[300px]">
                    {/* Analytics Dashboard - Left Side */}
                    <div className="flex items-center justify-start order-2 lg:order-1 overflow-visible relative">
                      <img
                        src="/images/Visualize-Final.jpg"
                        alt="Visualize section image"
                        className="h-[485px] scale-120 -ml-[110px] object-contain object-center shadow-lg"
                        style={isSeeItInActionLaptop 
                          ? { width: '790px', maxWidth: '600px', marginLeft: '5px' }
                          : { width: '850px', maxWidth: 'none' }}
                      />
                      {/* Glow lines for Visualize section, positioned like Analyze section */}
                      <span
                        ref={verticalLine3Ref}
                        className={`hidden lg:block travelling-vertical-glow-line-3${verticalLine3Glowed ? " glow-animate" : ""}`}
                        style={{
                          position: 'absolute',
                          right: '-81.2%',
                          top: '74%',
                          width: '2px',
                          height: '33.7%',
                          background: 'white',
                          opacity: 0.8,
                          borderRadius: '2px',
                          zIndex: 2,
                        }}
                      />
                      <span
                        ref={horizontalLine3Ref}
                        className={`hidden lg:block travelling-horizontal-glow-line-3${horizontalLine3Glowed ? " glow-animate" : ""}`}
                        style={{
                          position: 'absolute',
                          left: '10.4%',
                          top: '107.3%',
                          width: '171%',
                          height: '2px',
                          background: 'white',
                          opacity: 0.8,
                          borderRadius: '1px',
                          zIndex: 2,
                        }}
                      />
                      <span
                        ref={verticalLine4Ref}
                        className={`hidden lg:block travelling-vertical-glow-line-4${verticalLine4Glowed ? " glow-animate" : ""}`}
                        style={{
                          position: 'absolute',
                          left: '10.4%',
                          top: '107%',
                          width: '2px',
                          height: '36%',
                          background: 'white',
                          opacity: 0.8,
                          borderRadius: '2px',
                          zIndex: 2,
                        }}
                      />
                    </div>
                    {/* Text Content - Right Side */}
                    <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2 ml-32 items-end">
                      <div className="space-y-6 text-right">
                        <button className="text-[#C3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3A3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none">
                          Visualize
                        </button>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
                          Translate insights into
                          <br />
                          <span className="text-white">visual reports</span>
                        </h3>
                        <p className="text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg">
                          Digestible dashboards that any team member can understand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Card - Now "Unlock Granular Insights" (STATIC, NO ANIMATION) */}
              <div className="bg-black min-h-[800px] py-14 mt-16">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
                    {/* Text Content - Left Side */}
                    <div className="flex flex-col justify-center space-y-8 pl-0 -ml-12">
                      <div className="space-y-6">
                        <button className="text-[#A3FFA3] text-base font-medium px-0 py-0 hover:text-[#B3FFB3] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none">
                          Improve
                        </button>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
                          Unlock Granular
                          <br />
                          <span className="text-white">Insights</span>
                        </h3>
                        <p className="text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg">
                          Break performance down by key demographics to guide data-driven decisions.
                        </p>
                      </div>
                    </div>
                    {/* Image - Right Side */}
                    <div className="flex justify-center items-center">
                      <img
                        src="/images/ctr_heatmap.png"
                        alt="Improve section image"
                        className="h-[450px] rounded-xl shadow-2xl"
                        style={isSeeItInActionLaptop 
                          ? { width: '500px', minWidth: '500px' }
                          : { width: '850px', minWidth: '850px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div
        className={`pt-0 pb-8 bg-black${device.isSupportedDevice && !device.isPortrait ? ' mt-40' : ''}${device.isSupportedDevice && device.isPortrait ? ' mt-32' : ''}`}
        style={{
          marginTop: device.isSupportedDevice && !device.isPortrait
            ? '10rem'
            : device.isSupportedDevice && device.isPortrait
              ? '8rem'
              : '-98px'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight font-clash">
              <span className="sentence-gradient">
                Frequently Asked <span className="animate-gentle-pulse">Questions</span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-full mx-auto leading-relaxed font-light px-4">
              Find answers to common questions about Advizer's ad analysis and suggestion platform.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-8 bg-black">
        <p className="text-gray-400 text-sm">
          © 2025 Advize. All rights reserved.
        </p>
      </div>

      <style jsx>{`
      html, body {
        background-color: black !important;
        overflow-x: hidden;
      }

      * {
        box-sizing: border-box;
      }

      .gradient-text {
        background: linear-gradient(90deg, #C7F6F8 0%, #87C6F5 50%, #4B8DF0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
      }

      .sentence-gradient {
        background: linear-gradient(90deg, #C7F6F8 0%, #87C6F5 50%, #4B8DF0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
      }

      .floating-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 24px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        overflow: hidden;
      }

      .floating-card:hover {
        transform: scale(1.03) translateY(-8px);
        box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.12);
      }

      .floating-card:focus {
        transform: scale(1.03) translateY(-8px);
        box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.12);
      }

      .icon-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .feature-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        transition: color 0.3s ease;
        line-height: 1.2;
      }

      .feature-subheading {
        font-size: 1.5rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      .feature-description {
        font-size: 1.125rem;
        color: #6B7280;
        line-height: 1.6;
        max-width: 600px;
      }

      .learn-more-link {
        font-weight: 600;
        font-size: 1rem;
        transition: color 0.3s ease;
        display: inline-flex;
        align-items: center;
      }
      
      @keyframes elasticIn {
        0% { 
          transform: scale(0.3) rotate(-10deg); 
          opacity: 0; 
        }
        50% { 
          transform: scale(1.05) rotate(2deg); 
        }
        70% { 
          transform: scale(0.9) rotate(-1deg); 
        }
        100% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .animate-elasticIn {
        animation: elasticIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      @keyframes zoomPop {
        0%, 90% { 
          transform: scale(1);
        }
        95% { 
          transform: scale(1.1);
        }
        100% { 
          transform: scale(1);
        }
      }

      .animate-zoom-pop {
        animation: zoomPop 10s ease-in-out infinite;
      }

      .client-logos-container {
        width: 100%;
        overflow: hidden;
      }

      .client-logos-slider {
        display: flex;
        animation: scrollElastic 30s linear infinite;
        gap: 0;
      }

      @keyframes scrollElastic {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.3333%); }
      }

      .gradient-bg {
        background: linear-gradient(90deg, #bae7ea 0%, #89b4fa 20%, #7a9be1 40%, #5484cc 60%, #3a62b5 80%, #2564e9 100%);
      }

      .gradient-bg:hover {
        background: linear-gradient(90deg, #a8dde0 0%, #7ba8f6 20%, #6b8fdd 40%, #4a78c8 60%, #2f56b1 80%, #1e52e5 100%);
      }

      @keyframes cursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .animate-cursor {
        animation: cursorBlink 1s infinite;
      }

      @media (max-width: 1024px) {
        .floating-card .grid {
          grid-template-columns: 1fr;
        }
        
        .feature-title {
          font-size: 2rem;
        }
        
        .feature-subheading {
          font-size: 1.25rem;
        }
        
        .icon-circle {
          width: 64px;
          height: 64px;
        }
      }

      @media (max-width: 768px) {
        .feature-title {
          font-size: 1.75rem;
        }
        
        .feature-subheading {
          font-size: 1.125rem;
        }
        
        .feature-description {
          font-size: 1rem;
        }
      }

      .demo-video-container {
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }

      .demo-video-container:hover {
        transform: scale(1.08);
      }

      @media (max-width: 768px) {
        .demo-video-container {
          transform: scale(1);
          border-width: 2px;
        }
        
        .demo-video-container:hover {
          transform: scale(1.02);
        }
      }

      .font-sans {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      }

      /* Microsoft Edge specific fixes */
      @supports (-ms-ime-align: auto) {
        html, body {
          background-color: black !important;
          overflow-x: hidden;
        }
        
        .min-h-screen {
          background-color: black !important;
        }
      }

      /* Webkit browsers (Chrome, Safari) */
      @supports (-webkit-appearance: none) {
        html, body {
          background-color: black !important;
        }
      }

      .travelling-vertical-glow-line {
        position: absolute;
        overflow: visible;
      }
      .travelling-vertical-glow-line::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 5px;
        height: 0;
        transform: translateX(-50%);
        background: linear-gradient(to bottom, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: height 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-vertical-glow-line.glow-animate::after {
        height: 100%;
      }

      .travelling-horizontal-glow-line {
        position: absolute;
        overflow: visible;
      }
      .travelling-horizontal-glow-line::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        height: 5px;
        width: 0;
        transform: translateY(-50%);
        background: linear-gradient(to right, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: width 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-horizontal-glow-line.glow-animate::after {
        width: 100%;
      }

      .travelling-vertical-glow-line-2 {
        position: absolute;
        overflow: visible;
      }
      .travelling-vertical-glow-line-2::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 5px;
        height: 0;
        transform: translateX(-50%);
        background: linear-gradient(to bottom, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: height 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-vertical-glow-line-2.glow-animate::after {
        height: 100%;
      }

      .travelling-vertical-glow-line-3 {
        position: absolute;
        overflow: visible;
      }
      .travelling-vertical-glow-line-3::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 5px;
        height: 0;
        transform: translateX(-50%);
        background: linear-gradient(to bottom, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: height 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-vertical-glow-line-3.glow-animate::after {
        height: 100%;
      }

      .travelling-horizontal-glow-line-3 {
        position: absolute;
        overflow: visible;
      }
      .travelling-horizontal-glow-line-3::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        height: 5px;
        width: 0;
        transform: translateY(-50%);
        background: linear-gradient(to right, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: width 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-horizontal-glow-line-3.glow-animate::after {
        width: 100%;
      }

      .travelling-vertical-glow-line-4 {
        position: absolute;
        overflow: visible;
      }
      .travelling-vertical-glow-line-4::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 5px;
        height: 0;
        transform: translateX(-50%);
        background: linear-gradient(to bottom, #e0eaff 0%, #fff 100%);
        box-shadow: 0 0 32px 4px #bcd0ff, 0 0 12px 4px #bcd0ffcc;
        opacity: 1;
        border-radius: 3px;
        transition: height 2s linear;
        z-index: 3;
        pointer-events: none;
      }
      .travelling-vertical-glow-line-4.glow-animate::after {
        height: 100%;
      }
    `}</style>
    </div>
  )
}
