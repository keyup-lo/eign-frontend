export default function PlatformHeroSection() {
    return (
      <div className="h-[calc(100vh-4rem)] bg-blue-600 text-white overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Location Intelligence <span className="text-emerald-400">for</span>
                  <br />
                  Smarter Real Estate Strategy
                </h1>
              </div>
  
              {/* Description */}
              <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                Eign is an AI-powered platform that transforms real-world data into actionable insight. From location scoring to market analysis, Eign empowers you to build, invest, and plan with confidence — backed by continuously updated hyper-local intelligence.
              </p>
  
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Book a Demo
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 px-6 py-3 rounded-lg font-medium transition-all">
                  Download Sample Report
                </button>
              </div>
            </div>
  
            {/* Right Side - Widget Cards */}
            <div className="relative">
              <div className="space-y-6">
                
                {/* Top Row - Price Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Median Sale Price Card */}
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-gray-600 text-sm mb-2">Median sale price</div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$800,000</div>
                    <div className="flex items-center text-emerald-500 text-sm">
                      <span>7.8% increase</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
  
                  {/* Median Price per Square Foot Card */}
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-gray-600 text-sm mb-2">Median price per square foot</div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$1500<span className="text-lg">/sqft</span></div>
                    <div className="flex items-center text-emerald-500 text-sm">
                      <span>5.2% increase</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
  
                {/* Map Card */}
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                    style={{backgroundImage: "url('/images/maps/area-view.jpg')"}}
                  >
                    {/* This is where the map image will be */}
                  </div>
                  
                  {/* Living Benefits */}
                  <div>
                    <div className="text-gray-700 font-medium mb-3">Living benefits of this area</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">🏫</span>
                          <span className="text-gray-700">Elementary Schools</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                          10
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">🎓</span>
                          <span className="text-gray-700">High Schools</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                          8
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">🚗</span>
                          <span className="text-gray-700">Transportation</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                          9
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">🌳</span>
                          <span className="text-gray-700">Nature</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                          6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }