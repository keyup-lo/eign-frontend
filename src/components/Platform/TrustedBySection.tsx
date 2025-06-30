import Image from 'next/image'

export default function TrustedBySection() {
    const companies = [
      { img: "/images/platform/fathom.png"},
      { img: "/images/platform/videoask.png"},
      { img: "/images/platform/krisp.png"},
      { img: "/images/platform/maze.png"},
      { img: "/images/platform/outreach.png"},
      { img: "/images/platform/feedly.png"}
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Text */}
          <div className="text-center mb-12">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              Trusted by forward-thinking teams in real estate,
              <br />
              planning, and proptech
            </p>
          </div>
  
          {/* Company Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <Image
                key={index}
                src={company.img}
                alt="Company Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }