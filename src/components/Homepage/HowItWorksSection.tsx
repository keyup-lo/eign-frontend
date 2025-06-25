export default function HowItWorksSection() {
    return (
      <div className="h-screen bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium">Behind the Platform</span>
                </div>
                <h2 className="text-5xl font-bold text-white">How It Works</h2>
              </div>
  
              {/* Feature List */}
              <div className="space-y-8">
                
                {/* Built for Proptech */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Built for Proptech</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Eign integrates seamlessly into your platform or workflow via dashboard, API, or map widgets.
                    </p>
                  </div>
                </div>
  
                {/* Powered by AI */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Powered by AI</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our models interpret over 50 urban indicators using context-aware algorithms tuned for city dynamics.
                    </p>
                  </div>
                </div>
  
                {/* Designed for People */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 1a8 8 0 100 16A8 8 0 009 1zM7 16.93a8.001 8.001 0 004 0A6.001 6.001 0 007 16.93z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Designed for People</h3>
                    <p className="text-blue-100 leading-relaxed">
                      From intuitive scorecards to interactive maps, we make complex data accessible and easy to act on.
                    </p>
                  </div>
                </div>
  
                {/* Data You Can Trust */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Data You Can Trust</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our insights are built from verified sources like Google, OpenStreetMap, KFDA, satellite imagery, city data, and more — all processed through secure ETL pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Side - Map/Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Main map/aerial view image */}
                <div 
                  className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-2xl shadow-2xl"
                  style={{backgroundImage: "url('/images/hello.jpg')"}}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }