import Image from 'next/image'

export default function AboutHeroSection() {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mx-20">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl text-blue-600 leading-tight">
                Location Intelligence
              </h1>
              <h2 className="text-3xl text-gray-900 leading-tight">
                Reimagined for the Modern City
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn how Eign transforms real estate decision-making with AI-powered data and best-in-class, analytics across cities in the MENA region.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Image */}
            <Image
              src="/images/about/about_hero.png"
              alt="Company Logo"
              width={700}
              height={100}
              className="cursor-pointer rounded-lg"
            />
          </div>
  
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mx-20">
            {/* Left Side - Image */}
            <Image
              src="/images/about/mission.png"
              alt="Company Logo"
              width={400}
              height={100}
              className="cursor-pointer rounded-lg"
            />
  
            {/* Right Side - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower real estate, planning and investment teams with the intelligence they need to understand and shape the places we live work, and grow.
              </p>
            </div>
          </div>
  
          {/* Our Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-20">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every location decision is data-driven, human-centered, and built on trust.
              </p>
            </div>
  
            {/* Right Side - Image */}
            <Image
              src="/images/about/vision.png"
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