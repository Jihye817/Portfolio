import { useState } from 'react';

interface AboutCardProps {
  index: number;
  item: {
    title: string;
    icon: string;
    link: string;
    color: string;
    backColor: string;
  };
}

function AboutCard({ index, item }: AboutCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
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
            className={`flex h-full w-full cursor-pointer items-center justify-center rounded-[1rem] ${item.color} text-white`}
          >
            {item.title}
          </div>
        </div>
        <div className='absolute h-full w-full rotate-y-180 backface-hidden'>
          <div
            className={`flex h-full w-full cursor-pointer items-center justify-center rounded-[1rem] ${item.backColor} text-white`}
          >
            {item.link}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
