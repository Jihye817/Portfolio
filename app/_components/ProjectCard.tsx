import Image from 'next/image';
import { Project } from '../_types/project';

interface ProjectCardProps {
  item: Project;
  handleButtonClick: (project: Project) => void;
}

function ProjectCard({ item, handleButtonClick }: ProjectCardProps) {
  return (
    <div className='group/projects relative h-[25rem] rounded-[1rem] bg-gradient-to-r from-blue-300 to-blue-500 p-[1px]'>
      <div className='absolute top-0 left-0 z-100 h-full w-full rounded-[1rem] border-1 bg-neutral-900 opacity-0 group-hover/projects:opacity-100'>
        <div className='flex h-full flex-col items-center justify-center gap-3 p-5 text-center'>
          <div
            className='w-2/3 cursor-pointer rounded-[0.2rem] border-1 py-2 hover:bg-white/20'
            onClick={() => handleButtonClick(item)}
          >
            자세히보기
          </div>
          <div className='w-2/3 cursor-pointer rounded-[0.2rem] border-1 py-2 hover:bg-white/20'>
            Github 바로가기
          </div>
        </div>
      </div>
      <div className='relative h-full overflow-hidden rounded-[1rem] bg-black/70'>
        <div className='relative h-[50%] w-full overflow-hidden'>
          <Image
            className='object-cover'
            src={item.thumbnail}
            alt='똘개비'
            fill
          ></Image>
        </div>
        <div className='flex h-[50%] flex-col justify-between px-4 py-5'>
          <div>
            <div className='text-[1.3rem] font-semibold md:text-[1.5rem]'>
              {item.title}
            </div>
            <div className='text-[0.9rem] text-white/70 md:text-[1rem]'>
              {item.summary}
            </div>
          </div>
          <div className='flex gap-1 text-[0.7rem]'>
            {item.tags.map(tag => (
              <span
                className='rounded-[0.2rem] bg-blue-500/40 px-2 py-1'
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
