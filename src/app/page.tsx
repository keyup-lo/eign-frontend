import Navbar from '@/components/Homepage/Navbar';
import HeroSection from '@/components/Homepage/HeroSection';
import AboutSection from '@/components/Homepage/AboutSection';
import HowItWorksSection from '@/components/Homepage/HowItWorksSection';
import LocalContentSection from '@/components/Homepage/LocalContentSection';
import IndexesSection from '@/components/Homepage/IndexesSection';
import WhoWeServeSection from '@/components/Homepage/WhoWeServeSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='body'>
      <div className="h-screen bg-[url('/images/homepage/topimage.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <AboutSection />
      <HowItWorksSection />
      <LocalContentSection />
      <IndexesSection />
      <WhoWeServeSection />
      <CTASection />
      <Footer />
    </div>
  );
}