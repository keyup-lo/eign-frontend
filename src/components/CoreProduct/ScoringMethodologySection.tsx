import Image from 'next/image'

export default function ScoringMethodologySection() {
    const methodologyPoints = [
      {
        icon: "📊",
        text: "Each index contains 5 to 12 weighted indicators"
      },
      {
        icon: "📈",
        text: "Scores range from 0 to 10"
      },
      {
        icon: "🔄",
        text: "Continuously updated using live, verified sources"
      },
      {
        icon: "🧠",
        text: "AI-trained to reflect dynamic urban behavior — not static metrics"
      },
      {
        icon: "🔧",
        text: "Fully accessible via Dashboard, API, or Embeddable components"
      }
    ];
  
    return (
      <div className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-20">
          <div>
            <div className="inline-block bg-emerald-400 text-white rounded px-3 py-1 mb-4">
              <span className="text-sm font-medium">Scores</span>
            </div>
            <h2 className="text-3xl text-gray-900 mb-6">
              Scoring Methodology
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Header */}
              
  
              {/* Methodology Points */}
              <div className="space-y-4">
                {methodologyPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="bg-[#f1f6ff] rounded-lg p-2 border border-gray-100 outline outline-[#bed0f5]"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <Image
                          src="/images/core_product/scoring_icon.png"
                          alt="Company Logo"
                          width={40}
                          height={10}
                          className="cursor-pointer rounded-lg"
                        />
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <Image
              src="/images/core_product/scoring.png"
              alt="Company Logo"
              width={400}
              height={100}
              className="cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }