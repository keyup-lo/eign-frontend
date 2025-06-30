import Image from 'next/image'

export default function PlatformHeroSection() {
    return (
      <div className="h-[calc(100vh-4rem)] bg-[url('/images/platform/platform_hero_bg.png')] bg-cover bg-center bg-no-repeat text-white overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-16  w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight">
                <span className="text-emerald-400">Location Intelligence </span>
                  for Smarter Real Estate Strategy
                </h1>
              </div>
  
              {/* Description */}
              <p className="text-blue-100 text-md leading-relaxed max-w-lg">
                Eign is an AI-powered platform that transforms real-world data into actionable insight. From location scoring to market analysis, Eign empowers you to build, invest, and plan with confidence — backed by continuously updated hyper-local intelligence.
              </p>
  
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-800 border border-white border-opacity-30 px-6 py-3 rounded-lg font-medium transition-all">
                  Download Sample Report
                </button>
              </div>
            </div>
  
            {/* Right Side - Widget Cards */}
            <div className="flex flex-col items-center justify-evenly gap-3">
              <div className="flex items-center justify-between gap-3">
                <Image
                  src="/images/platform/hero_1.png"
                  alt="Company Logo"
                  width={200}
                  height={100}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/platform/hero_2.png"
                  alt="Company Logo"
                  width={200}
                  height={100}
                  className="cursor-pointer"
                />
              </div>
              <div>
              <Image
                  src="/images/platform/hero_3.png"
                  alt="Company Logo"
                  width={404}
                  height={100}
                  className="cursor-pointer mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }