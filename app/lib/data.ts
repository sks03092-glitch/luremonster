// app/lib/data.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  detailDescription: string;
  category: string;
  categoryId: string;
  images: string[];
  features: string[];
  smartStoreUrl: string;
  badge?: "NEW" | "HOT" | "BEST";
  tagColor?: string;
  // ✅ 옵션 데이터 추가 (선택 가능한 항목들)
  options?: {
    name: string;   // 예: "핸들 방향", "색상"
    values: string[]; // 예: ["좌핸들", "우핸들"], ["레드", "블루"]
  }[];
};

export const products: Product[] = [
  {
    id: "shimano-201",
    name: "Shimano 201",
    price: 350000,
    description: "시마노 포스마스터",
    detailDescription: "바다낚시의 새로운 기준. 감도를 극대화한 최신형 로드로, 미세한 입질도 놓치지 않습니다.",
    category: "베이트릴",
    categoryId: "reel",
    images: ["/images/01_shimano_201.jpg"],
    features: ["기어비 6.2:1", "드랙력 5kg", "무게 210g", "베어링 3+1"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/12717278023",
    badge: "NEW",
    tagColor: "bg-blue-500",
    // ✅ 옵션 예시
    options: [
      { name: "핸들 방향", values: ["좌핸들 (Left)", "우핸들 (Right)"] },
      { name: "추가 구성", values: ["선택 안함", "합사 1호 (+20,000원)", "합사 2호 (+20,000원)"] }
    ]
  },
  {
    id: "shimano-ct150",
    name: "Shimano CT150 HG",
    price: 420000,
    description: "수심측정 원터치 베이트 릴",
    detailDescription: "디지털 카운터가 탑재된 초경량 하이기어 베이트릴.",
    category: "베이트릴",
    categoryId: "reel",
    images: ["/images/02_shimano_CT150hg.jpg"],
    features: ["기어비 7.2:1", "드랙력 4.5kg", "무게 190g", "디지털 카운터"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/yyyyyy",
    badge: "HOT",
    tagColor: "bg-red-500",
    options: [
        { name: "색상", values: ["블랙", "실버", "골드"] }
    ]
  },
  {
    id: "abugarsia-max",
    name: "Abugarsia Max DLC",
    price: 150000,
    description: "최적화 라인카운터 베이트 릴",
    detailDescription: "가성비 최고의 선택. 백라이트 LCD 탑재.",
    category: "베이트릴",
    categoryId: "reel",
    images: ["/images/03_abugarsia_maxDLC.jpg"],
    features: ["기어비 6.4:1", "백라이트 LCD", "듀라기어 황동 기어"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/zzzzzz",
    badge: "BEST",
    tagColor: "bg-brand",
    // 옵션이 없는 상품일 수도 있음
  },
  {
    id: "js-bixod-n",
    name: "JS Company Bixod N",
    price: 280000,
    description: "국민 쭈갑 로드",
    detailDescription: "가볍고 감도가 좋은 국민 로드입니다.",
    category: "낚시대",
    categoryId: "rod",
    images: ["/images/rod_sample.jpg"],
    features: ["전장 160cm", "무게 90g", "카본 99%"],
    smartStoreUrl: "#",
    options: [
        { name: "스펙", values: ["B2-632 (연질)", "B2-652 (경질)"] }
    ]
  },
];