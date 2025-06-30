import Image from 'next/image'

interface WWSProps {
  imageSrc: string;
  imageAlt?: string;
  main_text: string;
}

export default function WWS({ 
  imageSrc,
  imageAlt = "icon",
  main_text
}: WWSProps) {
    return (
      <div className='bg-blue-50 flex items-center justify-center gap-5 h-22 w-90 rounded-md outline outline-blue-100'>
        <Image
            src={imageSrc}
            alt={imageAlt}
            width={60}
            height={60}
        />
        <div className='w-60'>
            <p className='font-medium text-sm'>{main_text}</p>
        </div>
      </div>
    );
  }