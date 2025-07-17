'use client'

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import '../../styles/widget/page.css';
import Image from 'next/image';
import LocationWidget from '@/components/LocationWidget';

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Sheikh Zayed Road (south), Dubai, United Arab Emirates');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchLocation.trim()) {
      setCurrentLocation(searchLocation.trim());
    }
  };

  return (
    <div className='body bg-white'>
        <Navbar />
        <form onSubmit={handleSearch} className='my-10 flex items-center justify-center gap-10'>
          <div className='search_holder'>
            <Image
              src="/images/widget/image.png"
              alt="Company Logo"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder='Search for an address, neighborhood or city' />
          </div>
          <button className='search_button'>View Location</button>
        </form>
        <h1 className='my-10 flex justify-center items-center location_name'>{currentLocation}</h1>
        <LocationWidget location={currentLocation} />
        <CTASection />
        <Footer />
    </div>
  );
}