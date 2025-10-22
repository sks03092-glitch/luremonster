// app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 | LureMonster",
  description: "LureMonster 서비스",
};

const services = [
  { title: "커뮤니티", desc: "실시간 조황 공유, 지역별 소통, 안전 정보" },
  { title: "포인트 추천", desc: "날씨·조류·조황 데이터 기반 추천" },
  { title: "장비 가이드", desc: "로드·라인·채비 최적 조합 추천" },
  { title: "루어스토어", desc: "합리적인 가격의 다양한 장비" },
];

export default function ServicesPage() {
  return (
    <main className="container py-14">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold">서비스</h1>
        <p className="mt-4 text-neutral-600">루어몬스터가 제공하는 주요 서비스입니다.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
