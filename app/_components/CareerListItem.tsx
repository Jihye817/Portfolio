import Image from 'next/image';
import { Career } from '../_types/career';

interface CareerProps {
  career: Career;
}

function CareerListItem({ career }: CareerProps) {
  return (
    <div className='mb-[3rem] flex gap-3'>
      <div className='w-[4px] bg-gradient-to-t from-blue-300 to-blue-950'></div>
      <div className='flex flex-col w-full'>
        <div className='mb-[0.5rem] flex flex-col md:flex-row'>
          <div className='mr-[1rem]'>
            {career.startDate} ~ {career.endDate}
          </div>
          <div className='text-foreground rounded-[0.5rem] bg-blue-500 px-[0.7rem] py-[0.2rem] w-fit'>
            {career.position}
          </div>
        </div>
        <span className='text-[1.2rem] font-bold'>{career.title}</span>
        <span className='mb-[1rem] text-[1rem] text-blue-950/70'>
          {career.description}
        </span>
        <span className='font-semibold'>기술</span>
        <div className='mb-[1rem] flex gap-[0.5rem]'>
          {career.skills.map(skill => (
            <div
              className={`group/skill relative flex gap-2 rounded-[0.5rem] ${skill.color} ${skill.textColor} p-1 px-[1rem] py-[0.2rem]`}
              key={skill.name}
            >
              {skill.name}
            </div>
          ))}
        </div>
        <span className='font-semibold'>업무 내용</span>
        <div className='flex flex-col rounded-[0.5rem] bg-blue-950/10 p-[1rem]'>
          {career.details.map((detail, index) => (
            <span key={index}>{`- ${detail}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerListItem;
