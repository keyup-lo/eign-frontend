import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPage from '@/components/Blog/BlogPage';
import CTASection from '@/components/CTASection';
import ContactHeroSection from '@/components/Contact/ContactHeroSection';
import ContactFormSection from '@/components/Contact/ContactFormSection';

export default function Home() {
  return (
    <div className='body bg-white'>
      <Navbar />
      <ContactHeroSection />
      <div id="contact-form">
        <ContactFormSection/>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}