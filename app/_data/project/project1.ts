export const project1 = {
  title: '나의 똘똘한 비서 - 똘개비',
  date: '2025.03 ~ 2025.05',
  thumbnail: '/assets/images/project/project101.png',
  images: [
    '/assets/images/project/project101.png',
    '/assets/images/project/project102.png',
    '/assets/images/project/project103.png',
    '/assets/images/project/project104.png',
  ],
  summary: '일정 관리 웹 어플리케이션',
  description:
    '데브코스 최종 프로젝트로 진행하였습니다. \n일정 및 길찾기, 날씨와 뉴스를 제공해주는 비서 웹 어플리케이션 입니다.',
  members: '5명 (Front-End 2명, Back-End 3명)',
  tags: ['팀 프로젝트', 'Web'],
  position: 'Front-End',
  skills: [
    'TypeScript',
    'Next.js',
    'Zustand',
    'Tailwind CSS',
    'React Query',
    'Figma',
  ],
  features: [
    '일정 관리 (TODO list) 기능',
    '일정 위치 간 길찾기 및 예상 출발 시간 표시',
    '현재 날씨 상세정보 및 시간별/주간 날씨 정보 제공',
    '카테고리별 뉴스 정보 제공',
  ],
  parts: [
    'Figma asset을 이용해 UX/UI 제작',
    'Next.js와 TypeScript를 활용해 대시보드 페이지 및 일간/월간 일정 페이지 구현',
    '네이버 지도를 사용하여 백엔드에서 받아온 좌표값으로 길찾기 경로 시각화 및 마커 표시',
    'Zustand를 사용하여 access token과 refresh token 저장 및 관리',
  ],
  troubleshooting:
    '로그인 시 토큰 저장 및 재사용성을 확보의 목적으로 Zustand를 사용하면서 초기 렌더링 시 서버와 클라이언트 상태 불일치로 Hydration mismatch 오류가 발생하게 되었습니다. \
    \nskipHydration 옵션을 적용하여 초기 하이드레이션을 제거하고, 추후 렌더링 시 하이드레이션을 호출하는 방식으로 변경하여 해결하였습니다. \
    \n이 경험을 통해 SSR과 CSR의 렌더링 순서 및 상태 관리 방식의 차이를 이해할 수 있었습니다.',
  retrospect: '',
  github: 'https://github.com/kdt5-3rd',
  url: 'https://ttolgaebi.com',
};
