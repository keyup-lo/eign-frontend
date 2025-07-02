import Image from 'next/image'

interface ItemsProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  main_text: string;
  h?:string;
  w?:string;
}

export default function ListItem({ 
  imageSrc,
  imageAlt = "icon",
  title,
  main_text,
  w = "15%",
  h = "15%"
}: ItemsProps) {
    return (
      <div className="flex justify-center items-center gap-2">
        <Image
            src={imageSrc}
            alt="Company Logo"
            width={100}
            height={100}
            className={`cursor-pointer w-[${w}] h-[${h}]`}
        />
        <div className='flex flex-col'>
          <h2 className='font-medium text-xl'>{title}</h2>
          <p className='font-light'>{main_text}</p>
        </div>

      </div>
    );
  }