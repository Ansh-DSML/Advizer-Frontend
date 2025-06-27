export default function SeeItInActionMobile() {
  return (
    <>
      <style jsx>{`
        @media (orientation: portrait) {
          .portrait-img-row {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            gap: 0 !important;
            width: 100% !important;
          }
          .portrait-ad-visuals {
            width: 48vw !important;
            height: 38vw !important;
            max-width: 220px !important;
            max-height: 260px !important;
            object-fit: cover;
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .portrait-ad-messaging {
            width: 48vw !important;
            height: 38vw !important;
            max-width: 220px !important;
            max-height: 260px !important;
            object-fit: cover;
            margin-right: 0 !important;
            margin-left: auto !important;
          }
        }
      `}</style>
      <div className="p-4 max-w-md mx-auto -mt-12 sm:mt-0">
        <div className="text-center mt-0 mb-2">
          <h2
            className="text-4xl font-extrabold font-clash mb-2"
            style={{
              background: 'linear-gradient(90deg, #C7F6F8 0%, #87C6F5 50%, #4B8DF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#7bb6f7', // fallback for non-webkit browsers
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
        <div className="mt-3 text-left">
          <button className="text-[#A3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none mb-2">
            Analyze
          </button>
          <h3 className="text-2xl font-bold text-white leading-tight font-sans mb-2">
            AI Tagging
          </h3>
          <p className="text-base text-[#A1A1AA] leading-relaxed font-light mb-6 max-w-xs">
            Instantly tag every creative insight.
          </p>
          <div className="flex flex-col items-center w-full mt-6 mb-2 gap-4">
            <img
              src="/images/Girl-3.png"
              alt="Girl-3"
              className="rounded-xl shadow-2xl mb-2"
              style={{ width: '220px', maxWidth: '80vw', height: 'auto' }}
            />
            <div className="portrait-img-row w-full">
              <img
                src="/images/Ad-Visuals-3.png"
                alt="Ad Visuals"
                className="rounded-xl shadow-xl portrait-ad-visuals"
              />
              <img
                src="/images/Ad-Messaging (1).png"
                alt="Ad Messaging"
                className="rounded-xl shadow-lg portrait-ad-messaging"
              />
            </div>
          </div>
        </div>

        {/* Visualize Section (Mobile) */}
        <div className="mt-14 text-right">
          <button className="text-[#C3A3FF] text-base font-medium px-0 py-0 hover:text-[#B3B3FF] transition-colors duration-200 hover:underline underline-offset-4 bg-transparent border-none mb-2">
            Visualize
          </button>
          <h3 className="text-2xl font-bold text-white leading-tight font-sans mb-2">
            Translate insights into<br />visual reports
          </h3>
          <p className="text-base text-[#A1A1AA] leading-relaxed font-light mb-6 max-w-xs ml-auto">
            Digestible creative reports that the whole team can understand. Eliminate information overload.
          </p>
          <div className="flex justify-center w-full mt-20">
            <img
              src="/images/Big-Visualize-2.png"
              alt="Visualize section image"
              className="rounded-xl shadow-xl"
              style={{ width: '340px', maxWidth: '98vw', height: '160px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Improve Section (Mobile) */}
        <div className="mt-12 text-left">
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
              className="rounded-xl shadow-xl"
              style={{ width: '340px', maxWidth: '98vw', height: '140px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </>
  );
} 