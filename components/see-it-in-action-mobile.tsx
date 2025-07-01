import React from 'react';

export default function SeeItInActionMobile() {
  const [isLandscape, setIsLandscape] = React.useState(false);

  React.useEffect(() => {
    const checkOrientation = () => {
      const isLandscapeMode = window.innerWidth > window.innerHeight;
      setIsLandscape(isLandscapeMode);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Debug log in render
  if (typeof window !== 'undefined') {
    console.log('RENDER: width', window.innerWidth, 'height', window.innerHeight, 'isLandscape', isLandscape);
  }

  return (
    <>
      <style jsx>{`
        @media (orientation: portrait), (orientation: landscape) {
          .see-in-action-top {
            margin-top: -8rem !important;
            padding-top: 0 !important;
          }
        }
        @media (orientation: portrait) {
          .portrait-img-row {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            gap: 0 !important;
            width: 100% !important;
            margin-top: 2.5rem !important;
          }
          .portrait-ad-visuals {
            width: 53vw !important;
            height: 56vw !important;
            max-width: 300px !important;
            max-height: 360px !important;
            object-fit: cover !important;
            margin-left: -6.5vw !important;
            margin-right: auto !important;
          }
          .portrait-ad-messaging {
            width: 50vw !important;
            height: 56vw !important;
            max-width: 300px !important;
            max-height: 360px !important;
            object-fit: cover !important;
            margin-right: -6vw !important;
            margin-left: auto !important;
          }
          .big-visualize-img {
            height: 260px !important;
            object-fit: contain !important;
          }
          .portrait-big-visualize-img {
            margin-top: 0 !important;
            height: 70vw !important;
            max-height: 400px !important;
            object-fit: contain !important;
          }
          .portrait-text-center {
            text-align: center !important;
          }
          .portrait-text-center p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .portrait-bottom-spacing {
            margin-bottom: 8rem !important;
          }
          .portrait-svg-line {
            display: block !important;
          }
          .portrait-svg-line-2 {
            display: block !important;
          }
        }
        @media (orientation: landscape), (min-width: 768px) and (max-height: 600px) {
          .landscape-img-row {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            gap: 2vw !important;
            width: 100% !important;
            margin-top: 2.5rem !important;
          }
          .landscape-ad-visuals {
            width: 52vw !important;
            height: 36vw !important;
            max-width: 600px !important;
            max-height: 400px !important;
            object-fit: cover !important;
            margin-left: -18vw !important;
            margin-right: auto !important;
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            position: absolute !important;
            left: -9999px !important;
          }
          .landscape-ad-messaging {
            width: 60vw !important;
            height: 36vw !important;
            max-width: 700px !important;
            max-height: 400px !important;
            object-fit: contain !important;
            margin-right: -4vw !important;
            margin-left: auto !important;
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            position: absolute !important;
            left: -9999px !important;
          }
          .landscape-analyze-text, .landscape-improve-text {
            text-align: left !important;
            padding-left: 4vw !important;
            margin-left: 0 !important;
          }
          .landscape-visualize-text {
            text-align: right !important;
            padding-right: 4vw !important;
            margin-right: 0 !important;
          }
          .landscape-big-visualize-img {
            width: 70vw !important;
            height: 38vw !important;
            max-width: 900px !important;
            max-height: 440px !important;
            object-fit: contain !important;
            display: block !important;
            margin: 0 auto !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .landscape-improve-img {
            width: 90vw !important;
            height: 38vw !important;
            max-width: 800px !important;
            max-height: 440px !important;
            object-fit: contain !important;
            display: block !important;
            margin: 0 auto !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .landscape-bottom-spacing {
            margin-bottom: 8rem !important;
          }
          .landscape-text-center {
            text-align: center !important;
          }
          .landscape-text-center p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .portrait-svg-line {
            display: none !important;
          }
          .portrait-svg-line-2 {
            display: none !important;
          }
          .landscape-analyze-main-img {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            position: absolute !important;
            left: -9999px !important;
          }
        }
        @media (orientation: landscape), (min-width: 768px) and (max-height: 600px) {
          .landscape-img {
            width: 95vw !important;
            height: 38vw !important;
            max-width: 800px !important;
            max-height: 320px !important;
            object-fit: cover !important;
          }
          .big-visualize-img {
            height: 260px !important;
            object-fit: contain !important;
          }
        }
      `}</style>
      <div className="p-4 max-w-md mx-auto see-in-action-top sm:mt-0 portrait-bottom-spacing landscape-bottom-spacing">
        <div className="text-center mb-2 p-0">
          <h2
            className="text-4xl font-extrabold font-clash mb-2"
            style={{
              background: 'linear-gradient(90deg, #C7F6F8 0%, #87C6F5 50%, #4B8DF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#7bb6f7',
              letterSpacing: '-0.01em',
              display: 'inline-block',
            }}
          >
            See It in <span className="animate-gentle-pulse">Action</span>
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed font-light mb-6" style={{ color: '#A1A1AA' }}>
            A quick tour of the features designed to give you a decisive advantage on Meta.
          </p>
        </div>

        {/* Analyze Section (Mobile) */}
        <div className="mt-3 text-left landscape-analyze-text portrait-text-center landscape-text-center">
          <button className="text-[#A3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none mb-2">
            Analyze
          </button>
          <h3 className="text-2xl font-bold text-white leading-tight font-sans mb-2">
            AI Tagging
          </h3>
          <p className="text-base text-[#A1A1AA] leading-relaxed font-light mb-6 max-w-xs">
            Instantly tag every creative insight.
          </p>
          {/* Landscape-only image */}
          {isLandscape && (
            <div className="flex justify-center w-full" style={{ marginTop: '8%', marginBottom: '1%' }}>
              <img
                src="/images/Analyze-Landscape-new.png"
                alt="Analyze Landscape"
                className="rounded-xl shadow-xl"
                style={{ 
                  maxWidth: '90vw',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="flex flex-col items-center w-full mt-6 mb-2 gap-4">
            <div className="relative">
              {!isLandscape && (
                <img
                  src="/images/Girl-3.png"
                  alt="Girl-3"
                  className="rounded-xl shadow-2xl mb-2 landscape-analyze-main-img"
                  style={{ width: '220px', maxWidth: '80vw', height: 'auto' }}
                />
              )}
              {/* SVG line for portrait mode */}
              <svg
                className="portrait-svg-line"
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-24.8%',
                  width: '60%',
                  height: '28.5%',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 0 C 70 30, 30 70, 50 100"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    filter: 'drop-shadow(0 0 8px #bcd0ff) drop-shadow(0 0 4px #bcd0ff)',
                    opacity: 0.8,
                  }}
                />
              </svg>
              {/* Second SVG line for portrait mode */}
              <svg
                className="portrait-svg-line-2"
                style={{
                  position: 'absolute',
                  left: '-13%',
                  bottom: '-24.8%',
                  width: '60%',
                  height: '28.5%',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 0 C 70 30, 30 70, 50 100"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    filter: 'drop-shadow(0 0 8px #bcd0ff) drop-shadow(0 0 4px #bcd0ff)',
                    opacity: 0.8,
                  }}
                />
              </svg>
            </div>
            <div className="portrait-img-row w-full landscape-img-row w-full">
              {!isLandscape && (
                <img
                  src="/images/Ad-Visuals-4.png"
                  alt="Ad Visuals"
                  className="rounded-xl shadow-xl portrait-ad-visuals landscape-ad-visuals"
                />
              )}
              {!isLandscape && (
                <img
                  src="/images/Ad-Messaging-Final.png"
                  alt="Ad Messaging"
                  className="rounded-xl shadow-lg portrait-ad-messaging landscape-ad-messaging"
                />
              )}
            </div>
          </div>
        </div>

        {/* Visualize Section (Mobile) */}
        <div className="mt-14 text-right landscape-visualize-text portrait-text-center landscape-text-center">
          <button className="text-[#C3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none mb-2">
            Visualize
          </button>
          <h3 className="text-2xl font-bold text-white leading-tight font-sans mb-2">
            Translate insights into<br />visual reports
          </h3>
          <p className="text-base text-[#A1A1AA] leading-relaxed font-light mb-6 max-w-xs ml-auto">
            Digestible creative reports that the whole team can understand. Eliminate information overload.
          </p>
          <div className="flex justify-center w-full mt-8">
            <img
              src="/images/Big-Visualize-2.png"
              alt="Visualize section image"
              className="rounded-xl shadow-xl landscape-img big-visualize-img landscape-big-visualize-img portrait-big-visualize-img"
              style={{ width: '340px', maxWidth: '98vw' }}
            />
          </div>
        </div>

        {/* Improve Section (Mobile) */}
        <div className="mt-12 text-left landscape-improve-text portrait-text-center landscape-text-center">
          <button className="text-[#A3FFA3] text-base font-medium px-0 py-0 hover:text-[#B3FFB3] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none mb-2">
            Improve
          </button>
          <h3 className="text-2xl font-bold text-white leading-tight font-sans mb-2">
            Unlock Granular<br />Insights
          </h3>
          <p className="text-base text-[#A1A1AA] leading-relaxed font-light mb-6 max-w-xs">
            Break down performance by key demographics to make smarter, data-driven decisions.
          </p>
          <div className="flex justify-center w-full mt-8">
            <img
              src="/images/Improve-3.png"
              alt="Improve section image"
              className="rounded-xl shadow-xl landscape-improve-img"
              style={{ width: '340px', maxWidth: '98vw', height: '140px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </>
  );
} 