import Image from 'next/image'
import '../../../styles/homepage/indexes/indexes.css';

interface IndexProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  main_text: string;
}

export default function Index({ 
  imageSrc,
  imageAlt = "icon",
  title,
  main_text
}: IndexProps) {
    return (
      <div className='index bg-blue-50 flex items-center justify-evenly h-22 w-128 rounded-md outline outline-blue-100'>
        <Image
            src={imageSrc}
            alt={imageAlt}
            width={60}
            height={60}
            className='index-img'
        />
        <div className='index-text w-96'>
            <h2 className='font-medium text-xl'>{title}</h2>
            <p className='font-light text-xs'>{main_text}</p>
        </div>
      </div>
    );
  }