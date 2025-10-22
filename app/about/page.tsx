// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | LureMonster",
  description: "LureMonster 소개",
};

export default function AboutPage() {
  return (
    <main className="container py-14">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold">LureMonster 소개</h1>
        <p className="mt-4 text-neutral-600">
          루어몬스터는 초보부터 전문가까지 누구나 쉽고 재밌게 낚시를 즐길 수 있도록 돕는 플랫폼입니다.
          커뮤니티, 포인트 추천, 장비 가이드 등 다양한 기능을 제공해요.
        </p>
        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl p-6 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold">우리의 미션</h2>
            <p className="mt-2 text-neutral-600">낚시를 더 쉽고, 안전하고, 즐겁게!</p>
          </div>
          <div className="rounded-2xl p-6 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold">핵심 기능</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-600">
              <li>실시간 조황/커뮤니티</li>
              <li>데이터 기반 포인트 추천</li>
              <li>장비 가이드 & 리뷰</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
