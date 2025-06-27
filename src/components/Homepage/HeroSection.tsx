"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [searchLocation, setSearchLocation] = useState('Dubai, UAE')

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden flex flex-col">      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-24 px-4 sm:px-6 lg:px-8 flex-1 flex items-start pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">          
          {/* Left Content - Text and Search */}
          <div className="space-y-6">
            {/* Badge */}
            <Image
              src="/images/homepage/home_badge.png"
              alt="Company Logo"
              width={200}
              height={100}
              className="cursor-pointer"
            />

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-normal leading-tight">
                The <span className="text-blue-700">Intelligence</span> Behind
                <br />
                Every Location
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-500 font-normal text-sm leading-relaxed max-w-lg">
              Eign is an AI-powered location intelligence platform that transforms real-world data into powerful insights for real estate decision-makers. We turn cities into data-rich environments so you can build, invest, and plan with unmatched confidence.
            </p>

            {/* Search Bar */}
            <div className="space-y-3">
              <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-md">
                <div className="flex items-center px-4 py-3 flex-1">
                  <Image
                    src="/images/homepage/home_search_icon.png"
                    alt="Company Logo"
                    width={13}
                    height={13}
                  />
                  <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-500 mx-2"
                    placeholder="Enter location"
                  />
                </div>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-medium transition-colors cursor-pointer">
                  Search
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                Type an address to see scores, insights, and location value in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}