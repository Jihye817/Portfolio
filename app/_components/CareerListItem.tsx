import Image from 'next/image';
import { Career } from '../_types/career';

interface CareerProps {
  career: Career;
}

function CareerListItem({ career }: CareerProps) {
  return (
    <div className='mb-[3rem] flex gap-3'>
      <div className='w-[4px] bg-gradient-to-t from-blue-300 to-blue-500'></div>
      <div className='flex flex-col'>
        <div className='mb-[0.5rem]'>
          <span className='mr-[1rem]'>
            {career.startDate} ~ {career.endDate}
          </span>
          <span className='rounded-[0.5rem] bg-blue-500 px-[0.7rem] py-[0.2rem]'>
            {career.position}
          </span>
        </div>
        <span className='text-[1.2rem] font-semibold'>{career.title}</span>
        <span className='mb-[0.5rem] text-white/70'>{career.description}</span>
        <span className='mb-[0.5rem] font-semibold'>기술</span>
        <div className='mb-[1rem] flex gap-[0.5rem]'>
          {career.skills.map(skill => (
            <div
              className='group/skill relative rounded-[0.5rem] bg-white p-1'
              key={skill}
            >
              <Image
                src={`/assets/icons/logo-${skill}.png`}
                width={25}
                height={25}
                alt={skill}
              ></Image>
              <p className='invisible absolute bottom-[-2rem] left-[50%] z-100 translate-x-[-50%] rounded-[0.5rem] bg-blue-500 px-[0.7rem] py-[0.2rem] group-hover/skill:visible'>
                {skill}
              </p>
            </div>
          ))}
        </div>
        <span className='font-semibold'>업무 내용</span>
        <div className='flex flex-col rounded-[0.5rem] bg-white/10 p-[1rem]'>
          {career.details.map((detail, index) => (
            <span key={index}>{`- ${detail}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerListItem;
