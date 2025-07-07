import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Homepage/HeroSection';
import AboutSection from '@/components/Homepage/AboutSection';
import HowItWorksSection from '@/components/Homepage/HowItWorksSection';
import LocalContentSection from '@/components/LocalContentSection';
import IndexesSection from '@/components/Homepage/IndexesSection';
import WhoWeServeSection from '@/components/Homepage/WhoWeServeSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import '../styles/homepage/page.css';

export default function Home() {
  return (
    <div className='body'>
      <div className="h-screen bg-[url('/images/homepage/home_bg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <AboutSection />
      <HowItWorksSection />
      <div className='lcs'>
        <LocalContentSection />
      </div>
      <IndexesSection />
      <WhoWeServeSection />
      <CTASection />
      <Footer />
    </div>
  );
}