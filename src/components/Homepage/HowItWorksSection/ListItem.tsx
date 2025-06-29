import Image from 'next/image'

interface ItemsProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  main_text: string;
}

export default function ListItem({ 
  imageSrc,
  imageAlt = "icon",
  title,
  main_text
}: ItemsProps) {
    return (
      <div className="flex gap-2">
        <Image
            src={imageSrc}
            alt="Company Logo"
            width={60}
            height={60}
            className="cursor-pointer"
        />
        <div className='flex flex-col'>
            <h2 className='font-medium text-xl'>{title}</h2>
            <p className='font-light'>{main_text}</p>
        </div>

      </div>
    );
  }