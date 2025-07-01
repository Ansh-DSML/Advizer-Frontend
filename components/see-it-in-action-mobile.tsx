import React from "react"
import { useSupportedDeviceSize } from "./ui/use-mobile"

// Section data for each image
const allSections = [
  {
    src: "/images/Ad-Visuals-4.png",
    section: "analyze",
    heading: "Analyze",
    description: "AI Tagging: Instantly tag every creative insight.",
  },
  {
    src: "/images/Ad-Messaging-Final.png",
    section: "analyze",
    heading: "Analyze",
    description: "AI Tagging: Instantly tag every creative insight.",
  },
  {
    src: "/images/Girl-3.png",
    section: "analyze",
    heading: "analyze",
    description: "Translate insights into visual reports everyone can understand.",
  },
  {
    src: "/images/Big-Visualize-2.png",
    section: "other",
    heading: "Visualize",
    description: "Translate insights into visual reports everyone can understand.",
  },
  {
    src: "/images/Improve-3.png",
    section: "other",
    heading: "Improve",
    description: "Unlock granular performance breakdowns by key demographics.",
  },
  {
    src: "/images/Analyze-Landscape-new.png",
    section: "analyze",
    heading: "Analyze",
    description: "AI Tagging: Instantly tag every creative insight.",
  },
]

export default function SeeItInActionMobile() {
  const { isSupportedDevice, isPortrait } = useSupportedDeviceSize()

  if (!isSupportedDevice) return null

  const sections = isPortrait
    ? allSections
    : allSections.filter(s => s.section !== "analyze")

  if (!sections.length) return null

  const textCenter = isPortrait ? "" : "text-center"
  const landscapePadding = !isPortrait ? "pb-12 sm:pb-16" : ""
  const landscapeMinH = !isPortrait
    ? "min-h-[600px] sm:min-h-[750px] md:min-h-screen"
    : "min-h-screen"

  return (
    <section
      className={`w-full ${landscapeMinH} bg-black flex flex-col items-center justify-start px-2 pt-0 mt-0 ${landscapePadding}`}
      style={{ margin: 0, padding: 0 }}
    >
      {/* LANDSCAPE MODE */}
      {!isPortrait && (
        <>
          <h2 className="text-3xl sm:text-4xl  text-center mb-2" style={{
            background: 'linear-gradient(90deg, #C7F6F8 0%, #87C6F5 50%, #4B8DF0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            color: 'transparent',
          }}>
            See It in Action
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-full mx-auto leading-snug font-light px-4 text-center mb-48">
            A quick tour of the features designed to give you a decisive advantage on Meta.
          </p>

          <div className="space-y-2 w-full max-w-xl mx-auto mb-2">
            <button className="text-[#A3A3FF] text-sm font-medium hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none text-center block mx-auto">
              Analyze
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-sans text-center mb-1">
              AI Tagging
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg mx-auto text-center mb-2">
              Instantly tag every creative insight.
            </p>
            <div className="flex justify-center w-full mb-4 mt-0" style={{ marginTop: '5rem' }}>
              <img
                src="/images/Analyze-Landscape-new.png"
                alt="Analyze Landscape"
                className="w-[1000px] h-[300px] max-w-full rounded-xl shadow-lg object-contain"
              />
            </div>
          </div>

          <div className="space-y-2 w-full max-w-xl mx-auto mb-6" style={{ marginTop: '7rem' }}>
            <button className="text-[#C3A3FF] text-sm font-medium hover:text-[#B3A3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none text-center block mx-auto">
              Visualize
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-sans text-center mb-1">
              Translate insights into
              <br />
              <span className="text-white">visual reports</span>
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg mx-auto text-center mb-3">
              Digestible creative reports that the whole team can understand. Eliminate information overload.
            </p>
          </div>

          {/* Big Visualize 2 image below Visualize section text */}
          <div className="flex justify-center w-full mb-6 mt-20">
            <img
              src="/images/Big-Visualize-2.png"
              alt="Big Visualize 2"
              className="w-[800px] h-[300px] max-w-full rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Improve section text only, center aligned */}
          <div className="space-y-2 w-full max-w-xl mx-auto mb-6" style={{ marginTop: '7rem' }}>
            <button className="text-[#A3FFA3] text-sm font-medium hover:text-[#B3FFB3] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none text-center block mx-auto">
              Improve
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-sans text-center mb-1">
              Unlock Granular
              <br />
              <span className="text-white">Insights</span>
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light max-w-lg mx-auto text-center mb-3">
              Break down performance by key demographics to make smarter, data-driven decisions.
            </p>
          </div>

          {/* Improve 3 image below Improve section text */}
          <div className="flex justify-center w-full mb-6 mt-12">
            <img
              src="/images/Improve-3.png"
              alt="Improve 3"
              className="w-[800px] h-[300px] max-w-full rounded-xl shadow-lg object-contain"
            />
          </div>
        </>
      )}

      {/* PORTRAIT MODE */}
      {isPortrait && (
        <>
          <div className="w-full flex flex-col items-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-light mb-6 font-clash text-center text-white">
              <span className="sentence-gradient">
                See It in <span className="animate-gentle-pulse">Action</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-full mx-auto leading-relaxed font-light px-4 text-center">
              A quick tour of the features designed to give you a decisive advantage on Meta.
            </p>
          </div>

          <div className="flex flex-row gap-6 overflow-x-auto w-full pb-2">
            {sections.map((s, i) => (
              <div key={i} className="flex-shrink-0 w-[240px] flex flex-col items-center">
                <div className="w-[220px] h-[140px] bg-gray-800 rounded-xl overflow-hidden shadow-md flex items-center justify-center mb-3">
                  <img
                    src={s.src}
                    alt={s.heading}
                    className="object-cover w-full h-full"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div className={`w-full ${textCenter}`}>
                  <div className="text-lg font-semibold text-white mb-1">{s.heading}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 w-full flex flex-col items-center">
            <div
              className={`bg-white/10 rounded-xl p-3 w-[95vw] max-w-[400px] text-white text-sm ${textCenter}`}
            >
              Instantly tag every creative insight, translate insights into visual reports, and unlock
              granular performance breakdowns by key demographics.
            </div>
          </div>
        </>
      )}
    </section>
  )
}
