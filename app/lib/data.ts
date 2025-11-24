// app/lib/data.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  detailDescription: string;
  category: string; // 화면에 보여줄 카테고리 이름 (예: 베이트릴)
  categoryId: string; // ✅ 필터링용 영문 ID (예: reel)
  images: string[];
  features: string[];
  smartStoreUrl: string;
  badge?: "NEW" | "HOT" | "BEST";
  tagColor?: string;
};

export const products: Product[] = [
  // 1. 릴 (Reel)
  {
    id: "shimano-201",
    name: "Shimano 201",
    price: 350000,
    description: "시마노 포스마스터",
    detailDescription: "바다낚시의 새로운 기준. 감도를 극대화한 최신형 로드로, 미세한 입질도 놓치지 않습니다.",
    category: "베이트릴",
    categoryId: "reel", // ✅ 중요
    images: ["/images/01_shimano_201.jpg"],
    features: ["기어비 6.2:1", "드랙력 5kg", "무게 210g", "베어링 3+1"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/xxxxxx",
    badge: "NEW",
    tagColor: "bg-blue-500",
  },
  {
    id: "shimano-ct150",
    name: "Shimano CT150 HG",
    price: 420000,
    description: "수심측정 원터치 베이트 릴",
    detailDescription: "디지털 카운터가 탑재된 초경량 하이기어 베이트릴. 정확한 수심 공략이 가능합니다.",
    category: "베이트릴",
    categoryId: "reel",
    images: ["/images/02_shimano_CT150hg.jpg"],
    features: ["기어비 7.2:1", "드랙력 4.5kg", "무게 190g", "디지털 카운터"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/yyyyyy",
    badge: "HOT",
    tagColor: "bg-red-500",
  },
  {
    id: "abugarsia-max",
    name: "Abugarsia Max DLC",
    price: 150000,
    description: "최적화 라인카운터 베이트 릴",
    detailDescription: "가성비 최고의 선택. 백라이트 LCD로 야간 낚시에도 최적화되었습니다.",
    category: "베이트릴",
    categoryId: "reel",
    images: ["/images/03_abugarsia_maxDLC.jpg"],
    features: ["기어비 6.4:1", "백라이트 LCD", "듀라기어 황동 기어"],
    smartStoreUrl: "https://smartstore.naver.com/luremonster/products/zzzzzz",
    badge: "BEST",
    tagColor: "bg-brand",
  },
  // 2. 낚시대 (Rod) - 테스트용 데이터 추가
  {
    id: "js-bixod-n",
    name: "JS Company Bixod N",
    price: 280000,
    description: "국민 쭈갑 로드",
    detailDescription: "가볍고 감도가 좋은 국민 로드입니다.",
    category: "낚시대",
    categoryId: "rod",
    images: ["/images/rod_sample.jpg"], // 이미지가 없으면 엑박이 뜨지만 기능은 작동함
    features: ["전장 160cm", "무게 90g", "카본 99%"],
    smartStoreUrl: "#",
  },
];