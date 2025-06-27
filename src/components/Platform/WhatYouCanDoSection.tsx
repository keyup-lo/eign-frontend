export default function WhatYouCanDoSection() {
    const features = [
      {
        icon: "📍",
        text: "Score parcels and neighborhoods instantly"
      },
      {
        icon: "📊",
        text: "Compare multiple sites with AI-powered data"
      },
      {
        icon: "🔍",
        text: "Surface key insights around livability, investment readiness, green space, and more"
      },
      {
        icon: "🌐",
        text: "Enrich your discovery UX with real-time location content"
      },
      {
        icon: "🔧",
        text: "Integrate location scoring into your own platform or decision tools"
      }
    ];
  
    return (
      <div className="h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block bg-emerald-500 text-white rounded-full px-4 py-2">
                <span className="text-sm font-medium">Behind the Platform</span>
              </div>
  
              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What You Can Do with Eign
              </h2>
  
              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{feature.icon}</span>
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Side - Widget/Map Preview */}
            <div className="flex items-center justify-center">
              <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
                
                {/* Map Background */}
                <div className="relative mb-6">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg"
                    style={{backgroundImage: "url('/images/maps/platform-map.jpg')"}}
                  >
                    {/* Blue location pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Progress bars overlay */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="bg-white bg-opacity-90 rounded px-2 py-1">
                        <div className="w-16 h-2 bg-emerald-500 rounded"></div>
                      </div>
                      <div className="bg-white bg-opacity-90 rounded px-2 py-1">
                        <div className="w-12 h-2 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Near by Area Section */}
                <div>
                  <h3 className="text-gray-700 font-medium mb-4">Near by Area</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">🛒</span>
                        <span className="text-gray-700">Grocery</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        8.1
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">🛍️</span>
                        <span className="text-gray-700">Shopping</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        7.4
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">🍽️</span>
                        <span className="text-gray-700">Restaurant</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        9.2
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">☕</span>
                        <span className="text-gray-700">Cafe</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        6.8
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