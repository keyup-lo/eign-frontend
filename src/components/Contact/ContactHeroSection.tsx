import Image from 'next/image'
import '../../styles/contact/hero-section.css';

export default function ContactHeroSection() {
    return (
      <div className="hero_holder py-4 px-4 sm:px-6 lg:px-8 mx-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl text-gray-900 leading-tight">
                  Get in Touch
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Let's build <span className="text-blue-600">smarter cities</span>,
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  together.
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Whether you're looking to integrate location intelligence into your platform, network, or partnership, or simply learn more — we'd love to hear from you.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
  
            {/* Right Side - Image with decorative elements */}
           <Image
              src="/images/contact/contact_hero.png"
              alt="Company Logo"
              width={500}
              height={100}
              className="side_img cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }