import Image from 'next/image'

export default function Core8IndexesSection() {
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-20">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-400 text-white rounded px-3 py-1 mb-4">
              <span className="text-sm font-medium">Indexes</span>
            </div>
            <h2 className="text-3xl text-gray-900">8 Indexes</h2>
          </div>
  
          <Image
            src="/images/core_product/indexes.png"
            alt="Company Logo"
            width={1000}
            height={100}
            className="cursor-pointer rounded-lg"
          />
        </div>
      </div>
    )
  }