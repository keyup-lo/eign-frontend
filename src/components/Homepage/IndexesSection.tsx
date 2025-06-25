export default function IndexesSection() {
    const indexes = [
      {
        title: "Living Index",
        description: "Essentials, services, and healthcare",
        icon: "🏠"
      },
      {
        title: "Investment Readiness Index", 
        description: "Market momentum, pricing trends, and returns",
        icon: "💰"
      },
      {
        title: "Mobility Index",
        description: "Public transport, road networks, and travel time",
        icon: "🚗"
      },
      {
        title: "Commercial Viability Index",
        description: "Business access, retail density, and workforce reach",
        icon: "💼"
      },
      {
        title: "Green Living Index",
        description: "Parks, NDVI coverage, and environmental quality",
        icon: "🌳"
      },
      {
        title: "Cultural & Lifestyle Index",
        description: "Food, entertainment, and social vibrancy",
        icon: "🎭"
      },
      {
        title: "Family-Friendliness Index",
        description: "Safety, education, and access to childcare",
        icon: "👨‍👩‍👧‍👦"
      },
      {
        title: "Development Potential Index",
        description: "Location-specific, AI-updated land use, zoning & infrastructure",
        icon: "🏗️"
      }
    ];
  
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Eign transforms raw data into 8 actionable indexes:
            </h2>
          </div>
  
          {/* Indexes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indexes.map((index, i) => (
              <div 
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">{index.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {index.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {index.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }