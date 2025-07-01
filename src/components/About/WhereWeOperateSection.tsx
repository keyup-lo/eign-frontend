import Image from 'next/image'

export default function WhereWeOperateSection() {
    return (
      <div className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-20">
          <div className="flex justify-center items-center gap-10">
            
            {/* Left Side - Image */}
            <Image
              src="/images/about/operate.png"
              alt="Company Logo"
              width={500}
              height={100}
              className="cursor-pointer rounded-lg mb-8"
            />
  
            {/* Right Side - Content */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl lg:text-4xl">
                Where We Operate
              </h2>
              
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  Eign is currently focused on high-growth cities across the MENA region — a vital hub, ripe for real-time insights, and home to some of the world's most dynamic markets.
                </p>
                
                <p>
                  At Eign, we're looking to collaborate with innovators, investors, and change-makers who share our commitment to building data-informed cities. If you're shaping the places people live, invest, or grow — let's do it together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }