// components/sections/NewGear.tsx
"use client";
import { motion } from "framer-motion";

const items = [
  { key: "rod",    title: "New Rod",    desc: "최신 로드 라인업 미리보기" },
  { key: "reel",   title: "New Reel",   desc: "경량/하이기어 신제품" },
  { key: "lure",   title: "New Lure",   desc: "신규 색상/수심대 공략" },
];

export function NewGear() {
  return (
    <section id="store" className="py-20">
      <div className="container">
        <h2 className="text-[28px] sm:text-3xl font-bold text-brand mb-10">
          새로운 장비를 소개할게요!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.button
              type="button"
              key={it.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative w-full aspect-[4/3] rounded-3xl bg-white
                         shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_18px_40px_rgba(234,85,20,0.18)]
                         transition-all overflow-hidden"
              onClick={() => console.log(`clicked ${it.key}`)}
            >
              {/* 빈 카드처럼 보이도록 내부 여백/가이드 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFF3EA]" />
              <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-black/5" />

              {/* 내용(타이포) */}
              <div className="absolute left-6 bottom-6">
                <div className="text-lg font-bold text-neutral-900">{it.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{it.desc}</div>
              </div>

              {/* 호버 오렌지 글로우 */}
              <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-brand/20 blur-3xl" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
