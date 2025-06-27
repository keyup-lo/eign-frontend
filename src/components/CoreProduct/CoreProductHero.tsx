export default function CoreProductHero() {
    return (
      <div className="h-screen bg-blue-600 text-white overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  The Core of Eign's <span className="text-emerald-400">Intelligence</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  8 Indexes. 50+ Indicators. One Powerful Engine.
                </h2>
              </div>
  
              {/* Description Paragraphs */}
              <div className="space-y-6 text-blue-100">
                <p className="text-lg leading-relaxed">
                  Eign's location intelligence engine analyzes millions of data points daily — across mobility, infrastructure, land use, environment, market signals, and more.
                </p>
                
                <p className="text-lg leading-relaxed">
                  These inputs are synthesized into 8 AI-powered indexes, each built from 5 to 12 weighted indicators.
                </p>
                
                <p className="text-lg leading-relaxed">
                  They're continuously updated, explainable, and designed to reflect how people truly live, move, work, and invest in a place.
                </p>
              </div>
  
              {/* CTA Button */}
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Intelligence Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                
                {/* Map Area */}
                <div className="relative mb-6">
                  <div 
                    className="w-full h-64 bg-cover bg-center rounded-lg"
                    style={{backgroundImage: "url('/images/core/map-intelligence.jpg')"}}
                  >
                    {/* Floating score badges */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      37
                    </div>
                    
                    <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      50
                    </div>
                    
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      10
                    </div>
                    
                    {/* Transportation badge */}
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Transportation</span>
                        <div className="w-6 h-6 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          70
                        </div>
                      </div>
                    </div>
                    
                    {/* Nature badge */}
                    <div className="absolute bottom-1/3 right-2 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Nature</span>
                        <div className="w-6 h-6 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          85
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-emerald-100 text-sm font-medium">Indicators</div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">8</div>
                    <div className="text-gray-300 text-sm font-medium">Indexes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }