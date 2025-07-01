import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPage from '@/components/Blog/BlogPage';

export default function Home() {
  return (
    <div className='body'>
      <div className="bg-[url('/images/blog/blog_bg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <BlogPage />
      </div>
      <Footer />
    </div>
  );
}