import Image from 'next/image'
import '../../styles/platform/wycd-section.css';

export default function WhatYouCanDoSection() {
    const features = [
      {
        text: "Score parcels and neighborhoods instantly"
      },
      {
        text: "Compare multiple sites with AI-powered data"
      },
      {
        text: "Surface key insights around livability, investment readiness, green space, and more"
      },
      {
        text: "Enrich your discovery UX with real-time location content"
      },
      {
        text: "Integrate location scoring into your own platform or decision tools"
      }
    ];
  
    return (
      <div className="h-screen bg-[#e8f0ff] py-16 px-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block bg-emerald-400 text-white rounded px-3 py-1">
                <span className="text-sm font-medium">Behind the Platform</span>
              </div>
  
              {/* Heading */}
              <h2 className="text-4xl font-normal text-gray-900 leading-tight">
                What You Can Do with Eign
              </h2>
  
              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-[#f1f6ff] rounded-lg p-2 border border-gray-100 outline outline-[#bed0f5]"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <Image
                          src="/images/platform/w_1.png"
                          alt="Company Logo"
                          width={350}
                          height={100}
                          className="cursor-pointer"
                        />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Side - Widget/Map Preview */}
            <div className="wycd_img flex items-center justify-center">
              <Image
                src="/images/platform/wycd.png"
                alt="Company Logo"
                width={350}
                height={100}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }