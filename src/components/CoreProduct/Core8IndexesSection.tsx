export default function Core8IndexesSection() {
    const indexes = [
      {
        title: "Living Index",
        icon: "🏠",
        measures: "Attractiveness of a location for property investors.",
        includes: [
          "Pharmacy density, clinics, supermarkets, convenience, grocery access, healthcare, dentist, leisure availability and walkable services."
        ],
        details: "A blended score combining 8 indicators tied to livability and access to basic services."
      },
      {
        title: "Mobility Index", 
        icon: "🚗",
        measures: "How easily people move within and around the area.",
        includes: [
          "Bus, metro and train proximity, walkability, intersection density, commute times, GTFS transit data, and road connectivity."
        ],
        details: "Powered by 10+ signals from transport feeds, satellite networks, and street-level infrastructure."
      },
      {
        title: "Green Living Index",
        icon: "🌳", 
        measures: "Access to nature and environmental health.",
        includes: [
          "NDVI vegetation scoring, park proximity, air quality, urban heat, and tree canopy density."
        ],
        details: "Powered by 10+ signals from transport feeds, satellite networks, and street-level infrastructure."
      },
      {
        title: "Family-Friendliness Index",
        icon: "👨‍👩‍👧‍👦",
        measures: "How supportive a neighborhood is for families and children.",
        includes: [
          "Nursery and school availability, safety score, childcare proximity, playgrounds, and education quality ratings (e.g., KHDA)."
        ],
        details: "A composite score from 7 family-focused metrics."
      },
      {
        title: "Investment Readiness Index",
        icon: "💰",
        measures: "Attractiveness of a location for property investors.",
        includes: [
          "Measures attractiveness of a location for property investors. Includes transaction volume, price growth, yield potential, rental demand, market liquidity, and development activity."
        ],
        details: "Informed by CRM data, government property feeds, and pricing APIs."
      },
      {
        title: "Commercial Viability Index",
        icon: "🏢",
        measures: "Business potential, workforce reach, and commercial density.",
        includes: [
          "Nearby offices, retail clusters, job catchment area, commercial zoning, and mixed-use integration."
        ],
        details: "Built to serve B2B, C2C, and retail network planning."
      },
      {
        title: "Cultural & Lifestyle Index",
        icon: "🎭",
        measures: "Vibrancy and social experience of a place.",
        includes: [
          "Cafes, restaurants, gyms, event venues, nightlife, art, and leisure destinations."
        ],
        details: "Reflects energy and diversity drawn from Google Places and open POI networks."
      },
      {
        title: "Development Potential Index",
        icon: "🏗️",
        measures: "Land readiness and future infrastructure.",
        includes: [
          "Land use zoning, vacant land access, construction trends, nearby megaprojects, and regulatory data."
        ],
        details: "Designed to support planners, developers, and long-term investors."
      }
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-500 text-white rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">Intelligence</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">8 Indexes</h2>
          </div>
  
          {/* Indexes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indexes.map((index, i) => (
              <div 
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xl">{index.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {index.title}
                    </h3>
                  </div>
                </div>
  
                {/* What it measures */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">What it measures:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {index.measures}
                  </p>
                </div>
  
                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                  <div className="space-y-1">
                    {index.includes.map((item, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
  
                {/* Details */}
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-500 text-xs leading-relaxed italic">
                    {index.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }