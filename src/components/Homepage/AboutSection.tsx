export default function AboutSection() {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        {/* What is Eign Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            
            {/* Left Side - Image with overlays */}
            <div className="relative">
              {/* Main building image placeholder */}
              <div className="relative rounded-lg overflow-hidden">
                <div 
                  className="w-full h-96 bg-cover bg-center rounded-lg"
                  style={{backgroundImage: "url('/images/hello.jpg')"}}
                />
                
                {/* Overlay cards - positioned over the image */}
                <div className="absolute inset-0 p-6">
                  {/* Top row cards */}
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🏠</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Living</div>
                      <div className="text-xs text-blue-600 font-bold">8.5</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🚗</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Access</div>
                      <div className="text-xs text-blue-600 font-bold">8.5</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">💰</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Value</div>
                      <div className="text-xs text-blue-600 font-bold">7.5</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">👥</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Community</div>
                      <div className="text-xs text-blue-600 font-bold">6.5</div>
                    </div>
                  </div>
                  
                  {/* Bottom row cards */}
                  <div className="grid grid-cols-4 gap-3 mt-auto">
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🌳</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Nature</div>
                      <div className="text-xs text-blue-600 font-bold">8.0</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🏗️</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Future</div>
                      <div className="text-xs text-blue-600 font-bold">6.0</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🎓</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Education</div>
                      <div className="text-xs text-blue-600 font-bold">7.5</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-lg text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-pink-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🎯</span>
                      </div>
                      <div className="text-xs font-medium text-gray-700">LifeStyle</div>
                      <div className="text-xs text-blue-600 font-bold">7.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
  
              {/* Heading */}
              <h2 className="text-4xl font-bold text-gray-900">
                What is <span className="text-blue-600">Eign</span>?
              </h2>
  
              {/* Description */}
              <p className="text-blue-600 font-medium text-lg">
                Eign is a proptech platform that decodes the complexity of place.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                We use artificial intelligence to analyze dozens of urban indicators, from mobility and livability to green space, education, and infrastructure. These are synthesized into 8 clear indexes that reveal the true potential of any location. Whether you're building, investing, planning, or developing, Eign helps you see every location with clarity and make smarter decisions faster.
              </p>
  
              {/* CTA Button */}
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
  
          {/* What you get Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">What you get</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Data Engine */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">Data Engine</h3>
                
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  We collect verified data from governments, satellites, and APIs through a proprietary pipeline built by top geospatial engineers for high-scale urban analysis.
                </p>
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  See Our Sources
                </button>
              </div>
  
              {/* AI Modeling - Center/Larger */}
              <div className="text-center space-y-6 transform scale-110">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">AI Modeling</h3>
                
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Our AI processes millions of real-time signals across 50+ indicators to generate 8 indexes that reflect real human and urban behavior.
                </p>
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Explore the Indexes
                </button>
              </div>
  
              {/* Insight Delivery */}
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">Insight Delivery</h3>
                
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  We deliver dynamic insights through dashboards, APIs, and embeddable layers, ready to power decisions across platforms, teams, and cities.
                </p>
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }