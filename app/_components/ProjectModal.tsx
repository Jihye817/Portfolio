import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Project } from '../_types/project';

interface ProjectModalProps {
  item: Project | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ProjectModal({ item, isOpen, setIsOpen }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className='fixed inset-0 z-[999] flex min-h-dvh w-dvw items-start justify-center overflow-y-auto bg-black/50 px-10 py-10 md:px-40'>
        <div
          className='bg-foreground w-full overflow-hidden rounded-[1rem] border-1 text-zinc-900'
          ref={modalRef}
        >
          <div className='text-foreground flex items-center justify-between border-b-1 bg-zinc-700 px-5 pt-5 pb-[1rem] text-[1.2rem] md:px-10 md:text-[1.5rem]'>
            <div>프로젝트 상세보기</div>
            <div className='relative h-[25px] w-[25px] md:h-[30px] md:w-[30px]'>
              <Image
                src={'/assets/icons/common/close.png'}
                alt='close'
                fill
                className='cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <div className='px-10 pt-10 pb-20 md:px-30'>
            <div className='mt-2 flex justify-center gap-1 text-[0.8rem]'>
              {item?.tags.map(tag => (
                <span
                  className='rounded-[0.5rem] bg-blue-500/50 px-[0.5rem] py-[0.2rem]'
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='mt-2 text-center'>{item?.date}</div>
            <div className='text-center text-[1.5rem] font-bold md:text-[2rem]'>
              {item?.title}
            </div>
            <div className='flex justify-center py-10'>
              <div className='aspect-16/9 w-[90%] lg:w-[50%]'>
                <Swiper
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className='h-full w-full'
                >
                  {item?.images.map(image => (
                    <SwiperSlide>
                      <div className='h-full bg-black'>
                        <Image src={image} alt='ttolgaebi' fill />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className='text-center whitespace-pre-line'>
              {item?.description}
            </div>
            <div className='mt-10 flex flex-col gap-5 border-t-1 pt-10'>
              <div>
                <div className='text-[1.2rem] font-semibold md:text-[1.5rem]'>
                  👥 진행 인원 및 역할
                </div>
                <ul className='ml-[2rem] list-disc py-1 leading-[1.7rem]'>
                  <li>
                    <a className='font-semibold'>총 인원:</a> {item?.members}
                  </li>
                  <li>
                    <a className='font-semibold'>담당 역할:</a> {item?.position}
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-[1.2rem] font-semibold md:text-[1.5rem]'>
                  🛠️ 사용 기술
                </div>
                <div className='ml-[2rem] flex flex-wrap gap-2 py-1'>
                  {item?.skills.map(skill => (
                    <span
                      className='rounded-[0.5rem] bg-gray-400/50 px-[0.5rem] py-[0.2rem]'
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='text-[1.2rem] font-semibold md:text-[1.5rem]'>
                  ⚙️ 주요 기능 및 특징
                </div>
                <ul className='ml-[2rem] list-disc py-1 leading-[1.7rem]'>
                  {item?.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className='text-[1.2rem] font-semibold md:text-[1.5rem]'>
                  ✏️ 작업 내용
                </div>
                <ul className='ml-[2rem] list-disc py-1 leading-[1.7rem]'>
                  {item?.parts.map(part => <li key={part}>{part}</li>)}
                </ul>
              </div>
              {item?.troubleshooting && (
                <div>
                  <div className='text-[1.2rem] font-semibold md:text-[1.5rem]'>
                    🔥 트러블슈팅
                  </div>
                  <div className='ml-[2rem] py-1 leading-[1.7rem] whitespace-pre-line'>
                    {item?.troubleshooting}
                  </div>
                </div>
              )}
              {item?.retrospect && (
                <div>
                  <div className='text-[1.5rem] font-semibold md:text-[1.5rem]'>
                    🤔 회고
                  </div>
                  <div className='ml-[2rem] py-1 leading-[1.7rem]'>
                    {item?.retrospect}
                  </div>
                </div>
              )}
              {item?.url && (
                <div>
                  <div className='text-[1.5rem] font-semibold md:text-[1.5rem]'>
                    🔗 프로젝트 배포 링크
                  </div>
                  <div className='ml-[2rem] py-1 leading-[1.7rem]'>
                    <a
                      href={item?.url}
                      target='_blank'
                      className='hover:text-blue-500'
                    >
                      {item?.url}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProjectModal;
