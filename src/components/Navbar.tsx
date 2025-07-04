"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className=''>
      <div className="max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="nav-container">
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
            <Link href="/about_us" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium lg:text-md">
              About
            </Link>
            <Link href="/core_product" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Product
            </Link>
            <Link href="/platform" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Platform
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Full Screen Mobile Menu Overlay */}
    <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-gray-700 hover:text-red-600 transition-colors z-50"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            href="/" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about_us" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/core_product" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            Product
          </Link>
          <Link 
            href="/platform" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            Platform
          </Link>
          <Link
            href="/contact" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/blog" 
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors transform hover:scale-105"
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </div>
      </div>
    </>
  )
}