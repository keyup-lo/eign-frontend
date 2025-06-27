import React from 'react';
import AboutButton from './AboutButton';

interface HouseSVGProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  body: string;
  fill_color: string;
  stroke_color: string;
  title_color: string;
  text_color: string;
  buttonText: string;
}

export default function HouseSVG({ 
  imageSrc,
  imageAlt = "House image",
  title, 
  body,
  fill_color,
  stroke_color,
  title_color,
  text_color,
  buttonText,
}: HouseSVGProps) {
  return (
    <svg width="345" height="354" viewBox="0 0 345 354" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.378 8.2666C163.809 -2.08876 181.191 -2.08876 192.622 8.2666L334.591 136.881C340.899 142.596 344.5 150.726 344.5 159.256V323.358C344.5 340.007 331.053 353.5 314.469 353.5H30.5312C13.9474 353.5 0.500082 340.007 0.5 323.358V159.256C0.5 150.726 4.10093 142.596 10.4092 136.881L152.378 8.2666Z" fill={fill_color} stroke={stroke_color}/>
        
        
        {/* Image area - positioned in the upper part of the house */}
        <foreignObject x='0' y='0' width='345' height='354'>
            <div className='flex flex-col items-center justify-evenly h-[354px] px-8 py-7'>
                <img 
                    src={imageSrc}
                    alt={imageAlt}
                    width={50}
                    height={50}
                />
                <p className='font-medium text-xl' style={{ color: title_color}}>
                    {title}
                </p>
                <p className="text-sm font-light text-gray-600" style={{ color: text_color}}>
                    {body}
                </p>
                <AboutButton>{buttonText}</AboutButton>
            </div>
        </foreignObject>
    </svg>


  );
}