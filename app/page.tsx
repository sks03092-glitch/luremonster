import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO 섹션 */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            초보도 쉬운 낚시 플랫폼
          </h1>
          <p className="text-base text-neutral-600">
            루어몬스터와 함께하세요!
          </p>

          <div className="flex gap-3">
            <Button>스토어 이동</Button>
            <Button variant="outline">더 알아보기</Button>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06)]">
          <Image
            src="/home_logo.svg"
            alt="앱 미리보기"
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">핵심 기능</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "낚시인 커뮤니티",
              desc: "실시간 조황, 지역별 소통",
            },
            {
              title: "포인트 추천",
              desc: "날씨/조류/조황 데이터 기반",
            },
            {
              title: "장비 가이드",
              desc: "로드·라인·채비 최적 조합",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-neutral-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="rounded-2xl bg-white p-10 text-center shadow-[0_8px_36px_rgba(0,0,0,0.07),0_3px_10px_rgba(0,0,0,0.05)]">
        <h2 className="text-2xl font-bold">루어몬스터 Lure talk Beta.ver</h2>
        <p className="text-neutral-600 mt-2">
          Beta Tester가 되어 이용후기를 남겨주세요!
        </p>
        <div className="mt-6">
          <Button className="px-6">Lure Talk GO!</Button>
        </div>
      </section>
    </div>
  );
}
