export default function MarketInsightsSection() {
    const dataEngineFeatures = [
      "Government & open platform (zoning research automation)",
      "Satellite feeds (NDVI, coastlines, land use)",
      "Google APIs, OSM, GTFS, OpenAQ",
      "Real estate CRMs and listing pipelines"
    ];
  
    const aiModelingFeatures = [
      "Built with domain-specific logic",
      "Weighted based on urban behaviour patterns",
      "Calibrated for interpretability",
      "Continuously referenced with live data"
    ];
  
    const insightDeliveryFeatures = [
      "Visual exploration, exports, reporting",
      "Search ranking, pricing, valuation tools",
      "Add scorecards or map overlays to your product or site"
    ];
  
    const userTypes = [
      {
        title: "Platforms",
        description: "Enrich listings and drive smarter search",
        icon: "🌐"
      },
      {
        title: "Developers",
        description: "Compare plots, plan more effectively",
        icon: "🏗️"
      },
      {
        title: "Investors",
        description: "Rank neighborhoods and assess with confidence",
        icon: "📈"
      },
      {
        title: "Planners",
        description: "Align infrastructure with real-world indicators",
        icon: "📋"
      },
      {
        title: "Product Teams",
        description: "Launch features powered by urban intelligence",
        icon: "⚙️"
      }
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - Market Stats and Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            
            {/* Left - Market Stats Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-blue-600 text-sm font-medium mb-4">Data</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Flexible Market Stats that Enhance User Experience
              </h3>
              <div 
                className="w-full h-32 bg-cover bg-center rounded-lg"
                style={{backgroundImage: "url('/images/housing/neighborhood.jpg')"}}
              />
            </div>
  
            {/* Right - Powerful Market Insights */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">
                Powerful Market <span className="text-blue-200">Insights</span>
              </h3>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-fit">
                Book a Demo
              </button>
            </div>
          </div>
  
          {/* What you get Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What you get</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Data Engine */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engine</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  {dataEngineFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                  See Our Sources
                </button>
              </div>
  
              {/* AI Modeling */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Modeling</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  {aiModelingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                  Explore the Indexes
                </button>
              </div>
  
              {/* Insight Delivery */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Insight Delivery</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                  {insightDeliveryFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                  Request Access
                </button>
              </div>
            </div>
          </div>
  
          {/* Who Uses Eign Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Who Uses Eign</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - User Types */}
              <div className="space-y-4">
                {userTypes.map((userType, index) => (
                  <div 
                    key={index}
                    className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{userType.icon}</span>
                        <div>
                          <h4 className="font-bold text-blue-900">{userType.title}</h4>
                          <p className="text-blue-700 text-sm">{userType.description}</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Right - Demo Image */}
              <div className="relative">
                <div 
                  className="w-full h-96 bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/demo/platform-demo.jpg')"}}
                >
                  {/* Overlay widget */}
                  <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="text-blue-600 text-sm font-medium mb-2">🔍 One Click Smart Report</div>
                    <div className="text-gray-700 text-sm mb-3">Instantly View Perfect Area Data</div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-emerald-500 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                      <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
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