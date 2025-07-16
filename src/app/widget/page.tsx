import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import '../../styles/widget/page.css';

export default function Home() {
  return (
    <div className='body'>
        <Navbar />
        <CTASection />
        <Footer />
    </div>
  );
}