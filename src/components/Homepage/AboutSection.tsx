import Image from 'next/image'
import Link from 'next/link'
import AboutButton from './AboutSection/AboutButton'
import HouseSVG from './AboutSection/House'
import '../../styles/homepage/about-section.css';

export default function AboutSection() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* What is Eign Section */}
        <div className="wie max-w-7xl mx-24">
          <div className="about-top grid grid-cols-1 lg:grid-cols-2 gap-3 items-center mb-24">            
            {/* Left Side - Image with overlays */}
            <div className="relative">
              <Image
                src="/images/homepage/about_indexes.png"
                alt="Company Logo"
                width={400}
                height={400}
                className="cursor-pointer"
              />
            </div>
  
            {/* Right Side - Content */}
            <div className="wie-content space-y-6">
              {/* Icon */}
              <div className='icon-title'>
                <Image
                  src="/images/homepage/wie_home.png"
                  alt="Company Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
    
                {/* Heading */}
                <h2 className="text-3xl font-normal text-gray-900">
                  What is <span className="text-blue-700">Eign</span>?
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-blue-700 font-medium text-sm">
                Eign is a proptech platform that decodes the complexity of place.
              </p>
  
              <p className="text-gray-600 text-sm leading-relaxed">
                We use artificial intelligence to analyze dozens of urban indicators, from mobility and livability to green space, education, and infrastructure. These are synthesized into 8 clear indexes that reveal the true potential of any location. Whether you're building, investing, planning, or developing, Eign helps you see every location with clarity and make smarter decisions faster.
              </p>
  
              {/* CTA Button */}
              <Link href='/contact#contact-form'>
                <AboutButton>Request a Demo</AboutButton>
              </Link>
            </div>
          </div>
  
          {/* What you get Section */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-light text-black mb-14">What you get</h2>
            
            <div className="houses flex items-center justify-center gap-16 max-w-6xl mx-auto">
              
              {/* Data Engine */}
              <HouseSVG
                imageSrc="/images/homepage/about_h1.png"
                imageAlt='date-engine'
                title="Data Engine"
                body="We collect verified data from governments, satellites, and APIs through a proprietary pipeline built by top geospatial engineers for high-scale urban analysis."
                fill_color="#F3F7FF"
                stroke_color="#DDE8FF"
                title_color='black'
                text_color="#4B5563"
                buttonText="See Our Sources"
                link_to='/core_product#indexes'
              />

              <HouseSVG
                imageSrc="/images/homepage/about_h2.png"
                imageAlt='ai-modeling'
                title="AI Modeling"
                body="Our AI processes millions of real-time signals across 50+ indicators to generate 8 indexes that reflect real human and urban behavior."
                fill_color="#0042CC"
                stroke_color="#DDE8FF"
                title_color='white'
                text_color="white"
                buttonText="Explore the Indexes"
                link_to='/core_product#indexes'
              />

              <HouseSVG
                imageSrc="/images/homepage/about_h3.png"
                imageAlt='insight-delivery'
                title="Insight Delivery"
                body="We deliver dynamic insights through dashboards, APIs, and embeddable layers, ready to power decisions across platforms, teams, and cities."
                fill_color="#F3F7FF"
                stroke_color="#DDE8FF"
                title_color='black'
                text_color="#4B5563"
                buttonText="Request Access"
                link_to='/contact#contact-form'
              />

            </div>
          </div>
        </div>
      </div>
    )
  }