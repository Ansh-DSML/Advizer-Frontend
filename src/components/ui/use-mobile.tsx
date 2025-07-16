import { useEffect, useState } from "react"

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
  { width: 1024, height: 768 },
  { width: 1180, height: 820 },
  { width: 1366, height: 1024 },
  { width: 914, height: 412 },
  { width: 829, height: 690 },
  { width: 1024, height: 419 },
  { width: 1114, height: 720 },
  { width: 882, height: 344 },
  { width: 1024, height: 600 },
  { width: 1280, height: 1706 },
]

const SIZE_TOLERANCE = 10

function isSizeMatch(winW: number, winH: number, size: { width: number; height: number }) {
  return (
    (Math.abs(winW - size.width) <= SIZE_TOLERANCE && Math.abs(winH - size.height) <= SIZE_TOLERANCE) ||
    (Math.abs(winW - size.height) <= SIZE_TOLERANCE && Math.abs(winH - size.width) <= SIZE_TOLERANCE)
  )
}

function isRealMobileDevice() {
  const ua = navigator.userAgent || navigator.vendor
  // Exclude MacBooks (Macintosh) from being detected as mobile
  if (/Macintosh/i.test(ua)) return false;
  return /android|iphone|ipad|ipod|mobile/i.test(ua)
}

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  )
}

export function useSupportedDeviceSize() {
  const [match, setMatch] = useState<{
    isSupportedDevice: boolean
    isPortrait: boolean
    matchedSize?: { width: number; height: number }
    forcedFallback?: boolean
  }>({ isSupportedDevice: false, isPortrait: true })

  useEffect(() => {
    function checkSize() {
      const winW = window.innerWidth
      const winH = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      const isPortrait = winH >= winW

      const found = SUPPORTED_SIZES.find(size => isSizeMatch(winW, winH, size))

      if (found) {
        setMatch({
          isSupportedDevice: true,
          isPortrait,
          matchedSize: found,
          forcedFallback: false,
        })
      } else if (
        isRealMobileDevice() && // Only fallback for real mobile devices
        dpr >= 2 && dpr <= 3.5
      ) {
        const fallbackSize = isPortrait
          ? { width: 414, height: 896 }
          : { width: 896, height: 414 }

        setMatch({
          isSupportedDevice: true,
          isPortrait,
          matchedSize: fallbackSize,
          forcedFallback: true,
        })
      } else {
        setMatch({
          isSupportedDevice: false,
          isPortrait,
          matchedSize: undefined,
          forcedFallback: false,
        })
      }
    }

    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return match
}

// List of laptop dimensions for 'See It In Action' special layout
const SEE_IT_IN_ACTION_LAPTOP_SIZES = [
  { width: 1440, height: 900 },
  { width: 1400, height: 800 },
  { width: 1280, height: 800 },
  { width: 1470, height: 956 },
  { width: 1512, height: 982 },
  { width: 1440, height: 932 },
  { width: 1280, height: 820 },
  { width: 1280, height: 860 },
  { width: 1280, height: 880 },
  { width: 1280, height: 680 },
  { width: 1280, height: 700 },
  { width: 1280, height: 720 },
  { width: 1280, height: 800 },
  { width: 1152, height: 720 },
  { width: 1024, height: 640 },
  { width: 1024, height: 600 }
]

// Hook to detect if current window size matches any of the special laptop sizes
export function useSeeItInActionLaptopSize() {
  const [isSeeItInActionLaptop, setIsSeeItInActionLaptop] = useState(false)

  useEffect(() => {
    function checkLaptopSize() {
      const winW = window.innerWidth
      const winH = window.innerHeight
      const match = SEE_IT_IN_ACTION_LAPTOP_SIZES.some(size =>
        (Math.abs(winW - size.width) <= SIZE_TOLERANCE && Math.abs(winH - size.height) <= SIZE_TOLERANCE) ||
        (Math.abs(winW - size.height) <= SIZE_TOLERANCE && Math.abs(winH - size.width) <= SIZE_TOLERANCE)
      )
      setIsSeeItInActionLaptop(match)
    }
    checkLaptopSize()
    window.addEventListener("resize", checkLaptopSize)
    return () => window.removeEventListener("resize", checkLaptopSize)
  }, [])

  return isSeeItInActionLaptop
}
