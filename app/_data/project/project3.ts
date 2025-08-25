export const project3 = {
  title: '새싹상점',
  date: '2025.07 ~ 2025.07',
  thumbnail: '/assets/images/project/project301.png',
  images: [
    '/assets/images/project/project301.png',
    '/assets/images/project/project302.png',
    '/assets/images/project/project303.png',
    '/assets/images/project/project304.png',
    '/assets/images/project/project305.png',
  ],
  summary: '새싹 마을 유저들을 위한 상점 페이지',
  description:
    '게임 내 마을원들이 이용 가능한 상점 페이지입니다. \nNext.js와 TypeScript, TailwindCSS를 활용하여 제작하였습니다. \n디스코드로 로그인 가능하며 데이터베이스로는 Firebase를 사용하였습니다.\n현재는 게임 서버 종료로 배포가 중단된 상태입니다.',
  members: '1명',
  tags: ['개인 프로젝트', 'Web'],
  position: 'Front-End',
  skills: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'Firebase'],
  features: [
    '디스코드 로그인 연동',
    '유저별 상점 관리 또는 물품 구매 기능',
    '물품 구매 기록을 볼 수 있는 관리자 페이지',
  ],
  parts: [
    'Next.js와 TypeScript, TailwindCSS를 활용하여 개발 후 Vercel을 사용하여 배포',
    'Firebase를 사용하여 로그인 기능 및 데이터베이스 연동',
    'Vibe Coding을 사용하여 빠른 MVP 기능 개발 및 복잡한 코드 문제 해결',
    '공통 코드 리팩토링을 통한 코드 가독성 향상',
    'recharts 라이브러리를 활용하여 관리자 페이지에서 물품 구매 및 재고량 통계 시각화',
  ],
  troubleshooting:
    '디스코드 로그인 연동 시 Firebase를 사용하였는데, 디스코드는 공식 로그인 제공업체로 지원되지 않으며 무료 플랜에서는 커스텀 제공업체를 등록할 수 없었기 때문에 AI(ChatGPT)의 도움을 받아 로그인 방향성을 잡았습니다. \n\n우선 디스코드 개발자 포털에서 OAuth2 인증 과정을 설정하고, Access Token 교환 및 사용자 정보 조회 후 Firebase 커스텀 토큰을 생성하는 방식으로 해결하였습니다. 이 때 백엔드가 존재하지 않았기 때문에 API Routes를 이용하여 API 엔드포인트를 만들어 사용하였습니다. \n\n또한 로그인 시 해당 유저의 디스코드 uid를 반환받게 되는데, 해당 uid가 데이터베이스에 있어야 유저의 직업에 맞는 메뉴가 보이도록 구현해야 하였습니다. 이용자가 제한되어있었기 때문에 회원가입 페이지를 따로 만들지 않아 uid를 전부 수동으로 입력할 수밖에 없었습니다. 이는 개발자 페이지를 따로 만들어 uid, 닉네임, 유저 아이콘 등 기본 정보를 미리 저장할 수 있는 form을 생성하여 유저 정보들을 미리 데이터베이스에 등록하는 방식으로 해결하였습니다. \n\n이런 방법들을 통해 사용자들이 다른 이메일 등으로 회원가입을 할 필요 없이 기존에 사용하던 디스코드를 이용하여 로그인 할 수 있었고, 기타 개인정보를 제공하는 것이 아닌 uid만 수집하는 방식으로 사용자들의 개인정보 노출에 대한 걱정을 없앨 수 있었습니다.',
  retrospect: '',
  github: 'https://github.com/Jihye817/Sprout-Market',
  url: '',
};
