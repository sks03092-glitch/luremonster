// components/sections/Features.tsx
"use client";
import { motion } from "framer-motion";

const features = [
  { title: "낚시인 커뮤니티", desc: "실시간 조황, 지역별 소통, 날씨, 물때" },
  { title: "포인트 추천", desc: "날씨·조류·조황 데이터 기반" },
  { title: "장비 가이드", desc: "로드·라인·채비 최적 조합" },
  { title: "루어스토어", desc: "다양한 낚시 장비들을 합리적인 가격으로!" },
  { title: "출조 예약", desc: "출조버스부터 배까지 한 번에!" },
  { title: "소비자 낚시아이템 추천", desc: "필요한 낚시템을 말하면 루어몬스터가 만들어줘요!" },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <h2 className="text-[28px] sm:text-3xl font-bold text-brand mb-8">
          루어몬스터는 이런 것들이 있어요!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.button
              type="button"
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="text-left w-full rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_12px_28px_rgba(234,85,20,0.15)] transition-all"
            >
              <div className="font-semibold text-[15px] text-neutral-900">{f.title}</div>
              <div className="mt-2 text-sm text-neutral-600">{f.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
