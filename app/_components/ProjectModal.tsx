import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ProjectModal({ isOpen, setIsOpen }: ProjectModalProps) {
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
      <div className='fixed inset-0 z-[999] flex min-h-dvh w-dvw items-start justify-center overflow-y-auto bg-black/50 px-40 py-10'>
        <div
          className='bg-foreground w-full overflow-hidden rounded-[1rem] border-1 text-zinc-900'
          ref={modalRef}
        >
          <div className='text-foreground flex items-center justify-between border-b-1 bg-zinc-700 px-10 pt-5 pb-[1rem] text-[1.5rem]'>
            <div>프로젝트 상세보기</div>
            <div>
              <Image
                src={'/assets/close.png'}
                alt='close'
                width={30}
                height={30}
                className='cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <div className='px-30 pt-10 pb-20'>
            <div className='mt-2 flex justify-center gap-1 text-[0.8rem]'>
              <span className='rounded-[0.5rem] bg-blue-500/50 px-[0.5rem] py-[0.2rem]'>
                팀 프로젝트
              </span>
              <span className='rounded-[0.5rem] bg-blue-500/50 px-[0.5rem] py-[0.2rem]'>
                Web
              </span>
            </div>
            <div className='mt-2 text-center'>2025.03 ~ 2025.05</div>
            <div className='text-center text-[2rem] font-bold'>
              나의 똘똘한 비서 - 똘개비
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
                  <SwiperSlide>
                    <div className='h-full bg-black'>
                      <Image
                        src={'/assets/images/ttolgaebi.png'}
                        alt='ttolgaebi'
                        fill
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='h-full bg-black'>slide 2</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='h-full bg-black'>slide 3</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='h-full bg-black'>slide 4</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='text-center'>
              데브코스 최종 프로젝트로 진행하였습니다. <br />
              일정 및 길찾기, 날씨와 뉴스를 제공해주는 비서 웹 어플리케이션
              입니다.
            </div>
            <div className='mt-10 flex flex-col gap-5 border-t-1 pt-10'>
              <div>
                <div className='text-[1.5rem] font-semibold'>
                  진행 인원 및 역할
                </div>
                <ul className='ml-[1rem] list-disc'>
                  <li>
                    <a className='font-semibold'>총 인원:</a> 5명 (Front-End
                    2명, Back-End 3명)
                  </li>
                  <li>
                    <a className='font-semibold'>담당 역할:</a> Front-End
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-[1.5rem] font-semibold'>사용 기술</div>
                <div className='flex gap-2'>
                  <span className='rounded-[0.5rem] bg-gray-400/50 px-[0.5rem] py-[0.2rem]'>
                    TypeScript
                  </span>
                  <span className='rounded-[0.5rem] bg-gray-400/50 px-[0.5rem] py-[0.2rem]'>
                    Next.js
                  </span>
                  <span className='rounded-[0.5rem] bg-gray-400/50 px-[0.5rem] py-[0.2rem]'>
                    Zustand
                  </span>
                </div>
              </div>
              <div>
                <div className='text-[1.5rem] font-semibold'>
                  주요 기능 및 특징
                </div>
                <ul className='ml-[1rem] list-disc'>
                  <li>일정 관리 (TODO list) 기능</li>
                  <li>일정의 위치 간 길찾기 및 예상 출발 시간 표시</li>
                  <li>현재 날씨 상세정보 및 시간별 / 주간 날씨 정보 제공</li>
                  <li>카테고리별 뉴스 정보 제공</li>
                </ul>
              </div>
              <div>
                <div className='text-[1.5rem] font-semibold'>작업 내용</div>
                <ul className='ml-[1rem] list-disc'>
                  <li>Figma asset을 이용해 UX/UI 제작</li>
                  <li>대시보드 페이지 및 일간/월간 일정 페이지 구현</li>
                  <li>
                    네이버 지도를 사용하여 백엔드에서 받아온 좌표값으로 길찾기
                    경로와 마커 표시
                  </li>
                  <li>
                    Zustand를 사용하여 access token과 refresh token 저장 및 관리
                  </li>
                </ul>
              </div>
              <div>
                <div className='text-[1.5rem] font-semibold'>트러블슈팅</div>
                <div>hydration error가 발생</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProjectModal;
