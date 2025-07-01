import { useEffect, useState } from "react"

// List of supported device sizes (width, height) in px
const SUPPORTED_SIZES = [
  // Portrait
  { width: 375, height: 667 },
  { width: 414, height: 896 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 412, height: 915 },
  { width: 360, height: 740 },
  { width: 768, height: 1024 },
  { width: 820, height: 1180 },
  { width: 1024, height: 1366 },
  { width: 540, height: 720 },
  { width: 912, height: 1368 },
  { width: 853, height: 1280 },
  // Landscape
  { width: 667, height: 375 },
  { width: 896, height: 414 },
  { width: 844, height: 390 },
  { width: 932, height: 430 },
  { width: 915, height: 412 },
  { width: 740, height: 360 },
  { width: 915, height: 412 },
  { width: 1024, height: 768 },
  { width: 1180, height: 820 },
  { width: 1366, height: 1024 },
  { width: 914, height: 412 },
  { width: 829, height: 690 },
  { width: 1024, height: 419 },
  { width: 1114, height: 720 },
  { width: 882, height: 344 },
  { width: 1024, height: 600 },
]

// Allow a small tolerance for browser UI, scrollbars, etc.
const SIZE_TOLERANCE = 2

function isSizeMatch(winW: number, winH: number, size: { width: number; height: number }) {
  return (
    (Math.abs(winW - size.width) <= SIZE_TOLERANCE && Math.abs(winH - size.height) <= SIZE_TOLERANCE) ||
    (Math.abs(winW - size.height) <= SIZE_TOLERANCE && Math.abs(winH - size.width) <= SIZE_TOLERANCE)
  )
}

export function useSupportedDeviceSize() {
  const [match, setMatch] = useState<{
    isSupportedDevice: boolean
    isPortrait: boolean
    matchedSize?: { width: number; height: number }
  }>({ isSupportedDevice: false, isPortrait: true })

  useEffect(() => {
    function checkSize() {
      const winW = window.innerWidth
      const winH = window.innerHeight
      const found = SUPPORTED_SIZES.find(size => isSizeMatch(winW, winH, size))
      setMatch({
        isSupportedDevice: !!found,
        isPortrait: winH >= winW,
        matchedSize: found,
      })
    }
    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return match
} 