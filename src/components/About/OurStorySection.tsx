import Image from 'next/image'
import '../../styles/about/os-section.css';


export default function OurStorySection() {
    return (
      <div className="os_holder bg-white py-16 px-4 sm:px-6 lg:px-8 mx-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Image */}
          <Image
            src="/images/about/ourstory.png"
            alt="Company Logo"
            width={1000}
            height={100}
            className="cursor-pointer rounded-lg mb-8"
          />
  
          {/* Content Section */}
          <div className="content flex justify-evenly items-center gap-10">
            
            {/* Left Column */}
            <div className="content_lc space-y-6 w-[90%]">
              <h2 className="text-3xl text-gray-900">
                Our Story
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className='text-sm'>
                  Eign was born from a simple, powerful idea: real estate shouldn't rely on guesswork.
                </p>
                
                <p className='text-sm'>
                  In fast-growing cities across the MENA region, location data is fragmented, outdated, or simply invisible. As urban transformation accelerates, decision-makers need better tools.
                </p>
                
                <p className='text-sm'>
                  So we built Eign: a location intelligence engine that translates complexity into insight. Using AI, satellite imaging, and verified local data, we created a comprehensive urban analysis platform that turns into one clear source of truth for location value.
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="content_rc space-y-4 text-gray-600 leading-relaxed text-sm w-[80%]">
              <p>
                Today, Eign helps platforms, investors, developers, and planners unlock the full potential of every place — with speed, confidence, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }