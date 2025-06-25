export default function LocalContentSection() {
  return (
    <div className="h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      {/* Header - Outside and above everything */}
      <div className="max-w-7xl mx-auto w-full mb-4">
        <div className="text-blue-600 text-sm font-medium mb-2">Local Content</div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-900 font-medium text-lg">Burj Binghatti, Business Bay</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex items-center">
        <div className="relative w-full h-full">
          {/* Background Map */}
          <div 
            className="w-full h-full bg-cover bg-center rounded-2xl shadow-xl"
            style={{backgroundImage: "url('/images/hello.jpg')"}}
          >
            {/* Metrics Widget - Positioned inside the map */}
            <div className="absolute top-8 left-8 bottom-8 bg-white rounded-2xl shadow-xl p-4 w-80 overflow-y-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center space-x-1 px-3 py-2 border-b-2 border-emerald-500">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Living</span>
                </div>
                
                {/* Other category tabs - inactive */}
                {[
                  { name: 'Access', icon: '🚗' },
                  { name: 'Value', icon: '💰' },
                  { name: 'Community', icon: '👥' },
                  { name: 'Nature', icon: '🌳' },
                  { name: 'Future', icon: '🏗️' },
                  { name: 'Education', icon: '🎓' },
                  { name: 'LifeStyle', icon: '🎯' }
                ].map((category) => (
                  <div key={category.name} className="flex items-center space-x-1 px-3 py-2 text-gray-500">
                    <span className="text-xs">{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </div>
                ))}
              </div>

              {/* Near by Area */}
              <div>
                <h3 className="text-gray-700 font-medium mb-4">Near by Area</h3>
                
                {/* Grocery Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                        8.6
                      </div>
                      <span className="text-blue-600 font-medium">Grocery</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    At least one supermarket within a 15-minute walk.
                  </p>
                  
                  {/* Progress bars */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm">This Location</span>
                      <div className="flex-1 mx-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm">Dubai Avg</span>
                      <div className="flex-1 mx-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other categories - collapsed */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                        8.6
                      </div>
                      <span className="text-gray-700 font-medium">Shopping</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                        7.2
                      </div>
                      <span className="text-gray-700 font-medium">Restaurant</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded text-white text-xs font-bold flex items-center justify-center">
                        6.5
                      </div>
                      <span className="text-gray-700 font-medium">Cafe</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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