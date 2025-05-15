'use client';

import Image from 'next/image';
import NormalButton from './_components/NormalButton';
import CareerListItem from './_components/CareerListItem';
import { Career } from './_types/career';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProjectModal from './_components/ProjectModal';
import AboutCard from './_components/AboutCard';

export default function Home() {
  const mockIconList: string[] = [
    'TypeScript',
    'JavaScript',
    'Vue',
    'Next.js',
    'TailwindCSS',
    'HTML5',
    'CSS3',
    'Zustand',
    'React', //#61DAFB
    'TanstackQuery',
    'Flutter',
    'Dart',
    'Github',
    'Git',
    'SpringBoot',
    'Java',
    'MySQL',
  ];
  const mockData: Career[] = [
    {
      title: 'USEN Camera',
      description: 'CCTV 실시간 영상 스트리밍 웹 서비스',
      startDate: '2021.12',
      endDate: '2023.06',
      position: 'Front-End',
      skills: [
        { name: 'Vue', color: 'bg-[#4FC08D]', textColor: 'text-zinc-900' },
        {
          name: 'JavaScript',
          color: 'bg-[#F7DF1E]',
          textColor: 'text-zinc-900',
        },
      ],
      details: [
        'CCTV 영상 재생 페이지의 동영상 북마크, 클립 리스트 구현',
        '동영상 동시재생 화면 구현',
        '관리자 메뉴 웹페이지 구현',
      ],
    },
    {
      title: 'AI 무인 매대',
      description: '실시간 AI 무인 매대 관리 서비스',
      startDate: '2020.06',
      endDate: '2022.05',
      position: 'Back-End',
      skills: [
        {
          name: 'SpringBoot',
          color: 'bg-[#6DB33F]',
          textColor: 'text-zinc-900',
        },
        { name: 'Java', color: 'bg-zinc-700', textColor: 'text-zinc-200' },
      ],
      details: ['AI 무인 매대 시스템 파악 및 서버 유지보수'],
    },
    {
      title: '캣휠 (Cat Wheel)',
      description: 'IOT 기기와 통신하는 모바일 어플',
      startDate: '2020.06',
      endDate: '2020.11',
      position: 'Application',
      skills: [
        { name: 'Flutter', color: 'bg-[#02569B]', textColor: 'text-zinc-200' },
        { name: 'Dart', color: 'bg-[#0175C2]', textColor: 'text-zinc-200' },
      ],
      details: [
        '캣휠, 체중계, 팬던트 등의 IOT 기기와 블루투스 연결으로 데이터를 표시해주는 모바일 어플 개발',
        'Firebase와 연동하여 실시간 사용자 데이터 처리',
      ],
    },
    {
      title: '드론 배송',
      description: '국가과제 세종시 드론 배송 모바일 앱',
      startDate: '2020.06',
      endDate: '2020.06',
      position: 'Application',
      skills: [
        { name: 'Flutter', color: 'bg-[#02569B]', textColor: 'text-zinc-200' },
        { name: 'Dart', color: 'bg-[#0175C2]', textColor: 'text-zinc-200' },
      ],
      details: ['시스템 파악 및 메뉴 목록 페이지 구현'],
    },
  ];
  const techStackList = [
    {
      title: 'Front-End',
      skills: [
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Vue',
        'Zustand',
        'HTML5',
        'CSS3',
        'TailwindCSS',
        'TanstackQuery',
      ],
    },
    {
      title: 'Back-End',
      skills: ['Java', 'SpringBoot', 'MySQL'],
    },
    {
      title: 'Mobile',
      skills: ['Flutter', 'Dart'],
    },
    {
      title: 'Others',
      skills: ['Git', 'Github', 'Figma'],
    },
  ];
  const aboutData = [
    {
      title: '이력서 다운로드',
      icon: 'arrow-down.png',
      link: 'https://naver.com',
      color: 'bg-blue-500',
      backColor: 'bg-blue-950',
    },
    {
      title: 'Github',
      icon: 'arrow-down.png',
      link: 'https://github.com/Jihye817',
      color: 'bg-black',
      backColor: 'bg-indigo-500',
    },
    {
      title: 'Blog',
      icon: 'arrow-down.png',
      link: 'https://errorlog.tistory.com/',
      color: 'bg-amber-500',
      backColor: 'bg-amber-950',
    },
    {
      title: '연락처',
      icon: 'arrow-down.png',
      link: '010-3081-0817',
      color: 'bg-black',
      backColor: 'bg-sky-950',
    },
    {
      title: 'Email',
      icon: 'arrow-down.png',
      link: 'wlgul817@gmail.com',
      color: 'bg-rose-700',
      backColor: 'bg-rose-950',
    },
  ];

  const [isBgDark, setIsBgDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const threshold = window.innerHeight - window.innerHeight * 0.01;
      setIsBgDark(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <header className='fixed top-0 z-999 w-full'>
        <div
          className={`flex items-center justify-between px-[3rem] py-[1rem] text-[1.2rem] backdrop-blur-lg ${
            isBgDark
              ? 'bg-white/40 text-black shadow'
              : 'bg-transparent shadow shadow-white'
          }`}
        >
          <div className='text-[2rem]'>Jihye's Portfolio</div>
          <div className='flex gap-[1rem]'>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-teal-500/30'
                href='#about'
              >
                About
              </a>
            </span>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-sky-500/30'
                href='#skills'
              >
                Skills
              </a>
            </span>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-blue-500/30'
                href='#career'
              >
                Career
              </a>
            </span>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-indigo-500/30'
                href='#projects'
              >
                Projects
              </a>
            </span>
          </div>
        </div>
      </header>
      <main className='mb-[3rem] flex w-full flex-col items-center'>
        <section id='home' className='flex h-dvh w-full justify-center px-30'>
          <div className='relative flex w-full items-center justify-center gap-10'>
            <div className=''>
              <span className='text-[3.5rem] font-bold'>
                안녕하세요, <br />
                끊임없이 도전하는 <br />
                프론트엔드 개발자
                <br />
                <a className='text-blue-400'> 박지혜</a>입니다.
              </span>
            </div>
            <div className='relative'>
              <Image
                className='relative'
                src={'/assets/avatar.png'}
                alt={'avatar'}
                width={400}
                height={400}
              ></Image>
            </div>
          </div>

          <Image
            className='absolute bottom-4 animate-bounce'
            src={'/assets/arrow-down.png'}
            alt='arrow-down'
            width={60}
            height={60}
          ></Image>
        </section>
        <section
          id='about'
          className='bg-foreground flex w-full flex-col px-30 py-[5rem] text-[#292a31]'
        >
          <div className='mb-5 text-[3.5rem] font-black'>
            <a className='text-blue-400'>A</a>bout
          </div>
          <div className='flex gap-10'>
            <div className='grid w-full flex-1 grid-cols-2 grid-rows-3 gap-5'>
              {aboutData.map((item, index) => (
                <AboutCard index={index} item={item} key={item.title} />
              ))}
            </div>
            <div className='flex-1'>
              <div className='mb-[1rem]'>
                <span className='text-[2.5rem] font-bold'>박지혜</span>
                <span className='text-[1.8rem]'> ParkJihye</span>
              </div>
              <div className='mb-10 leading-[1.7rem]'>
                안녕하세요, <a className='font-bold'>프론트엔드 개발자 </a>
                <a className='font-bold text-blue-500'>박지혜</a> 입니다. <br />
                <br />
                풀스택 경험을 바탕으로, 사용자 경험 중심의 프론트엔드 개발을
                지향하는 개발자입니다. <br />
                새로운 기술에 대한 두려움 없이 꾸준히 학습하고 성장하는 자세를
                가지고 있습니다.
              </div>

              <div className='mb-[2rem] leading-[2rem]'>
                <div className='mb-1 border-b-1 border-blue-400 pb-1'>
                  <span className='text-[1.5rem] font-extrabold'>
                    Education
                  </span>
                </div>
                <div className=''>
                  <span className='mr-5 font-bold'>- 2016.03 ~ 2020.02</span>
                  단국대학교 소프트웨어학과
                </div>
                <div className=''>
                  <span className='mr-5 font-bold'>- 2019.12 ~ 2020.06</span>
                  프론트엔드 개발 및 자바(JAVA) 웹개발자 양성과정
                </div>
                <div className=''>
                  <span className='mr-5 font-bold'>- 2024.10 ~ 2025.05</span>
                  프로그래머스 웹 풀 사이클 개발 데브코스 5기
                </div>
              </div>
              <div className='mb-[2rem]'>
                <div className='mb-1 border-b-1 border-blue-400 pb-1'>
                  <span className='text-[1.5rem] font-extrabold'>
                    Certification
                  </span>
                </div>
                <div>
                  <span className='mr-5 font-bold'>- 2019.05</span>
                  정보처리기사
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='skills'
          className='flex min-h-dvh w-full flex-col bg-blue-300 px-30'
        >
          <div className='mb-[2rem] pt-[5rem] text-[3.5rem] font-black'>
            <a className='text-zinc-900'>S</a>kills
          </div>
          <div className='flex w-full flex-col gap-5 pb-[5rem]'>
            {techStackList.map(techStack => (
              <div className='flex items-center rounded-[1rem] bg-blue-950/20 p-7'>
                <div className='flex-1 p-2 pr-7 text-center text-[1.5rem] font-bold'>
                  {techStack.title}
                </div>
                <div className='flex flex-5 flex-wrap gap-x-2 gap-y-2'>
                  {techStack.skills.map(icon => (
                    <div
                      key={icon}
                      className='flex items-center justify-center rounded-[0.5rem] bg-white p-[0.2rem]'
                    >
                      <div className='group/icons relative'>
                        <div className='flex aspect-square w-full items-center justify-center'>
                          <Image
                            src={`/assets/icons/logo-${icon}.png`}
                            alt={icon}
                            width={60}
                            height={60}
                          ></Image>
                        </div>
                        <p className='invisible absolute bottom-[-2rem] left-[50%] z-100 translate-x-[-50%] rounded-[0.5rem] bg-blue-500 px-2 py-0.5 group-hover/icons:visible'>
                          {icon}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id='projects'
          className='flex min-h-dvh w-full flex-col px-30 pt-[5rem]'
        >
          <div className='mb-[2rem] text-[3.5rem] font-black'>
            <a className='text-blue-400'>P</a>rojects
          </div>
          <div className='grid w-full grid-cols-3 gap-5'>
            <div className='group/projects relative h-[25rem] rounded-[1rem] bg-gradient-to-r from-blue-300 to-blue-500 p-[1px]'>
              <div className='absolute top-0 left-0 z-100 h-full w-full rounded-[1rem] border-1 bg-neutral-900 opacity-0 group-hover/projects:opacity-100'>
                <div className='flex h-full flex-col items-center justify-center gap-3 p-5 text-center'>
                  <div
                    className='w-2/3 cursor-pointer rounded-[0.2rem] border-1 py-2 hover:bg-white/20'
                    onClick={handleButtonClick}
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
                    src={'/assets/images/ttolgaebi.png'}
                    alt='똘개비'
                    fill
                  ></Image>
                </div>
                <div className='flex h-[50%] flex-col justify-between px-4 py-5'>
                  <div>
                    <div className='text-[1.5rem] font-semibold'>
                      나의 똘똘한 비서 - 똘개비
                    </div>
                    <div className='text-white/70'>
                      일정 관리 웹 어플리케이션
                    </div>
                  </div>
                  <div className='flex gap-1 text-[0.7rem]'>
                    <span className='rounded-[0.2rem] bg-blue-500/40 px-2 py-1'>
                      팀 프로젝트
                    </span>
                    <span className='rounded-[0.2rem] bg-blue-500/40 px-2 py-1'>
                      Web
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
        <section
          id='career'
          className='bg-foreground flex min-h-dvh w-full flex-col px-30 pt-[5rem] pb-[5rem] text-zinc-900'
        >
          <div className='mb-[2rem] text-[3.5rem] font-black'>
            <a className='text-blue-400'>C</a>areer
          </div>
          <div className='flex w-full gap-[1rem] rounded-[1rem] bg-blue-950/10 px-[2rem] py-[2rem]'>
            <div className='flex flex-1 flex-col'>
              <span className=''>2020.06 ~ 2023.06</span>
              <span className='text-[1.5rem] font-bold'>(주)베이리스</span>
              <span className='text-blue-950/70'>플랫폼팀 / 연구원</span>
            </div>
            <div className='flex-4'>
              {mockData.map(career => (
                <CareerListItem career={career} key={career.title} />
              ))}
            </div>
          </div>
        </section>
        <footer className='mt-[5rem] text-center text-[0.8rem]'>
          Copyright 2025. ParkJihye All rights reserved.
        </footer>
      </main>
    </div>
  );
}
