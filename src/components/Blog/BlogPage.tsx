import Image from 'next/image'

export default function BlogPage() {
  
    return (
      <div className=' mx-15 py-10'>
        <div className='flex mb-10'>
          <div>
            <h2 className='font-bold text-3xl mb-5'>Welcome to Eign blog</h2>
            <p className='font-light text-sm'>Stay on top of announcements and research, find media assets, and learn about our experts</p>
          </div>
        </div>
        <div className="grid grid-cols-[2.5fr_1fr] gap-4">
          
          {/** Larger side */}
          <div className="">
            <Image
              src="/images/hello.jpg"
              alt="Company Logo"
              width={700}
              height={100}
              className="cursor-pointer rounded-lg"
            />
            <div className='text-emerald-500 flex justify-between items-center w-[50%] text-xs font-semibold my-3'>
              <p><span className="mr-2">•</span>Buy Guide</p>
              <p><span className="mr-2">•</span>Feburary 17, 2018</p>
              <p><span className="mr-2">•</span>5 min read</p>
            </div>
            <h2 className='text-gray-800 font-bold text-4xl my-3'>Anyone can hold the helm when the sea is calm</h2>
            <p className='text-gray-700 font-light text-sm my-4'>Find home first, Tour homes fast with a our agent, you can stay ahed of other buyers to get the right home. Creating a wireframe for a mobile app comes .</p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
               Read More
            </button>
          </div>

          {/** Smaller side */}
          <div className="">
            <h1 className='font-bold text-lg'>Other Stories</h1>
          </div>
        </div>
      </div>
    )
  }