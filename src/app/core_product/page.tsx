import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import CoreProductHero from '@/components/CoreProduct/CoreProductHero';
import Core8IndexesSection from '@/components/CoreProduct/Core8IndexesSection';
import ScoringMethodologySection from '@/components/CoreProduct/ScoringMethodologySection';

export default function Home() {
  return (
    <div className='body'>
      <Navbar />
      <CoreProductHero />
      <div id='indexes'>
        <Core8IndexesSection />
      </div>
      <ScoringMethodologySection />
      <CTASection />
      <Footer />
    </div>
  );
}