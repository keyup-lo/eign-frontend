import Index from "./IndexesSection/Indexes";

export default function IndexesSection() {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              Eign transforms raw data into 8 actionable indexes:
            </h2>
          </div>
  
          {/* Indexes Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6">
              <Index
                imageSrc="/images/homepage/index_1.png"
                title="Living Index"
                main_text="Essentials, services, and healthcare"
                />

              <Index
                imageSrc="/images/homepage/index_2.png"
                title="Investment Readiness Index"
                main_text="Market momentum, pricing trends, and returns"
                />

              <Index
                imageSrc="/images/homepage/index_3.png"
                title="Mobility Index"
                main_text="Public transport, road networks, and travel time"
                />

              <Index
                imageSrc="/images/homepage/index_4.png"
                title="Commercial Viability Index"
                main_text="Business access, retail density, and workforce reach"
                />

              <Index
                imageSrc="/images/homepage/index_5.png"
                title="Green Living Index"
                main_text="Parks, NDVI coverage, and environmental quality"
                />

              <Index
                imageSrc="/images/homepage/index_6.png"
                title="Cultural & Lifestyle Index"
                main_text="Food, entertainment, and social vibrancy"
                />

              <Index
                imageSrc="/images/homepage/index_7.png"
                title="Family-Friendliness Index"
                main_text="Safety, education, and access to childcare"
                />

              <Index
                imageSrc="/images/homepage/index_8.png"
                title="Development Potential Index"
                main_text="Location-specific, AI-updated land use, zoning & infrastructure"
                />

          </div>
        </div>
      </div>
    )
  }