"use client";
import { motion } from "framer-motion";

const features = [
  { title: "낚시인 커뮤니티", desc: "실시간 조황, 지역별 소통" },
  { title: "포인트 추천", desc: "날씨·조류·조황 데이터 기반" },
  { title: "장비 가이드", desc: "로드·라인·채비 조합 추천" },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-brand mb-10">
          루어몬스터는 이런 것들이 있어요!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FFF9F5] rounded-2xl p-6 shadow-[0_4px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(234,85,20,0.15)] transition-all"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-neutral-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
