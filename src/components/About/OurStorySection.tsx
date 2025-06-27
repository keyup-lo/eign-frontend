export default function OurStorySection() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Image */}
          <div className="relative mb-16">
            {/* Decorative blue circle - top left */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-600 rounded-full z-0"></div>
            
            {/* Main image */}
            <div className="relative z-10">
              <div 
                className="w-full h-64 lg:h-80 bg-cover bg-center rounded-b-[3rem] shadow-lg"
                style={{backgroundImage: "url('/images/about/city-aerial-view.jpg')"}}
              />
            </div>
            
            {/* Decorative light purple circle - bottom right */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full z-0"></div>
          </div>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Eign was born from a simple, powerful idea: real estate shouldn't rely on guesswork.
                </p>
                
                <p>
                  In fast-growing cities across the MENA region, location data is fragmented, outdated, or simply invisible. As urban transformation accelerates, decision-makers need better tools.
                </p>
                
                <p>
                  So we built Eign: a location intelligence engine that translates complexity into insight. Using AI, satellite imaging, and verified local data, we created a comprehensive urban analysis platform that turns into one clear source of truth for location value.
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Today, Eign helps platforms, investors, developers, and planners unlock the full potential of every place — with speed, confidence, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }