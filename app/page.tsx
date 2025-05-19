'use client';

import Image from 'next/image';
import CareerListItem from './_components/CareerListItem';
import { useEffect, useState } from 'react';
import ProjectModal from './_components/ProjectModal';
import AboutCard from './_components/AboutCard';
import { careerData } from './_data/careerData';
import { aboutData } from './_data/aboutData';
import { skillData } from './_data/skillData';
import { projectData } from './_data/project/projectData';
import ProjectCard from './_components/ProjectCard';
import { Project } from './_types/project';

export default function Home() {
  const [isBgDark, setIsBgDark] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const handleButtonClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <div className='min-w-[375px]'>
      <header className='fixed top-0 z-999 w-full min-w-[375px]'>
        <div
          className={`flex items-center justify-between px-[2rem] py-[1rem] backdrop-blur-lg md:hidden ${
            isBgDark
              ? 'text-background bg-white/40 shadow'
              : 'bg-transparent shadow shadow-white'
          }`}
        >
          <div className='text-[1.5rem] md:text-[2rem]'>Jihye's Portfolio</div>
          <button
            onClick={() => setIsNavOpen(prev => !prev)}
            className='hover:cursor-pointer'
          >
            <Image
              src={
                isBgDark
                  ? '/assets/icons/common/bars-dark.svg'
                  : '/assets/icons/common/bars.svg'
              }
              alt='menubar'
              width={24}
              height={24}
            />
          </button>
        </div>
        {isNavOpen && (
          <div className='w-full'>
            <div
              className={`flex flex-col ${
                isBgDark
                  ? 'text-background bg-white shadow-md'
                  : 'bg-transparent shadow shadow-white backdrop-blur-lg'
              }`}
            >
              <a
                className='w-full cursor-pointer px-5 py-4 hover:bg-blue-500/30'
                href='#about'
                onClick={() => setIsNavOpen(false)}
              >
                About
              </a>
              <a
                className='w-full cursor-pointer px-5 py-4 hover:bg-blue-500/30'
                href='#skills'
                onClick={() => setIsNavOpen(false)}
              >
                Skills
              </a>
              <a
                className='w-full cursor-pointer px-5 py-4 hover:bg-blue-500/30'
                href='#career'
                onClick={() => setIsNavOpen(false)}
              >
                Career
              </a>
              <a
                className='w-full cursor-pointer px-5 py-4 hover:bg-blue-500/30'
                href='#projects'
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </a>
            </div>
          </div>
        )}
        <div
          className={`hidden items-center justify-between px-[3rem] py-[1rem] text-[1.2rem] backdrop-blur-lg md:flex ${
            isBgDark
              ? 'bg-white/40 text-black shadow'
              : 'bg-transparent shadow shadow-white'
          }`}
        >
          <div className='text-[2rem] sm:text-[2rem]'>Jihye's Portfolio</div>
          <div className='flex gap-[1rem]'>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-blue-500/30'
                href='#about'
              >
                About
              </a>
            </span>
            <span>
              <a
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-blue-500/30'
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
                className='cursor-pointer rounded-full px-3 py-2 hover:bg-blue-500/30'
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
                src={'/assets/images/avatar.png'}
                alt={'avatar'}
                width={400}
                height={400}
              ></Image>
            </div>
          </div>

          <Image
            className='absolute bottom-4 animate-bounce'
            src={'/assets/icons/common/arrow-down.png'}
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
            {skillData.map(techStack => (
              <div
                className='flex items-center rounded-[1rem] bg-blue-950/20 p-7'
                key={techStack.title}
              >
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
                            src={`/assets/icons/logo/${icon.toLowerCase()}.png`}
                            alt={icon}
                            width={60}
                            height={60}
                          ></Image>
                        </div>
                        <p className='invisible absolute bottom-[-2rem] left-[50%] z-100 translate-x-[-50%] rounded-[0.5rem] bg-black px-2 py-0.5 group-hover/icons:visible'>
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
            {projectData.map(item => (
              <ProjectCard
                item={item}
                handleButtonClick={() => handleButtonClick(item)}
                key={item.title}
              />
            ))}
          </div>
          <ProjectModal
            item={selectedProject}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
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
              {careerData.map(career => (
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
