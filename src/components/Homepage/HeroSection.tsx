"use client"
import { useState } from 'react'

export default function HeroSection() {
  const [searchLocation, setSearchLocation] = useState('Dubai, UAE')

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
      {/* Background Image - positioned to the right */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/images/homepage/hero-background.png')",
            backgroundPosition: 'center right'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content - Text and Search */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium">Location Intelligence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                The <span className="text-blue-600">Intelligence</span> Behind
                <br />
                Every Location
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Eign is an AI-powered location intelligence platform that transforms real-world data into powerful insights for real estate decision-makers. We turn cities into data-rich environments so you can build, invest, and plan with unmatched confidence.
            </p>

            {/* Search Bar */}
            <div className="space-y-3">
              <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-md">
                <div className="flex items-center px-4 py-3 flex-1">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-700"
                    placeholder="Enter location"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors">
                  Search
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                Type an address to see scores, insights, and location value in seconds.
              </p>
            </div>
          </div>

          {/* Right Side - Reserved for Background Image */}
          <div className="hidden lg:block">
            {/* This space is intentionally left for the background image */}
          </div>
        </div>
      </div>
    </div>
  )
}