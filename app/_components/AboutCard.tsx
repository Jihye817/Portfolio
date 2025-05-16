import Image from 'next/image';
import { useState } from 'react';

interface AboutCardProps {
  index: number;
  item: {
    title: string;
    icon: string;
    text: string;
    link: string;
    color: string;
    backColor: string;
  };
}

function AboutCard({ index, item }: AboutCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (link: string) => {
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank');
      } else if (link.startsWith('mailto:')) {
        window.location.href = link;
      } else if (link.startsWith('download:')) {
        const realPath = link.replace('download:', '');
        const a = document.createElement('a');
        a.href = realPath;
        a.download = realPath.split('/').pop() || 'resume';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };

  return (
    <div
      className={`${index === 0 ? 'row-span-2' : ''} w-full`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full duration-500 transform-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        <div className='absolute h-full w-full backface-hidden'>
          <div
            className={`flex h-full w-full cursor-pointer items-center justify-center rounded-[1rem] ${item.color} text-[1.3rem] font-medium text-white`}
          >
            {item.title}
          </div>
        </div>
        <div className='absolute h-full w-full rotate-y-180 backface-hidden'>
          <div
            className={`flex h-full w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-[1rem] ${item.backColor} font-medium text-white`}
            onClick={() => handleClick(item.link)}
          >
            <div className='h-[2rem] w-[2rem]'>
              <Image
                src={`/assets/icons/about/${item.icon}`}
                alt='icons'
                width={50}
                height={50}
              />
            </div>
            {item.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
