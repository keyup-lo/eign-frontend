export default function WhoWeServeSection() {
    const services = [
      {
        title: "Real estate developers for site selection and pricing",
        icon: "🏢"
      },
      {
        title: "Platforms for enhanced search, discovery, and mapping",
        icon: "📍"
      },
      {
        title: "Investors for portfolio analysis and yield targeting",
        icon: "📊"
      },
      {
        title: "Planners and municipalities for smart infrastructure decisions",
        icon: "📋"
      },
      {
        title: "Proptech teams for integrated intelligence in apps and tools",
        icon: "💻"
      }
    ];
  
    return (
      <div className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/images/aerial/development-area.jpg')"}}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Header */}
              <div className="text-white space-y-6">
                {/* Badge */}
                <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium">Behind the Platform</span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-5xl lg:text-6xl font-bold text-white">
                  Who We Serve
                </h2>
              </div>
  
              {/* Right Side - Service Cards */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xl">{service.icon}</span>
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium text-lg leading-relaxed">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }