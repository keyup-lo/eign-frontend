import Image from 'next/image'
import WYG from './MarketInsightsSection/WYG';
import WhoUses from './MarketInsightsSection/WhoUses';

export default function MarketInsightsSection() {
    const dataEngineFeatures = [
      "Government & open platform (zoning research automation)",
      "Satellite feeds (NDVI, coastlines, land use)",
      "Google APIs, OSM, GTFS, OpenAQ",
      "Real estate CRMs and listing pipelines"
    ];
  
    const aiModelingFeatures = [
      "Built with domain-specific logic",
      "Weighted based on urban behaviour patterns",
      "Calibrated for interpretability",
      "Continuously referenced with live data"
    ];
  
    const insightDeliveryFeatures = [
      "Visual exploration, exports, reporting",
      "Search ranking, pricing, valuation tools",
      "Add scorecards or map overlays to your product or site"
    ];
  
    const userTypes = [
      {
        title: "Platforms",
        description: "Enrich listings and drive smarter search",
        icon: "🌐"
      },
      {
        title: "Developers",
        description: "Compare plots, plan more effectively",
        icon: "🏗️"
      },
      {
        title: "Investors",
        description: "Rank neighborhoods and assess with confidence",
        icon: "📈"
      },
      {
        title: "Planners",
        description: "Align infrastructure with real-world indicators",
        icon: "📋"
      },
      {
        title: "Product Teams",
        description: "Launch features powered by urban intelligence",
        icon: "⚙️"
      }
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - Market Stats and Insights */}
          <div className="flex items-center justify-center gap-8 mb-10">
            
            {/* Left - Market Stats Card */}
            <div className="bg-blue-100 rounded-xl p-6 w-[25%]">
              <p className="text-gray-600 text-xs font-normal mb-4">Data</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-12">
                Flexible Market Stats that Enhance User Experience
              </h3>
              <Image
                src="/images/platform/mis.png"
                alt="Company Logo"
                width={350}
                height={100}
                className="cursor-pointer"
              />
            </div>
  
            {/* Right - Powerful Market Insights */}
            <div className="bg-blue-700 rounded-2xl p-8 text-white flex flex-col items-center justify-center w-[45%] h-[25em]">
              <h3 className="text-3xl font-bold mb-6">
                Powerful Market <span className="text-blue-100 font-normal">Insights</span>
              </h3>
              <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors w-fit">
                Book a Demo
              </button>
            </div>
          </div>
  
          {/* What you get Section */}
          <div className="mb-20 mx-30">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">What you get</h2>
            
            <div className="flex items-center justify-center gap-5">
              
              {/* Data Engine */}
              <WYG
                title="Data Engine"
                features={dataEngineFeatures}
                button_text="See Our Sources" />

              <WYG
                title="AI Modeling"
                features={aiModelingFeatures}
                button_text="Explore the Indexes" />
              
              <WYG
                title="Insight Delivery"
                features={insightDeliveryFeatures}
                button_text="Request Access" />
            </div>
          </div>
  
          {/* Who Uses Eign Section */}
          <div>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Who Uses Eign</h2>
            
            <div className="flex justify-center items-center gap-5">
              
              {/* Left - User Types */}
              <div className="space-y-4">
                {userTypes.map((userType, index) => (
                  <WhoUses
                    key={index}
                    title={userType.title}
                    description={userType.description} />
                  
                ))}
              </div>
  
              {/* Right - Demo Image */}
              <Image
                  src="/images/platform/who_uses.png"
                  alt="Company Logo"
                  width={550}
                  height={500}
                  className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }