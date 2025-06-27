export default function ScoringMethodologySection() {
    const methodologyPoints = [
      {
        icon: "📊",
        text: "Each index contains 5 to 12 weighted indicators"
      },
      {
        icon: "📈",
        text: "Scores range from 0 to 10"
      },
      {
        icon: "🔄",
        text: "Continuously updated using live, verified sources"
      },
      {
        icon: "🧠",
        text: "AI-trained to reflect dynamic urban behavior — not static metrics"
      },
      {
        icon: "🔧",
        text: "Fully accessible via Dashboard, API, or Embeddable components"
      }
    ];
  
    return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block bg-emerald-500 text-white rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium">Scores</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Scoring Methodology
                </h2>
              </div>
  
              {/* Methodology Points */}
              <div className="space-y-4">
                {methodologyPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{point.icon}</span>
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Side - Scoring Dashboard Preview */}
            <div className="flex items-center justify-center">
              <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
                
                {/* Map Background */}
                <div className="relative mb-6">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg"
                    style={{backgroundImage: "url('/images/core/scoring-map.jpg')"}}
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
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Grocery</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        8.7
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Shopping</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        7.4
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Restaurant</span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-sm font-bold flex items-center justify-center">
                        7.2
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
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