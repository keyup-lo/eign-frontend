import Image from 'next/image'
import WWB from './WhatWeBelieve/WWB';
import '../../styles/about/wwb-section.css';

export default function WhatWeBelieveSection() {
    const beliefs = [
      {
        title: "Clarity over complexity",
        description: "Location data should be intuitive, not intimidating.",
      },
      {
        title: "AI with purpose",
        description: "Technology should serve people, not the other way around.",
      },
      {
        title: "Local matters",
        description: "Big decisions are better with local micro-insights. Context is everything.",
      },
      {
        title: "Design for trust",
        description: "Our systems are built to be verifiable, and built for transparency.",
      },
      {
        title: "Impact through insight",
        description: "Making good decisions is what makes great cities.",
      }
    ];
  
    return (
      <div className="wwb_holder bg-white py-16 px-4 sm:px-6 lg:px-8 mx-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900">
              What We Believe
            </h2>
          </div>
  
          {/* Content Grid */}
          <div className="flex justify-center items-center gap-10">
            
            {/* Left Side - Belief Cards */}
            <div className="belief_card space-y-4 w-[50%]">
              {beliefs.map((belief, index) => (
                <WWB 
                  key={index}
                  title={belief.title}
                  description={belief.description}/>
              ))}
            </div>
  
            {/* Right Side - Building Image */}
            <Image
              src="/images/about/building.png"
              alt="Company Logo"
              width={500}
              height={100}
              className="content_img cursor-pointer rounded-lg mb-8 w-[50%]"
            />
          </div>
        </div>
      </div>
    )
  }