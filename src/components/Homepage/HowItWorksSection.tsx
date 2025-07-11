import Image from 'next/image'
import ListItem from "./HowItWorksSection/ListItem"
import '../../styles/homepage/hiw-section.css';


export default function HowItWorksSection() {
    return (
      <div className="h-screen bg-[url('/images/homepage/hiw_bg.png')] bg-cover bg-center bg-no-repeat text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="hiw-margin max-w-7xl mx-16 w-full">
          <div className="hiw-holder grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="lg:space-y-12 md:space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-block bg-blue-100 bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-blue-800 text-sm font-medium">Behind the Platform</span>
                </div>
                <h2 className="hiw-title text-3xl font-normal text-white">How It Works</h2>
              </div>
  
              {/* Feature List */}
              <div className="feauture-list space-y-4">
                
                <ListItem 
                  imageSrc='/images/homepage/hiw_1.png'
                  title="Built for Proptech"
                  main_text="Eign integrates seamlessly into your platform or workflow via dashboard, API, or map widgets."
                />

                <ListItem
                  imageSrc='/images/homepage/hiw_2.png'
                  title="Powered by AI"
                  main_text="Our models interpret over 50 urban indicators using context-aware algorithms tuned for city dynamics."
                />
                
                <ListItem
                  imageSrc='/images/homepage/hiw_3.png'
                  title="Designed for People"
                  main_text="From intuitive scorecards to interactive maps, we make complex data accessible and easy to act on."
                />

                <ListItem 
                  imageSrc='/images/homepage/data_trust.png'
                  title="Data You Can Trust"
                  main_text="Our insights are built from verified sources like Google, OpenStreetMap, KFDA, satellite imagery, city data, and more — all processed through secure ETL pipelines."
                  w="25%"
                />

              </div>
            </div>
  
            {/* Right Side - Map/Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/homepage/hiw_img.png"
                  alt="Company Logo"
                  width={500}
                  height={500}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }