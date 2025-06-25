export default function CTASection() {
    return (
      <div className="h-[70vh] relative overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/images/backgrounds/cta-background.jpg')"}}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            
            {/* Badge */}
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">Localized. Optimized.</span>
            </div>
  
            {/* Subheading */}
            <h3 className="text-white text-xl lg:text-2xl font-medium">
              Power Every Decision with Intelligence
            </h3>
  
            {/* Main Heading */}
            <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
              Trusted by decision-makers shaping the future of cities and property.
            </h2>
  
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2 group">
                <span>Request a Demo</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Decorative Elements - Left buildings */}
        <div className="absolute bottom-0 left-0 w-64 h-32 opacity-90">
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-bottom"
            style={{backgroundImage: "url('/images/illustrations/city-left.svg')"}}
          ></div>
        </div>
  
        {/* Decorative Elements - Right people */}
        <div className="absolute bottom-0 right-0 w-64 h-32 opacity-90">
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-bottom"
            style={{backgroundImage: "url('/images/illustrations/people-right.svg')"}}
          ></div>
        </div>
      </div>
    )
  }