import { Career } from '../_types/career';

export const careerData: Career[] = [
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
