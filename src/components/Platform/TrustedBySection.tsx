export default function TrustedBySection() {
    const companies = [
      { name: "Fathom", logo: "🏢" },
      { name: "videoask", logo: "📹" },
      { name: "krisp", logo: "🎵" },
      { name: "maze", logo: "🔄" },
      { name: "Outreach", logo: "💌" },
      { name: "feedly", logo: "📰" }
    ];
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Text */}
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Trusted by forward-thinking teams in real estate,
              <br />
              planning, and proptech
            </p>
          </div>
  
          {/* Company Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                {/* Logo placeholder - replace with actual logos */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl">{company.logo}</span>
                </div>
                {/* Company name */}
                <span className="text-xl font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }