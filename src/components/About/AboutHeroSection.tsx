export default function AboutHeroSection() {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                Location Intelligence
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Reimagined for the Modern City
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Learn how Eign transforms real estate decision-making with AI-powered data and best-in-class, analytics across cities in the MENA region.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/about/modern-architecture.jpg')"}}
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute top-4 right-4 w-full h-full bg-blue-600 rounded-2xl -z-10"></div>
              {/* Map pattern overlay */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                  <defs>
                    <pattern id="map-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="10" cy="10" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#map-pattern)"/>
                </svg>
              </div>
            </div>
          </div>
  
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <div 
                  className="w-full h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/about/city-skyline.jpg')"}}
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute top-4 left-4 w-full h-full bg-gray-300 rounded-2xl -z-10"></div>
              {/* Map pattern overlay */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                  <defs>
                    <pattern id="map-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="10" cy="10" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#map-pattern-2)"/>
                </svg>
              </div>
            </div>
  
            {/* Right Side - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower real estate, planning and investment teams with the intelligence they need to understand and shape the places we live work, and grow.
              </p>
            </div>
          </div>
  
          {/* Our Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where every location decision is data-driven, human-centered, and built on trust.
              </p>
            </div>
  
            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/about/architectural-details.jpg')"}}
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute top-4 right-4 w-full h-full bg-emerald-200 rounded-2xl -z-10"></div>
              {/* Map pattern overlay */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                  <defs>
                    <pattern id="map-pattern-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="10" cy="10" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#map-pattern-3)"/>
                </svg>
              </div>
            </div>
          </div>
  
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }