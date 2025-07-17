import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import '../../styles/widget/page.css';
import LocationWidget from '../../../../eign-widget/widget/src/components/LocationWidget';

export default function Home() {
  return (
    <div className='body'>
        <Navbar />
        <form className='my-10 flex items-center justify-center gap-20'>
          <input type='text' placeholder='Search for an address, neighborhood or city' />
          <button>View Location</button>
        </form>
        <h1>252 Phillip Street, Waterloo, ON</h1>
        <LocationWidget location={'Sheikh Zayed Road (south), Dubai, United Arab Emirates'} />
        <CTASection />
        <Footer />
    </div>
  );
}