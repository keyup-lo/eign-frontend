export default function ContactHeroSection() {
    return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Get in Touch
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Let's build <span className="text-blue-600">smarter cities</span>,
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  together.
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Whether you're looking to integrate location intelligence into your platform, network, or partnership, or simply learn more — we'd love to hear from you.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Image with decorative elements */}
            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-lg"
                  style={{backgroundImage: "url('/images/contact/modern-cityscape.jpg')"}}
                />
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-4 right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
              
              {/* Floating chat bubble */}
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Small decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-1 w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }