import Image from 'next/image'
import WWS from './WhoWeServeSection/WWS';

export default function WhoWeServeSection() {
    return (
      <div className="h-screen bg-[url('/images/homepage/dev_area.png')] bg-cover bg-center bg-no-repeat">
  
        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-7xl mx-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              
              {/* Left Side - Header */}
              <div className="text-white space-y-6">
                {/* Badge */}
                <div className="inline-block bg-blue-200 bg-opacity-20 rounded px-4 py-2">
                  <span className="text-blue-700 text-sm font-medium">Behind the Platform</span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-3xl font-normal text-white">
                  Who We Serve
                </h2>

                <Image
                  src="/images/homepage/wws_house.png"
                  alt="Company Logo"
                  width={400}
                  height={400}
                  className="cursor-pointer"
                />
              </div>
  
              {/* Right Side - Service Cards */}
              <div className="space-y-4 w-107 px-8 py-8 outline outline-green-300 backdrop-blur-md rounded-lg">
                <WWS 
                imageSrc="/images/homepage/wws_1.png"
                main_text='Real estate developers for site selection and pricing'/>
                <WWS 
                imageSrc="/images/homepage/wws_2.png"
                main_text='Platforms for enhanced search, discovery, and mapping'/>
                <WWS 
                imageSrc="/images/homepage/wws_3.png"
                main_text='Investors for portfolio analysis and yield targeting'/>
                <WWS 
                imageSrc="/images/homepage/wws_4.png"
                main_text='Planners and municipalities for smart infrastructure decisions'/>
                <WWS 
                imageSrc="/images/homepage/wws_5.png"
                main_text='Proptech teams for integrated intelligence in apps and tools'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }