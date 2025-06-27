"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <nav className=''>
      <div className="max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="mx-24 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/nav_logo.png"
                alt="Company Logo"
                width={70}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Products
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border">
                  <Link href="/product1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Product 1
                  </Link>
                  <Link href="/product2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Resources
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border">
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Blog
                  </Link>
                  <Link href="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Documentation
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Log in
            </Link>
            <Link 
              href="/demo" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}