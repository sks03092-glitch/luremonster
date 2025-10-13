import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            초보도 쉬운 낚시 웹/앱 플랫폼
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            바이트 감지부터 포인트 정보까지. 모바일에서도 쾌적하게.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-white hover:opacity-90"
            >
              지금 시작하기
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
            src="/next.svg"    // public/next.svg 기본 파일 사용
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
            { title: "실시간 바이트 감지", desc: "LED/진동 알림과 로그 저장" },
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
        <h2 className="text-2xl sm:text-3xl font-semibold">지금 바로 테스트 해보기</h2>
        <p className="mt-2 text-neutral-600">가입 없이 데모를 이용할 수 있어요.</p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-white hover:opacity-90"
          >
            데모 접속
          </a>
        </div>
      </section>
    </div>
  );
}
