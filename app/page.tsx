import Image from 'next/image';
import NormalButton from './_components/NormalButton';
import CareerListItem from './_components/CareerListItem';
import { Career } from './_types/career';
import Link from 'next/link';

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
    'React',
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
      skills: ['Vue', 'JavaScript'],
      details: [
        '동영상 북마크, 클립 리스트 구현',
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
      skills: ['SpringBoot', 'Java'],
      details: ['AI 무인 매대 시스템 파악 및 서버 유지보수'],
    },
    {
      title: '캣휠 (Cat Wheel)',
      description: 'IOT 기기와 통신하는 모바일 어플',
      startDate: '2020.06',
      endDate: '2020.11',
      position: 'Application',
      skills: ['Flutter', 'Dart'],
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
      skills: ['Flutter', 'Dart'],
      details: ['메뉴 목록 페이지 구현'],
    },
  ];

  return (
    <main className='mb-[5rem] flex w-full flex-col items-center px-10'>
      <div className='flex h-dvh flex-col items-center justify-center'>
        <span className='text-[2.8rem] font-bold'>
          안녕하세요, <br />
          끊임없이 도전하는 <br />
          프론트엔드 개발자<a className='text-blue-400'> 박지혜</a>입니다.
        </span>
      </div>
      <header className='sticky top-4'>
        <div className='flex gap-[1.5rem] rounded-[1rem] bg-[#9fabc0]/10 px-[2rem] py-[1rem] text-[1.2rem] backdrop-blur-lg'>
          <span>
            <a href='#about'>소개</a>
          </span>
          <span>
            <a href='#skills'>기술</a>
          </span>
          <span>
            <a href='#career'>경력</a>
          </span>
          <span>
            <a href='#projects'>프로젝트</a>
          </span>
        </div>
      </header>
      <div className='w-full px-30'>
        <section
          id='about'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[2rem] text-[2.5rem] font-semibold'>About me</div>
          <div className='mb-[2rem] text-center'>
            안녕하세요, 프론트엔드 개발자 박지혜입니다. <br /> <br />
            풀스택 경험을 바탕으로, 사용자 경험 중심의 프론트엔드 개발을
            지향하는 개발자입니다. <br />
            새로운 기술에 대한 두려움 없이 꾸준히 학습하고 성장하는 자세를
            가지고 있습니다.
          </div>
          <div className='flex gap-[1.5rem]'>
            <NormalButton>이력서 다운로드</NormalButton>
            <Link
              className='items-center rounded-[1rem] bg-blue-500 px-[1rem] py-[0.5rem] text-center'
              href={'https://github.com/Jihye817'}
            >
              Github
            </Link>
            <Link
              className='items-center rounded-[1rem] bg-blue-500 px-[1rem] py-[0.5rem] text-center'
              href={'https://errorlog.tistory.com'}
            >
              Blog
            </Link>
          </div>
        </section>
        <section
          id='skills'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2.5rem] font-semibold'>기술 스택</div>
          <div className='flex flex-wrap gap-[1rem]'>
            {mockIconList.map(icon => (
              <div
                key={icon}
                className='flex items-center justify-center rounded-[0.5rem] bg-white/90 p-[0.2rem]'
              >
                <div className='group/icons relative'>
                  <Image
                    src={`/assets/icons/logo-${icon}.png`}
                    alt={icon}
                    width={45}
                    height={45}
                  ></Image>
                  <p className='invisible absolute group-hover/icons:visible'>
                    {icon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id='career'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2.5rem] font-semibold'>경력사항</div>
          <div className='flex w-full gap-[1rem] rounded-[1rem] border-1 px-[2rem] py-[2rem]'>
            <div className='flex flex-1 flex-col'>
              <span className=''>2020.06 ~ 2023.06</span>
              <span className='text-[1.5rem] font-semibold'>(주)베이리스</span>
              <span className='text-white/70'>플랫폼팀 / 연구원</span>
            </div>
            <div className='w-[1px] bg-white'></div>
            <div className='flex-4'>
              {mockData.map(career => (
                <CareerListItem career={career} key={career.title} />
              ))}
            </div>
          </div>
        </section>
        <section
          id='projects'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2.5rem] font-semibold'>프로젝트</div>
          <div></div>
        </section>
        <section
          id='education'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2rem] font-semibold'>교육</div>
          <div>2016.03 ~ 2020.02 단국대학교 소프트웨어학과</div>
          <div>
            2019.12 ~ 2020.06 프론트엔드 개발 및 자바(JAVA) 웹개발자 양성과정
          </div>
          <div>
            2024.10 ~ 2025.05 프로그래머스 웹 풀 사이클 개발 데브코스 5기
          </div>
        </section>
        <section
          id='certification'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2rem] font-semibold'>자격증</div>
          <div>2019.05 정보처리기사</div>
        </section>
        <section
          id='contact'
          className='mt-[10rem] flex flex-col items-center justify-center'
        >
          <div className='mb-[1rem] text-[2.5rem] font-semibold'>
            Contact me
          </div>
          <div>
            <span>전화번호 : 010-3081-0817</span>
            <span>이메일 : wlgul817@gmail.com</span>
            <span>Github : @Jihye817</span>
          </div>
        </section>
      </div>
    </main>
  );
}
