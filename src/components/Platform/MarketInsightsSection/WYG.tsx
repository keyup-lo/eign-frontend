import Image from 'next/image'
import Link from 'next/link';
import { features } from 'process';

interface WYGProps {
  title: string;
  features: string[];
  button_text: string;
  link_to: string
}

export default function WYG({
  title,
  features,
  button_text,
  link_to
}: WYGProps) {
    return (
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col justify-center items-center w-[90%]">
            <Image
                src="/images/homepage/about_h1.png"
                alt="Company Logo"
                width={60}
                height={60}
                className="cursor-pointer"
            />
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-2 text-gray-600 text-xs font-light mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {feature}
                    </li>
                ))}
            </ul>
            <Link href={link_to}>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm cursor-pointer">
                    {button_text}
                </button>
            </Link>
        </div>
    );
  }