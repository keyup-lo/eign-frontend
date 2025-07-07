import Image from 'next/image'
import '../../styles/core_product/hero-section.css';

export default function CoreProductHero() {
    return (
      <div className="h-screen bg-blue-700 text-white overflow-hidden flex items-center">
        <div className="holder max-w-7xl mx-20 px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-center gap-20">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight">
                  The Core of Eign's <span className="text-emerald-400">Intelligence</span>
                </h1>
                <h2 className="text-3xl leading-tight">
                  8 Indexes. 50+ Indicators. One Powerful Engine.
                </h2>
              </div>
  
              {/* Description Paragraphs */}
              <div className="space-y-6 text-blue-100">
                <p className="leading-relaxed">
                  Eign's location intelligence engine analyzes millions of data points daily — across mobility, infrastructure, land use, environment, market signals, and more.
                </p>
                
                <p className="leading-relaxed">
                  These inputs are synthesized into 8 AI-powered indexes, each built from 5 to 12 weighted indicators.
                </p>
                
                <p className="leading-relaxed">
                  They're continuously updated, explainable, and designed to reflect how people truly live, move, work, and invest in a place.
                </p>
              </div>
  
              {/* CTA Button */}
              <button className="bg-emerald-400 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Intelligence Dashboard */}
            <Image
              src="/images/core_product/core_hero.png"
              alt="Company Logo"
              width={400}
              height={100}
              className="hero_img cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }