import { Career } from '../_types/career';

export const careerData: Career[] = [
  {
    title: 'USEN Camera',
    description: 'AWS 기반 CCTV 실시간 영상 스트리밍 웹 서비스',
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
      'AWS KVS 스트리밍 비디오를 Live, Ondemand 플레이 할 수 있는 서비스 구현',
      'Vue 2와 JavaScript, Vuetify 를 활용해 동영상 북마크, 클립 리스트, 동영상 동시재생 화면 구현',
      'Chart.js로 매장 방문자 통계 데이터 시각화',
      '테스트 디바이스 데이터 관리가 가능한 관리자 웹페이지 구현',
    ],
    images: ['usen1.png', 'usen2.png', 'usen3.png'],
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
    details: [
      'AI 무인 매대 시스템 파악 및 서버 유지보수',
      '다날 결제 시스템 연동',
    ],
    images: [
      'baive1.png',
      'baive2.png',
      'baive3.png',
      'baive4.png',
      'baive5.png',
    ],
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
      'Flutter와 Dart를 활용해 캣휠, 체중계, 팬던트 등의 IOT 기기와 블루투스 연결으로 데이터를 표시해주는 모바일 어플 개발',
      'fl_chart 라이브러리를 활용해 캣휠 사용량, 체중 변화 등의 데이터 시각화',
      'Firebase와 연동하여 실시간 사용자 데이터 처리 구현',
    ],
    images: ['catwheel1.png', 'catwheel2.png'],
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
    details: ['모바일 앱 시스템 파악 및 메뉴 목록 페이지 구현'],
    images: [
      'drone1.png',
      'drone2.png',
      'drone3.png',
      'drone4.png',
      'drone5.png',
    ],
  },
];
