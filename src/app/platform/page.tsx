import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LocalContentSection from '@/components/LocalContentSection';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Platform/HeroSection';
import MarketInsightsSection from '@/components/Platform/MarketInsightsSection';
import TrustedBySection from '@/components/Platform/TrustedBySection';
import WhatYouCanDoSection from '@/components/Platform/WhatYouCanDoSection';
import '../../styles/platform/page.css';

export default function Platform() {
  return (
    <div className='body'>
      <div className="h-screen bg-white">
        <Navbar />
        <HeroSection />
      </div>
      <TrustedBySection />
      <WhatYouCanDoSection />
      <div className='lcs'>
        <LocalContentSection />
      </div>
      <MarketInsightsSection />
      <CTASection />
      <Footer />
    </div>
  );
}