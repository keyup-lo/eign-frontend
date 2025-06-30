export default function CTASection() {
    return (
      <div className="h-[80vh] bg-[url('/images/cta_bg.png')] bg-cover bg-center bg-no-repeat">
  
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            
            {/* Badge */}
            <div className="inline-block bg-opacity-20 outline outline-blue-100 rounded px-4 py-1">
              <span className="text-white text-xs font-medium">Localized. Optimized.</span>
            </div>
  
            {/* Subheading */}
            <h3 className="text-white text-lg lg:text-2xl font-normal">
              Power Every Decision with Intelligence
            </h3>
  
            {/* Main Heading */}
            <h2 className="text-white text-5xl font-bold leading-tight">
              Trusted by decision-makers shaping the future of cities and property.
            </h2>
  
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-emerald-400 hover:bg-emerald-600 text-white px-7 py-3 rounded-lg text-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2 group">
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
      </div>
    )
  }