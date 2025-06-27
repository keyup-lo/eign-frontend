export default function WhereWeOperateSection() {
    return (
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="relative">
              <div className="bg-white bg-opacity-20 rounded-2xl p-4">
                <div 
                  className="w-full h-64 lg:h-80 bg-cover bg-center rounded-xl"
                  style={{backgroundImage: "url('/images/about/mena-architecture.jpg')"}}
                />
              </div>
            </div>
  
            {/* Right Side - Content */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Where We Operate
              </h2>
              
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  Eign is currently focused on high-growth cities across the MENA region — a vital hub, ripe for real-time insights, and home to some of the world's most dynamic markets.
                </p>
                
                <p>
                  At Eign, we're looking to collaborate with innovators, investors, and change-makers who share our commitment to building data-informed cities. If you're shaping the places people live, invest, or grow — let's do it together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }