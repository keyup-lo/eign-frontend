import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/About/AboutHeroSection';
import CTASection from '@/components/CTASection';
import OurStorySection from '@/components/About/OurStorySection';
import WhatWeBelieveSection from '@/components/About/WhatWeBelieveSection';
import WhereWeOperateSection from '@/components/About/WhereWeOperateSection';

export default function Home() {
  return (
    <div className='body'>
      <Navbar />
      <AboutHeroSection />
      <OurStorySection />
      <WhatWeBelieveSection />
      <WhereWeOperateSection />
      <CTASection />
      <Footer />
    </div>
  );
}