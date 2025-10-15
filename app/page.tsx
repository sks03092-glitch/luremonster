import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
             초보도 쉬운 낚시 플랫폼
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
             루어몬스터와 함께하세요!
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-white hover:opacity-90"
            >
              스토어 이동
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-xl border px-5 hover:bg-neutral-50"
            >
              더 알아보기
            </a>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border">
          <Image
            src="/home logo.svg"    // public/home logo.svg 기본 파일 사용
            alt="앱 미리보기"
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">핵심 기능</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "낚시인 커뮤니티", desc: "실시간 조황, 지역별 어획량, 다양한 정보" },
            { title: "포인트 추천", desc: "날씨/조류/조황 데이터 기반" },
            { title: "장비 가이드", desc: "로드·라인·채비 최적 조합" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border p-6">
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">루어몬스터 Lure talk Beta.ver </h2>
        <p className="mt-2 text-neutral-600">Beta Taster가 되어 이용후기를 남겨주세요!</p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-white hover:opacity-90"
          >
            Lure Talk GO!
          </a>
        </div>
      </section>
    </div>
  );
}
