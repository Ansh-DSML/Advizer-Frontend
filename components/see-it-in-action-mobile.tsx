export default function SeeItInActionMobile() {
  return (
    <div className="p-4 text-left max-w-md mx-auto">
      <h2 className="text-4xl font-light mb-4 font-clash">
        <span className="sentence-gradient">
          See It in <span className="animate-gentle-pulse">Action</span>
        </span>
      </h2>
      <p className="text-base text-gray-400 max-w-xl leading-relaxed font-light mb-8" style={{ color: '#A1A1AA' }}>
        A quick tour of the features designed to give you a decisive advantage on Meta.
      </p>

      {/* Analyze Section (Mobile) */}
      <div className="mt-10">
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
            className="rounded-xl shadow-2xl"
            style={{ width: '220px', maxWidth: '80vw', height: 'auto' }}
          />
          <img
            src="/images/Ad-Visuals-3.png"
            alt="Ad Visuals"
            className="rounded-xl shadow-xl"
            style={{ width: '200px', maxWidth: '75vw', height: 'auto', marginTop: '8px' }}
          />
          <img
            src="/images/Ad-Messaging (1).png"
            alt="Ad Messaging"
            className="rounded-xl shadow-lg"
            style={{ width: '180px', maxWidth: '70vw', height: 'auto', marginTop: '8px' }}
          />
        </div>
      </div>
    </div>
  );
} 