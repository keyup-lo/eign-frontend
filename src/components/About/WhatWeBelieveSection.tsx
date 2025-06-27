export default function WhatWeBelieveSection() {
    const beliefs = [
      {
        title: "Clarity over complexity",
        description: "Location data should be intuitive, not intimidating.",
        bgColor: "bg-gray-100"
      },
      {
        title: "AI with purpose",
        description: "Technology should serve people, not the other way around.",
        bgColor: "bg-blue-100"
      },
      {
        title: "Local matters",
        description: "Big decisions are better with local micro-insights. Context is everything.",
        bgColor: "bg-gray-100"
      },
      {
        title: "Design for trust",
        description: "Our systems are built to be verifiable, and built for transparency.",
        bgColor: "bg-gray-100"
      },
      {
        title: "Impact through insight",
        description: "Making good decisions is what makes great cities.",
        bgColor: "bg-gray-100"
      }
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What We Believe
            </h2>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Belief Cards */}
            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className={`${belief.bgColor} rounded-xl p-4 hover:shadow-md transition-shadow duration-300`}
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Right Side - Building Image */}
            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/about/modern-building.jpg')"}}
                />
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-4 right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
              
              {/* Optional decorative dots pattern */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-10">
                <div className="grid grid-cols-4 gap-1 w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }