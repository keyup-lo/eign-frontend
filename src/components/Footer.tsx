import Image from 'next/image'
import Link from 'next/link'
import '../styles/footer.css';


export default function Footer() {
    return (
      <footer className="bg-blue-50 py-16 px-24 flex flex-col gap-10">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/nav_logo.png"
              alt="Company Logo"
              width={70}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className='flex justify-between align-center'>
          <div className='hidediv flex flex-col align-center gap-2'>
            <h2 className='font-medium text-green-400'>Solutions</h2>
            <Link className='font-medium 'href='/'>Use Case</Link>
            <Link className='font-medium 'href='/'>Products</Link>
            <Link className='font-medium 'href='/'>Industries</Link>
            <Link className='font-medium 'href='/'>APIs</Link>
          </div>
          <div className='hidediv flex flex-col align-center gap-2'>
            <h2 className='font-medium text-green-400'>Resources</h2>
            <Link className='font-medium 'href='/blog'>Blog</Link>
            <Link className='font-medium 'href='/'>Case Studies</Link>
            <Link className='font-medium 'href='/'>News</Link>
          </div>
          <div className='hidediv flex flex-col align-center gap-2'>
            <h2 className='font-medium text-green-400'>About</h2>
            <Link className='font-medium 'href='/'>Company</Link>
            <Link className='font-medium 'href='/'>Data</Link>
            <Link className='font-medium 'href='/'>Customers</Link>
            <Link className='font-medium 'href='/'>Events</Link>
            <Link className='font-medium 'href='/'>Careers</Link>
          </div>
          <div className='hidediv flex flex-col align-center gap-2'>
            <h2 className='font-medium text-green-400'>Developers</h2>
            <Link className='font-medium 'href='/'>Documentation</Link>
            <Link className='font-medium 'href='/'>Support</Link>
            <Link className='font-medium 'href='/'>Privacy Policy</Link>
            <Link className='font-medium 'href='/'>Terms and Conditions</Link>
          </div>
          <div className='showdiv flex flex-col align-center gap-2'>
            <h2 className='font-medium text-green-400'>Quick Links</h2>
            <Link className='font-medium 'href='/about_us'>About us</Link>
            <Link className='font-medium 'href='/core_product'>Product</Link>
            <Link className='font-medium 'href='/platform'>Platform</Link>
            <Link className='font-medium 'href='/contact'>Contact</Link>
            <Link className='font-medium 'href='/blog'>Blog</Link>
          </div>
        </div>
        <div className='flex align-center justify-between w-[45%]'>
          <p className='text-gray-500 font-medium'>&copy; 2025 Eign</p>
          <p className='hide text-gray-500 font-medium'>Terms & conditions</p>
          <p className='hide text-gray-500 font-medium'>Privacy</p>
          <p className='hide'>🍪 Cookies</p>
        </div>

        
      </footer>
    )
  }