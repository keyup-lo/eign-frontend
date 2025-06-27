import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPage from '@/components/Blog/BlogPage';

export default function Home() {
  return (
    <div className='body'>
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  );
}